from django.urls import path
from . import views
urlpatterns = [
    path('', views.index),
    path('addbook',views.addBook),
    path('authors',views.authors),
    path('authors/addAuthor',views.addAuthor),
    path('authors/<int:authorID>',views.authorInfo),
    path('books/<int:bookID>',views.bookInfo),
    # path('addDojo',views.addDojo),
    # path('addNinja',views.addNinja),
    # path('admin/', admin.site.urls),
]
