from django.db import models
from loginAndRegistration.models import User
# Create your models here.
# FIXME class pictures remove pass


class Picture(models.Model):
    url = models.URLField()
    title = models.CharField(max_length=255)
    description = models.TextField()
    # likes
    publisher = models.ForeignKey(
        User, related_name="publisher", on_delete=models.CASCADE)
    createdAt = models.DateTimeField(auto_now_add=True)
    #comment = models.ForeignKey(Comments, related_name="comments",  on_delete=models.CASCADE)
