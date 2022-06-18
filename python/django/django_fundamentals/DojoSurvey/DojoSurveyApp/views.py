import re
from django.shortcuts import render
# from time import gmtime, strftime


def index(request):
    context = {

    }
    return render(request, 'index.html', context)


def result(request):
    context = {
        "Name": request.POST["userName"],
        "Location": request.POST["locations"],
        "FavLanguage": request.POST["favLanguage"],
        "Comment": request.POST["commentArea"]

    }
    return render(request, 'result.html', context)
