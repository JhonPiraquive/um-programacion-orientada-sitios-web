<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Exception;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

// CRUD DE TAREAS
class TaskController extends Controller
{
    public function read()
    {
        try {
            $allTasks = Task::all(); // SELECT * FROM tasks
        } catch (QueryException $error) {
            return response('Something went wrong!', Response::HTTP_INTERNAL_SERVER_ERROR);
        } catch (Exception $error) {
            return response($error->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }

        return response($allTasks, Response::HTTP_OK);
    }

    public function readActive() {
        try {
            $activeTasks = Task::where('status', 1)->get(); // SELECT * FROM tasks WHERE status = 1
        } catch (QueryException $error) {
            return response('Something went wrong!', Response::HTTP_INTERNAL_SERVER_ERROR);
        } catch (Exception $error) {
            return response($error->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }

        return response($activeTasks, Response::HTTP_OK);
    }

    public function create(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'status' => 'required'
        ]);

        try {
            $task = new Task($request->all());
            $task->save();
        } catch (QueryException $error) {
            return response('Something went wrong!', Response::HTTP_INTERNAL_SERVER_ERROR);
        } catch (Exception $error) {
            return response($error->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }

        return response($task, Response::HTTP_OK);
    }

    public function update($taskId, Request $request)
    {
        $request->validate([
            'name' => 'required',
            'status' => 'required'
        ]);

        try {
            // $task = Task::where('id', $taskId)->get();
            // $task = Task::find($taskId);
            $task = Task::findOrFail($taskId);
            $task->update($request->all());
        } catch (QueryException $error) {
            return response('Something went wrong!', Response::HTTP_INTERNAL_SERVER_ERROR);
        } catch (Exception $error) {
            return response($error->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }

        return response($task, Response::HTTP_OK);
    }

    public function patch($taskId, Request $request)
    {
        $request->validate([
            'status' => 'required'
        ]);

        try {
            // $task = Task::where('id', $taskId)->get();
            // $task = Task::find($taskId);
            $task = Task::findOrFail($taskId);
            $task->status = $request->status;
            $task->update();
        } catch (QueryException $error) {
            return response('Something went wrong!', Response::HTTP_INTERNAL_SERVER_ERROR);
        } catch (Exception $error) {
            return response($error->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }

        return response($task, Response::HTTP_OK);
    }

    public function delete($taskId)
    {
        try {
            // $task = Task::where('id', $taskId)->get();
            // $task = Task::find($taskId);
            $task = Task::findOrFail($taskId);
            $task->delete();
        } catch (QueryException $error) {
            return response('Something went wrong!', Response::HTTP_INTERNAL_SERVER_ERROR);
        } catch (Exception $error) {
            return response($error->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }

        return response('Task Deleted!', Response::HTTP_OK);
    }
}
