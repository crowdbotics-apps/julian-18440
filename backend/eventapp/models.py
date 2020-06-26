from django.conf import settings
from django.db import models


class Events(models.Model):
    "Generated Model"
    name = models.CharField(max_length=256,)
    description = models.TextField(max_length=256,)
    date = models.DateField()
    time = models.TimeField()


# Create your models here.
