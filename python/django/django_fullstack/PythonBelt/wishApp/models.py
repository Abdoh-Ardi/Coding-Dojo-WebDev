from distutils.log import error
from unicodedata import name
from django.db import models

# Create your models here.


class UserManager(models.Manager):
    def wish_validator(self, postData):
        errors = {}
        if len(postData["item"]) < 4:
            errors["item"] = "item name cant be less than 4 characters"
        return errors

    def basic_validator(self, postData):
        errors = {}
        # password atleast 8 characters
        if len(postData["password"]) < 8:
            errors["password"] = "password cannot be less than 3 characters long"
        # username atleast 3 characters
        if len(postData["username"]) < 3:
            errors["username"] = "username cannot be less than 3 characters long"
        elif len(postData["username"]) > 15:
            errors["username"] = "username cannot be more than 15 characters long"
        else:
            try:
                # check equality
                # User.objects.get(email=postData["email"])
                # User.objects.get(email=postData["email"])
                User.objects.get(username=postData["username"])
                # errors["email"] = "Email already exists"
                errors["username"] = "Username already exists"
            except:
                pass

        # # EMAIL_REGEX = re.compile(
        # #     r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        # if not EMAIL_REGEX.match(postData["email"]):
        #     errors["email"] = "Please enter a valid email address"
        # else:
        #     try:
        #         # check equality
        #         # User.objects.get(email=postData["email"])
        #         # User.objects.get(email=postData["email"])
        #         User.objects.get(username=postData["username"])
        #         # errors["email"] = "Email already exists"
        #         errors["username"] = "Username already exists"
        #     except:
        #         pass

        return errors


class User(models.Model):

    name = models.CharField(max_length=255)
    username = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    dateHired = models.DateField()
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)
    objects = UserManager()


class WishList(models.Model):
    item = models.CharField(max_length=255)
    Addedby = models.ForeignKey(
        User, related_name="wish", on_delete=models.CASCADE)
    dateAdded = models.DateTimeField(auto_now_add=True)
    objects = UserManager()
    user_fav = models.ManyToManyField(User,related_name="fav_items")
# item = Item.objects.create(item_name"")
# all of our favorite items
# user = User.objects.get(id=1)
# user.fav_items.all()

# all users who has this 
# item = Item.objects.get(id=1)
# item.user_fav.all()

# user should have two relations
# relations can be in wish favorite