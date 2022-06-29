from django.db import models
# validate it here and in js
# Create your models here.


class User(models.Model):
    username = models.CharField(max_length=60)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    # googled recommended password MaxLength
    password = models.CharField(max_length=128)
    # TODO: prepare associations with other tables from other apps
