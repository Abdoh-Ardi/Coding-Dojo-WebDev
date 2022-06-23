from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    # path("", views.index),
    path("main", views.main),
    path("dashboard", views.dashboard),
    path("wish_items/<int:number>", views.wishItems),
    path("wish_items/create", views.wishCreate),
    path("login", views.login),
    path("register", views.register),
    path("logout", views.logout),
    path("wish/<int:wishID>/delete", views.wishDelete),
    path("wish/<int:wishID>/add", views.addItemfromOther)
]
