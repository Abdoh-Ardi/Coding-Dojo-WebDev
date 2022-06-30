from ast import If
import bcrypt
from django.shortcuts import redirect, render
from loginAndRegistration.models import User
from django.contrib import messages

# Create your views here.


def index(request):
    return redirect('accounts/login')


def login(request):
    #login session not working right when you come back to login page 
    if "loggedInUserId" in request.session:
        return redirect("/")
    if request.method == 'POST':
        errors = User.objects.loginValidator(request.POST)
        if len(errors) > 0:
            for key, errorMessage in errors.items():
                messages.error(request, errorMessage)
            return redirect("/")
        messages.success(request, "You have logged in!")
        user1 = request.POST["username"]
        usersession= User.objects.get(username=user1)
        request.session["loggedInUserId"] = usersession.username
        return redirect("/")
    return render(request, "login.html")


def register(request):
    if "loggedInUserId" in request.session:
        return redirect("/")

    if request.method == 'POST':
        errors = User.objects.registrationValidator(request.POST)
        if len(errors) > 0:
            for key, errorMessage in errors.items():
                messages.error(request, errorMessage)
            return render(request, "register.html")
        else:
            email = request.POST["email"]
            username = request.POST["username"]
            password = request.POST['password']
            fullName = request.POST["fullName"]
            passwordHash = bcrypt.hashpw(
                password.encode(), bcrypt.gensalt()).decode()
            newUser = User.objects.create(
                email=email, username=username, password=passwordHash, fullName=fullName)
            request.session["loggedInUserId"] = newUser.username
            messages.success(request, "Insatgram User has been created")
            return redirect("/")
    return render(request, "register.html")

def logout(request):
    request.session.clear()
    messages.success(request, "You have been logged out!")
    return redirect("/login")
