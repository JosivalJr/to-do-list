from django.urls import path
from .views import TaskList, TaskManager

urlpatterns = [
    path('task', TaskList.as_view(), name='task-list'),
    path('task/<int:id>', TaskManager.as_view(), name='task-detail'),
]
