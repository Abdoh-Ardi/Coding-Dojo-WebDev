from datetime import datetime
from enum  import Enum
from time import gmtime, strftime
from multiprocessing import context
from random import randint
from django.shortcuts import redirect, render

# Create your views here.



def index(request):
    if "coins" not in request.session:
        request.session["coins"] = 0
        request.session["activity"] = []
        
    return render(request, "index.html")


def processMoney(request):
    location = request.POST["which_form"]
    earned = 0
    # increase decrease gold
    if location == 'farm' or location == 'cave' or location == 'house':
        earned = randint(10, 20)
        # write message for activity
    if location == 'quest':
        earned = randint(-50, 50)
        # write message for activity
    request.session["activity"].append({
        "activityName": location,
        "earnedValue": earned,
        "date": datetime.now().strftime("%m %d %Y %H : %M %p")
    })
    request.session["coins"] = request.session["coins"] + earned
    return redirect("/")
