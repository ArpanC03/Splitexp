from django.db import models

class Expense(models.Model):
    title = models.CharField(max_length=100)  # Expense title
    amount = models.DecimalField(max_digits=10, decimal_places=2)  # Expense amount
    date = models.DateField()  # Date of the expense
    group = models.CharField(max_length=100, blank=True, null=True)  # Group (optional)

    def __str__(self):
        return self.title
