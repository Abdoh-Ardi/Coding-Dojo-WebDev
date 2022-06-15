from django.urls import path     
from . import views	# the . indicates that the views file can be found in the same directory as this file
urlpatterns = [
    path('', views.index),
    path('bears', views.bearsMethod),
    path('bears/<int:value>',views.bearsNumberMethod),
    path('bears/<str:name/poke',views.bearNameMethod),
    path('<int:id>/<str:color>',views.numberAndColor)
]
