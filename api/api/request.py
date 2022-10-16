from django.shortcuts import render
import sys
from backend import main

def start(request):
    print(request)
    pass
    #return render(request, 'hackhavard2/src/LandingPage/LandingPage.js')

def output(request):
    print(request)
    return {'data': main.handleRequest(request = request)}
    return render(request, 'hackhavard2/src/Recepies/recipes.js', {'data': main.handleRequest(request = request)})