from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('expenses.urls')),  # Include expenses app URLs under /api/
]
