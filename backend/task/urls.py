from django.urls import path
from .views import TaskList, TaskManager, TaskComplete

urlpatterns = [
    path('v1/task', TaskList.as_view(), name='task-list'),
    path('v1/task/<int:id>', TaskManager.as_view(), name='task-detail'),
    path('v1/task/complete/<int:id>', TaskComplete.as_view(), name='complete-task'),
]
