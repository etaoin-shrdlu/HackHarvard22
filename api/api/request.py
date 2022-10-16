from django.shortcuts import render
import sys
sys.path.append("/Users/yashsancheti/Yash/HackHarvard22/backend")
import main

def start(request):
    return render(request, 'src/LandingPage/LandingPage.js')

def output(request):
    return render(request, 'src/Recepies/recipes.js', {'data': main.handleRequest(request = request)})