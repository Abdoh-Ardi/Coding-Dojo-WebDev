from django.shortcuts import redirect, render

from loginAndRegistration.models import User
from contentApp.models import Picture


# Create your views here.


def index(request):
    if "loggedInUserId" not in request.session:
        # redirect to user dashboard\profile link
        # return redirect("/accounts/login")
        return redirect("/accounts/login")
    pictures=Picture.objects.all()
    context = {
        "username":  User.objects.get(username=request.session["loggedInUserId"]).username,
        "pictures":pictures,
        "loggedIn": True # allows the navbar to be displayed
    }
    return render(request, "dashboard.html", context)


def createPicture(request):
    if request.method == 'POST':
        url= request.POST["url"]
        title= request.POST["title"]
        description = request.POST["description"]
        publisher = request.session["loggedInUserId"]
        publisher1= User.objects.get(username=publisher)
        newpicture=Picture.objects.create(url=url , title = title , description=description , publisher=publisher1)
        return redirect('/')
    return render(request, 'createPicture.html')

