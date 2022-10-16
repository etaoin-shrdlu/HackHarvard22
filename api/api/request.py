from django.shortcuts import render
import sys
sys.path.append("../backend")
from backend import main

def output(request):
    return render(request, 'recipes.js', {'data': main.handleRequest(request = request)})