from django.urls import path
# the . indicates that the views file can be found in the same directory as this file
from . import views
urlpatterns = [
    path('', views.index),
    # path('blogs/new', views.new),
    # path('blogs/create', views.create),
    # path('blogs/<int:number>', views.show),
    # path('blogs/<int:number>/edit', views.edit),
    # path('blogs/<int:number>/delete', views.destroy),
    # path('blogs/json', views.response),
]
