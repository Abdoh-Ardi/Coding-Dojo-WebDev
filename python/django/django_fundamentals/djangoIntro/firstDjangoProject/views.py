from django.shortcuts import render

# Create your views here.
# from django.shortcuts import render, HttpResponse

# Create your views here.
# def index(request):
#     return HttpResponse("this is the equivalent of @app.route('/')!")

# Create your views here.
from time import strftime
from django.http import JsonResponse
from django.shortcuts import redirect, render, HttpResponse


def root(request):

    return redirect("/blogs")


def index(request):
    return HttpResponse("placeholder to display a list of all blogs")



def new(request):
    return HttpResponse("placeholder to display a new form to create a new blog")


def create(request):
    return redirect("/")


def show(request, number):

    return HttpResponse("placeholder to display blog number: "+str(number))

def edit(request,number):
    return HttpResponse("placeholder to edit blog "+str(number))

def destroy(request,number):
    return HttpResponse("placeholder to destroy blog "+str(number))

def response(request):
    return JsonResponse({"title": "my first blog", "content": "lorem ipsum dolor sit amet consectetuer adipiscing elit"})