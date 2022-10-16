from django.shortcuts import render
import sys
from backend import main
import json
from django.http import HttpResponse, HttpResponseRedirect

"""
from django.db import models
from rest_framework import serializers
class React(models.Model):
    name = models.CharField(max_length=30)
    detail = models.CharField(max_length=500)  

class ReactSerializer(serializers.ModelSerializer):
    class Meta:
        model = React
        fields = ['name', 'detail']

from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
  
class ReactView(APIView):
    
    serializer_class = ReactSerializer
  
    def get(self, request):
        detail = [ {"name": detail.name,"detail": detail.detail} 
        for detail in React.objects.all()]
        return Response(detail)
  
    def post(self, request):
  
        serializer = ReactSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return  Response(serializer.data)

from django.urls import path, include
from django.conf.urls import url
  
urlpatterns = [
    path('recipies/', ReactView.as_view(), name="recipies"),
]
"""

rh = main.RequestHandler()

def start(request):
    print('HERE!!')
    print(request)

    username = 'user123'
    
    rh_request = {
        'username': username,
        'category': request.POST.get('category'),
        'cuisine': request.POST.get('cuisine')
    }
    new_data = rh.handleRequest(request=rh_request)
    print(new_data)
    if new_data is None:
        print(f'No recipies found for user {username}')
        return HttpResponse('No recipies') #TODO: handle this edge case
    return HttpResponse((new_data.__repr__()))
    #print(request)
    #rv = ReactView()
    #return rv.get(request)
    #return render(request, 'hackhavard2/src/LandingPage/LandingPage.js')

def output(request):
    print('HERE??')
    print(request)
    #return HttpResponse()
    
    
    #new_data = main.handleRequest(request = request['body'])
    #request['body'] = new_data
    #return render(request)
    #return render(request, 'hackhavard2/src/Recepies/recipes.js', {'data': main.handleRequest(request = request)})