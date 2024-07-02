from http import HTTPStatus
from django.http import JsonResponse
from django.views import View
from .models import Task

from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.forms.models import model_to_dict
import json

@method_decorator(csrf_exempt, name='dispatch')
class TaskList(View):
    def get(self, request):
        try:
            tasks = list(Task.objects.all().values())
            return JsonResponse(tasks, safe=False, status=HTTPStatus.OK)
        except Exception as error:
            return JsonResponse({'error': str(error)}, status=HTTPStatus.INTERNAL_SERVER_ERROR)

    def post(self, request):
        try:
            data = json.loads(request.body)
            task = Task.objects.create(**data)
            return JsonResponse(model_to_dict(task), status=HTTPStatus.CREATED)
        except Exception as error:
            return JsonResponse({'error': str(error)}, status=HTTPStatus.INTERNAL_SERVER_ERROR)

@method_decorator(csrf_exempt, name='dispatch')
class TaskManager(View):
    def get(self, request, id):
        try:
            task = Task.objects.get(id=id)
            return JsonResponse(model_to_dict(task), status=HTTPStatus.OK)
        except Task.DoesNotExist:
            return JsonResponse({'error': 'Task not found'}, status=HTTPStatus.NOT_FOUND)
        except Exception as error:
            return JsonResponse({'error': str(error)}, status=HTTPStatus.INTERNAL_SERVER_ERROR)

    def patch(self, request, id):
        try:
            data = json.loads(request.body)
            task = Task.objects.get(id=id)
            for key, value in data.items():
                setattr(task, key, value)
            task.save()
            return JsonResponse(model_to_dict(task), status=HTTPStatus.ACCEPTED)
        except Task.DoesNotExist:
            return JsonResponse({'error': 'Task not found'}, status=HTTPStatus.NOT_FOUND)
        except Exception as error:
            return JsonResponse({'error': str(error)}, status=HTTPStatus.INTERNAL_SERVER_ERROR)

    def delete(self, request, id):
        try:
            task = Task.objects.get(id=id)
            task.delete()
            return JsonResponse({'message': 'Task deleted'}, status=HTTPStatus.NO_CONTENT)
        except Task.DoesNotExist:
            return JsonResponse({'error': 'Task not found'}, status=HTTPStatus.NOT_FOUND)
        except Exception as error:
            return JsonResponse({'error': str(error)}, status=HTTPStatus.INTERNAL_SERVER_ERROR)
        
@method_decorator(csrf_exempt, name='dispatch')
class TaskComplete(View):
    def get(self, request, id):
        try:
            is_complete = request.GET.get('is_complete')

            if is_complete is None:
                return JsonResponse({'error': 'is_complete parameter is required'}, status=HTTPStatus.BAD_REQUEST)

            if is_complete.lower() == 'true':
                is_complete = True
            elif is_complete.lower() == 'false':
                is_complete = False
            else:
                return JsonResponse({'error': 'is_complete parameter must be a boolean'}, status=HTTPStatus.BAD_REQUEST)

            task = Task.objects.get(id=id)
            setattr(task, 'is_complete', is_complete)
            task.save()
            return JsonResponse(model_to_dict(task), status=HTTPStatus.ACCEPTED)
        except Task.DoesNotExist:
            return JsonResponse({'error': 'Task not found'}, status=HTTPStatus.NOT_FOUND)
        except Exception as error:
            return JsonResponse({'error': str(error)}, status=HTTPStatus.INTERNAL_SERVER_ERROR)