from multiprocessing import context
from pickle import TRUE
from django.shortcuts import redirect, render

from loginAndRegistration.models import User
from contentApp.models import Picture


# Create your views here.


def index(request):
    if "loggedInUserId" not in request.session:
        # redirect to user dashboard\profile link
        # return redirect("/accounts/login")
        return redirect("/accounts/login")
        # show all pictures and exclude logged user
    pictures = Picture.objects.exclude(publisher=User.objects.get(
        username=request.session["loggedInUserId"]))

    context = {

        "pictures": pictures,
        "loggedIn": True,  # allows the navbar to be displayed
        "userProfileImg": User.objects.get(username=request.session["loggedInUserId"]).profile_picture,
        "username": User.objects.get(username=request.session["loggedInUserId"]).username,
        
        # stories: #retrieve user stories
    }
    return render(request, "dashboard.html", context)


def createPicture(request):
    if "loggedInUserId" not in request.session:
        # redirect to user dashboard\profile link
        # return redirect("/accounts/login")
        return redirect("/accounts/login")

    if request.method == 'POST':
        url = request.POST["url"]
        title = request.POST["title"]
        description = request.POST["description"]
        publisher = request.session["loggedInUserId"]
        Picture.objects.create(
            url=url, title=title, description=description, publisher=User.objects.get(username=publisher))
        return redirect('/')
    context = {
        "loggedIn": True,
        "userProfileImg": User.objects.get(username=request.session["loggedInUserId"]).profile_picture,
        "username": User.objects.get(username=request.session["loggedInUserId"]).username,
    }
    return render(request, 'createPicture.html', context)


def profile(request, username):
    if "loggedInUserId" not in request.session:
        # redirect to user dashboard\profile link
        # return redirect("/accounts/login")
        return redirect("/accounts/login")
    # get user profile from url and visit it
    # if user not found
    # if User.objects.get(username=username).exists():
    user = User.objects.get(username=username)
    
    # TODO:
    # if user.exists():
    context = {
        "userImages": user.publisher.all(),
        "loggedIn": True,
        "userProfileImg": user.profile_picture,
        "username": user.username,
        "fullName": user.fullName,
        "postsCount":len(user.publisher.all()),
    }
    # else:
    #     context={
    #         "userNotFound":"user not found",
    #     }
    return render(request, "profile.html", context)
