from django.http import HttpResponse
from django.shortcuts import render, redirect
from .models import Dojos, Ninjas

# Create your views here.


def index(request):
    context = {
        "dojoList": Dojos.objects.all(),
    }
    return render(request, "dojoAndNinja.html", context)


def addDojo(request):
    if request.method == "POST":
        Dojos.objects.create(
            name=request.POST['Name'], city=request.POST['City'], state=request.POST['State'])
    return redirect('/dojoAndNinja')


def addNinja(request):
    if request.method == "POST":
        Ninjas.objects.create(
            dojo_id=int(request.POST['SelectDojo']), first_name=request.POST['FirstName'], last_name=request.POST['LastName'], dojoCenter=Dojos.objects.get(id=int(request.POST['SelectDojo'])))
    return redirect('/dojoAndNinja')
