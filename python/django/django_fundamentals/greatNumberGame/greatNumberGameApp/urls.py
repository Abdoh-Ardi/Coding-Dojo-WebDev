from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('',views.index),
    path('reset',views.reset),
    # path('admin/', admin.site.urls),
]
