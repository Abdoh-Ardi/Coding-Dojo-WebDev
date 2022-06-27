
from operator import mod
from django.db import models

# Create your models here.


class Dojos(models.Model):
    name = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    desc = models.TextField(default="old dojo")


class Ninjas(models.Model):
    dojo_id = models.IntegerField()
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    dojoCenter = models.ForeignKey(
        Dojos, related_name="ninjas", on_delete=models.CASCADE)

