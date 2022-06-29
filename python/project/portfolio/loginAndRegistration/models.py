from tkinter import CASCADE
import bcrypt
from django.db import models
import re
import enum

# validate it here and in js
# Create your models here.


class AccountManager(models.Manager):
    def registrationValidator(self, postData):

        errors = {}
        EMAIL_REGEX = re.compile(
            r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if len(postData['username']) < 2:
            errors['username'] = "Username should be at least 2 characters"
        if len(postData["fullName"]) < 2:
            errors['fullName'] = "full name should be at least 2 characters"
        if len(postData['email']) == 0:
            errors['register_email'] = "You must enter an email"
        elif not EMAIL_REGEX.match(postData['email']):
            errors['register_email'] = ("Invalid email address!")

        
        current_users = User.objects.filter(username=postData['username'])
        if len(current_users) > 0:
            errors['register_email'] = "That User already exists"
        if len(postData['password']) < 8:
            errors['register_password'] = "Password should be at least 8 characters"
        return errors

    def loginValidator(self, postData):
        errors = {}
        # check if its an email or username or optionally phone number
        existing_user = User.objects.filter(username=postData['username'])
        if len(existing_user) != 1:
            errors['login_username'] = "The username you entered doesn't belong to an account. Please check your username and try again."
        elif bcrypt.checkpw(postData['password'].encode(), existing_user[0].password.encode()) != True:
            errors['login_password'] = "Sorry, your password was incorrect. Please double-check your password."
        if len(postData['password']) < 8:
            errors['login_password'] = "Password should be at least 8 characters"
        return errors


class User(models.Model):
    # TODO optional phone number validation
    # username = models.CharField(max_length=60)
    # TODO optional phone number validation
    # phone_number = models.CharField(max_length=15)
    # googled recommended password MaxLength
    email = models.CharField(max_length=255)
    username = models.CharField(max_length=255, primary_key=True)
    password = models.CharField(max_length=128)
    fullName = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    # TODO prepare associations with other tables from other apps
    # picutres = models.ForeignKey(Picture,related_name="publisher",on_delete=CASCADE)
    # comments = models.ForeignKey(Comment, related_name="author", on_delete=CASCADE)
    objects = AccountManager()
