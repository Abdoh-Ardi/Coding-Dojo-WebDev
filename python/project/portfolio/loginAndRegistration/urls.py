from django.contrib import admin
from django.urls import path, include
from . import views
urlpatterns = [
    # main page for accounts redirects to login page
    path('', views.index),
    path('login', views.login),
    path('emailsignup', views.register),

    
    # path('admin/', admin.site.urls),
]