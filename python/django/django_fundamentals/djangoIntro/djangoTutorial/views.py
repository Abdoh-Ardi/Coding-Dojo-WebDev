from django.shortcuts import render, HttpResponse

# Create your views here.
# def index(request):
#     return HttpResponse("this is the equivalent of @app.route('/')!")

# Create your views here.
from django.shortcuts import render, HttpResponse


def index(request):
    return HttpResponse("response from index method from root route, localhost:8000!")

def bearsMethod(request):
    pass

def bearsNumberMethod(request, value):
    pass

def bearNameMethod(request, name):
    pass

def numberAndColor(request, value, color):
    pass

