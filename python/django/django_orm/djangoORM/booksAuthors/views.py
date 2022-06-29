from multiprocessing import context
from django.http import HttpResponse
from django.shortcuts import render, redirect

from .models import Books, Authors
# from .models import Dojos, Ninjas

# Create your views here.


def index(request):
    if request.method == 'POST':
        title = request.POST['Title'],
        Books.objects.create(
            title=request.POST['Title'], desc=request.POST['Description'])
    context = {
        "books": Books.objects.all(),
    }
    return render(request, "Books.html", context)


def addBook(request):
    if request.method == 'POST':
        pass


def addAuthor(request):
    if request.method == 'POST':
        Authors.objects.create(
            first_name=request.POST['FirstName'], last_name=request.POST['LastName'], notes=request.POST['Notes'])
    context = {
        "authors": Authors.objects.all(),
    }
    return render(request, "authors.html", context)


def authors(request):
    if request.method == 'POST':
        Authors.objects.create(
            first_name=request.POST['FirstName'], last_name=request.POST['LastName'], notes=request.POST['Notes'])
    context = {
        "authors": Authors.objects.all(),
    }
    return render(request, "authors.html", context)



def bookInfo(request, bookID):

    context = {
        "book": Books.objects.get(id=int(bookID)),
        "authors": Books.objects.get(id=int(bookID)).authors.all(),
        "allAuthors": Authors.objects.all()

    }
    if request.method == "POST":
        Books.objects.get(id=int(bookID)).authors.add(
            Authors.objects.get(id=int(request.POST["SelectAuthor"])))
    return render(request, "bookInfo.html", context)


def authorInfo(request, authorID):
    context = {
        "author": Authors.objects.get(id=int(authorID)),
        "books": Authors.objects.get(id=int(authorID)).books.all(),
        "AllBooks": Books.objects.all()

    }
    if request.method == "POST":
        Authors.objects.get(id=int(authorID)).books.add(
            Books.objects.get(id=int(request.POST["SelectAuthor"])))
    return render(request, "authorInfo.html", context)

# def addDojo(request):
#     if request.method == "POST":
#         Dojos.objects.create(
#             name=request.POST['Name'], city=request.POST['City'], state=request.POST['State'])
#     return redirect('/dojoAndNinja')

# def addNinja(request):
#     if request.method == "POST":
#         Ninjas.objects.create(
#             dojo_id=int(request.POST['SelectDojo']), first_name=request.POST['FirstName'], last_name=request.POST['LastName'], dojoCenter=Dojos.objects.get(id=int(request.POST['SelectDojo'])))
#     return redirect('/dojoAndNinja')
