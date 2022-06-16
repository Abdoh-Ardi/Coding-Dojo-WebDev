from django.urls import path
# the . indicates that the views file can be found in the same directory as this file
from . import views
urlpatterns = [
    path('', views.index),
    path('bears', views.bearsMethod),
    path('bears/<int:value>', views.bearsNumberMethod),
    path('bears/<str:name/poke', views.bearNameMethod),
    path('<int:id>/<str:color>', views.numberAndColor),
    path('another_route', views.another_method),
    path('redirected_route', views.redirected_method),
]
