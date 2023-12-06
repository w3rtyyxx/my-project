
import { Injectable } from '@nestjs/common';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

   createTask(title: string, description: string): Task {
     const id = this.tasks.length + 1;
    const task = new Task(id, title, description, 'OPEN');
    this.tasks.push(task);
    return task;
  }

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: number): Task {
    return this.tasks.find((task) => task.id === id);
  }

  updateTaskStatus(id: number, status: 'OPEN' | 'DONE'): Task {
    const task = this.getTaskById(id);
    if (task) {
      task.status = status;
    }
    return task;
  }
   updateTaskDescription(id: number, newDescription: string): Task {
    const task = this.getTaskById(id);
    if (task) {
      task.setDescription(newDescription);
    }
    return task;
  }


  deleteTask(id: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}