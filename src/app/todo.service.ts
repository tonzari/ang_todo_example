import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

   private todos: Todo[] = [
    {
      description: 'Buy groceries',
      colorClass: 'sticky-note-yellow',
      isComplete: false,
    },
    {
      description: 'Finish project report',
      colorClass: 'sticky-note-pink',
      isComplete: true,
    },
    {
      description: 'Call dentist for appointment',
      colorClass: 'sticky-note-green',
      isComplete: false,
    },
    {
      description: 'Plan weekend trip',
      colorClass: 'sticky-note-blue',
      isComplete: false,
    },
    {
      description: 'Buy birthday gift for mom',
      colorClass: 'sticky-note-orange',
      isComplete: true,
    },
    // {
    //   description: 'Walk the dog',
    //   colorClass: 'sticky-note-purple',
    //   isComplete: false,
    // },
    // {
    //   description: 'Complete tax returns',
    //   colorClass: 'sticky-note-yellow',
    //   isComplete: true,
    // },
    // {
    //   description: 'Read a book',
    //   colorClass: 'sticky-note-pink',
    //   isComplete: false,
    // },
    // {
    //   description: 'Clean the kitchen',
    //   colorClass: 'sticky-note-green',
    //   isComplete: false,
    // },
    // {
    //   description: 'Write a blog post',
    //   colorClass: 'sticky-note-blue',
    //   isComplete: true,
    // },
    // {
    //   description: 'Watch a movie',
    //   colorClass: 'sticky-note-orange',
    //   isComplete: false,
    // },
    // {
    //   description: 'Visit the gym',
    //   colorClass: 'sticky-note-purple',
    //   isComplete: true,
    // },
    // {
    //   description: 'Prepare a presentation',
    //   colorClass: 'sticky-note-yellow',
    //   isComplete: false,
    // },
    // {
    //   description: 'Repair the bicycle',
    //   colorClass: 'sticky-note-pink',
    //   isComplete: true,
    // },
    // {
    //   description: 'Plant a tree',
    //   colorClass: 'sticky-note-green',
    //   isComplete: false,
    // }
  ];
  
  // see the CSS file. these are names of css styles. we randomly choose one and apply that style to newly created todo items.
  stickyNoteColors = [
    'sticky-note-yellow',
    'sticky-note-pink', 
    'sticky-note-green', 
    'sticky-note-blue', 
    'sticky-note-orange', 
    'sticky-note-purple'
  ];
  
  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(todo: Todo): void {
    this.todos.push(todo);
  }

  completeTodo(todo: Todo): void {
    if (todo.isComplete) {
      this.deleteTodo(todo);
    } else {
      todo.isComplete = true;
    }
  }

  deleteTodo(todo: Todo): void {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
  }

  getRandomColorClass(): string {
    let randColorIndex = this.getRandomInt(0, this.stickyNoteColors.length);
    return this.stickyNoteColors[randColorIndex];
  }

  getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);

    // The maximum is exclusive and the minimum is inclusive
    return Math.floor(Math.random() * (max - min) + min); 
  }
}
