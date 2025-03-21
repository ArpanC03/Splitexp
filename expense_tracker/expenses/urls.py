from django.urls import path
from .views import ExpenseListView

urlpatterns = [
    path('expenses/', ExpenseListView.as_view(), name='expense-list'),
]
