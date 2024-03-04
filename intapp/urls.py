from django.urls import path
from intapp import views


urlpatterns = [
    path('',views.index ,name='index'),
    path('home/',views.home ,name='home'),
   path('two/',views.two ,name="two"),
   path('contact/',views.contact , name="contact")



]