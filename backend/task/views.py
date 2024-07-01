from django.http import JsonResponse, HttpResponse
from django.views import View
from .models import Task

from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.forms.models import model_to_dict
import json

@method_decorator(csrf_exempt, name='dispatch')
class TaskList(View):
    def get(self, request):
        print('List tasks route')
        return HttpResponse('List tasks route')

    def post(self, request):
        print('Create task route')
        return HttpResponse('Create task route')

@method_decorator(csrf_exempt, name='dispatch')
class TaskManager(View):
    def get(self, request, id):
        print('Find task route')
        return HttpResponse('Find task route')

    def patch(self, request, id):
        print('Update task route')
        return HttpResponse('Update task route')

    def delete(self, request, id):
        print('Delete task route')
        return HttpResponse('Delete task route')