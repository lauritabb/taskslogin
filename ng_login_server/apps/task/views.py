from django.shortcuts import render, redirect, HttpResponse
from django.core import serializers
from .models import User
from .models import Task
import json

def index(request):
    data_task =serializers.serialize("json", Task.objects.all(), indent=2, use_natural_foreign_keys=True)
    return HttpResponse(data_task, status=200, content_type="application/json")

def show(request,id):
    data_task =serializers.serialize("json", Task.objects.filter(id=id), indent=2, use_natural_foreign_keys=True)
    return HttpResponse(data_task, status=200,content_type="application/json")

def create(request):
    data_task = json.loads(request.body.decode())
    return HttpResponse("you are in create show of task")
