from django.shortcuts import render
import sys
from backend import main

def start(request):
    return render(request, 'hackhavard2/src/LandingPage/LandingPage.js')

def output(request):
    return render(request, 'hackhavard2/src/Recepies/recipes.js', {'data': main.handleRequest(request = request)})