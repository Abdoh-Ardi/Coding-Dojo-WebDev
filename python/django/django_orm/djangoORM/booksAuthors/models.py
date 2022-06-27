
from operator import mod
from django.db import models

# Create your models here.


class Books(models.Model):
    title = models.CharField(max_length=255)
    desc = models.TextField(default="No description was provided.")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Authors(models.Model):
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    notes= models.TextField(default="No notes were provided")
    books = models.ManyToManyField(Books, related_name="authors")




