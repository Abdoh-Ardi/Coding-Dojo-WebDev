import random
from django.shortcuts import redirect, render

# Create your views here.


def index(request):

    if "Answer" in request.session:
        if "Answer" in request.POST:
            request.session["Answer"] = int(request.POST["Answer"])

    else:
        # first visit
        request.session["Answer"] = -1
        request.session["result"] = random.randint(1, 100)
        print("result changed", request.session["result"])
    return render(request, 'index.html')


def reset(request):
    del request.session["Answer"]
    return redirect("/")
