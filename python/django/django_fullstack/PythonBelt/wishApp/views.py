from django.shortcuts import render, redirect
from wishApp.models import User, WishList
from django.contrib import messages
import bcrypt

# Create your views here.


# def index(request):
#     return redirect(request, "main.html")


def main(request):

    return render(request, "main.html")


# def dashboard(request):
#     pass

# password atleast 8 characters password


def wishItems(request, number):
    pass


def wishCreate(request):
    if request.method == "POST":
        error = WishList.objects.wish_validator(request.POST)

        if len(error) > 0:
            for key, errorMessage in error.items():
                messages.error(request, errorMessage)
            return redirect("/dashboard")  # redirect to same page

            # return render(request, "create-wish.html", context)
        else:
            itemName = request.POST["item"]
            loggedInUser = User.objects.get(
                id=request.session["loggedInUserId"])
            newWish = WishList.objects.create(
                item=itemName,  Addedby=loggedInUser)
            return redirect("/dashboard")
    return render(request, "create-wish.html")


def wishDelete(request, wishID):
    if request.method == "POST":
        print(request.session)
        loggedInUser = User.objects.get(id=request.session["loggedInUserId"])
        wish = WishList.objects.get(pk=wishID)
        wish.delete()
        return redirect("/dashboard")


def login(request):
    if request.method == "POST":

        userName = request.POST["username"]
        # email = request.POST["email"]
        password = request.POST["password"]
        try:
            user = User.objects.get(username=userName)
            if bcrypt.checkpw(password.encode(), user.password.encode()):
                request.session["loggedInUserId"] = user.id
                messages.success(request, "You have logged in!")
                return redirect("/dashboard")
            else:
                messages.error(request, "User password do not match")
        except User.DoesNotExist:
            messages.error(request, "User not found")

    return redirect("/main")  # redirect to main page


def logout(request):
    del request.session['loggedInUserId']
    return redirect("/main")


def register(request):
    if request.method == "POST":
        errors = User.objects.basic_validator(request.POST)
        if len(errors) > 0:
            for key, errorMessage in errors.items():
                messages.error(request, errorMessage)
            return redirect("/main")  # redirect to main
        else:
            # email = request.POST["email"]
            name = request.POST["name"]
            username = request.POST["username"]
            password = request.POST["password"]
            confirmPassword = request.POST["confirmPW"]
            dateHired = request.POST["dateHired"]
            if password == confirmPassword:
                passwordHash = bcrypt.hashpw(
                    password.encode(), bcrypt.gensalt()).decode()
                newUser = User.objects.create(
                    name=name, username=username, password=passwordHash, dateHired=dateHired)
                request.session["loggedInUserId"] = newUser.id
                messages.success(request, "User has been created")
                return redirect("/dashboard")
            else:
                messages.error("password is not matching.")
                return redirect("/main")


def dashboard(request):

    if "loggedInUserId" not in request.session:
        messages.error(request, "Plese login first")
        return redirect("/main")

    loggedInUser = User.objects.get(id=request.session["loggedInUserId"])

    wishList = WishList.objects.filter(Addedby=loggedInUser)
    allWishLists = WishList.objects.exclude(Addedby=loggedInUser)
    context = {
        "user": loggedInUser,
        "wishList": wishList,
        "otherWishList": allWishLists
    }

    return render(request, "dashboard.html", context)


def addItemfromOther(request, wishID):
    print(wishID)
    if request.method == "POST":
        wish = WishList.objects.get(id=wishID)
    newWish = WishList.objects.create(
        item=wish.item,  Addedby=User.objects.get(id=request.session["loggedInUserId"]))
    return redirect("/dashboard")


def wishItems(request, number):
    if request.method == "POST":
        wish = WishList.objects.get(id=number)

        context = {
            "wish": wish,
            "allUsers": wish.user_fav.all()
        }
    return render(request, "wishItems.html",)
