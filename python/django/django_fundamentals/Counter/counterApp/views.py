from multiprocessing import context
from django.shortcuts import redirect, render

# Create your views here.


def index(request):
    if 'counter' in request.session:
        request.session['counter'] += 1
    else:
        request.session['counter'] = 0
    return render(request, "index.html")


def destroy(request):
    # just redirect if it doesnt exist to avoid a crash
    if 'counter' in request.session:
        del request.session['counter']
    return redirect("/")
