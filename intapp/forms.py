from .models import Account_Details
from django.contrib import admin
from django import forms

class myaccount(forms.ModelForm):
    class Meta:
        model = Account_Details
        fields=['First_name','Last_name','E_mail','Contact_no','Address']