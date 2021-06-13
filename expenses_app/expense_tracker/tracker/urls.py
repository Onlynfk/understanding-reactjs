from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import  ExpenseViewSet

router = DefaultRouter()
router.register('expense', ExpenseViewSet, basename='expense')


urlpatterns = [
    path('api/', include(router.urls)),
    path('api/<int:pk>', include(router.urls)),
]