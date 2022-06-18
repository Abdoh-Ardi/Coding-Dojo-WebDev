from . import views
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path("", views.index),
    path("destroy_session", views.destroy),
    # path('admin/', admin.site.urls),
]
