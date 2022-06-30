from django.contrib import admin
from django.urls import path, include
from . import views
urlpatterns = [
    path('', views.index),
    # edit to p/pictureid 
    path('p', views.createPicture),
    # path('admin/', admin.site.urls),
    path('<slug:username>', views.profile)
]
