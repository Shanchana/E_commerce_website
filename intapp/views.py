from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    #return HttpResponse("<h1>connected!! to the django</h1>")
    return render(request, 'index.html')

def home(request):
    return render (request,'home.html')

def two(request):
    return HttpResponse("two hello!")

def contact(request):
    
    return render (request , 'contact.html')

# Create your views here.
