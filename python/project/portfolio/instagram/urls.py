from django.contrib import admin
from django.urls import path, include
from . import views
urlpatterns = [
    path('', views.index),
    path('p/pictureid', views.createPicture)
    # path('admin/', admin.site.urls),
]
