from collections import UserList
import email
from multiprocessing import context
from django.shortcuts import render
from .models import User

# Create your views here.


def index(request):
    if request.method == "POST":
       User.objects.create(first_name= request.POST['FirstName'],last_name=request.POST['LastName'],email=request.POST['Email'],age=request.POST['Age'])
    context = {
        "usersList": User.objects.all()
    }
    return render(request, 'index.html',context)
