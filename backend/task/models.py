from django.db import models

class Task(models.Model):
    title = models.CharField(max_length=64)
    description = models.TextField(max_length=2000, blank=True)
    is_complete = models.BooleanField(default=False)
    due_date = models.DateTimeField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
        
    def __str__(self) -> str:
        return f'[TASK {self.id}] {self.title}'