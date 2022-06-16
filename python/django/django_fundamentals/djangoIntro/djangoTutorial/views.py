# from django.shortcuts import render, HttpResponse

# Create your views here.
# def index(request):
#     return HttpResponse("this is the equivalent of @app.route('/')!")

# Create your views here.
from time import strftime
from django.http import JsonResponse
from django.shortcuts import redirect, render, HttpResponse


def index(request):
    
    context = {
        "name": "Noelle",
        "favorite_color": "turquoise",
        "pets": ["Bruce", "Fitz", "Georgie"],
        "time": strftime("%Y-%m-%d %H:%M %p")

    }

    if request.method == "POST":
        valueFromField = request.POST["colorName"]
        context['colorName']= valueFromField
        # print(request.POST)

    return render(request, 'index.html', context)


def bearsMethod(request):
    if request.method == "GET":
        print(request.GET)
    if request.method == "POST":
        valueFromField = request.POST["colorName"]
        print(request.POST)
    return HttpResponse(request, "Request sent")


def bearsNumberMethod(request, value):
    pass


def bearNameMethod(request, name):
    pass


def numberAndColor(request, value, color):
    pass


def another_method(request):
    return redirect("/redirected_method")


def redirected_method(request):
    return JsonResponse({"response": "JSON response from redirected_method", "status": True})
