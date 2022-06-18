from django.urls import path
# the . indicates that the views file can be found in the same directory as this file
from . import views
urlpatterns = [
    path('', views.index),
    path('result',views.result)

]
