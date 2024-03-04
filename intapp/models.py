from django.db import models

class Account_Details(models.Model):
   
    First_Name = models.CharField(max_length = 30)
    Last_Name = models.CharField(max_length = 30)
    E_mails = models.CharField(max_length = 50) # allow only the length of 50
    Contact_no = models.IntegerField()
    Address = models.TextField() # no limits for this field


# Create your models here.
