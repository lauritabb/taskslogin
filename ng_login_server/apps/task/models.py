from django.db import models
from apps.log_reg.models import User

# Create your models here.
class Task(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(default='')
    assigned = models.ManyToManyField(User, related_name="tasks")
    completed = models.BooleanField(default=False)
    created_at= models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    