from django.shortcuts import render


def index(req):
    return render(req, 'index.html')

def nindex(req):
    return render(req, 'nindex.html')