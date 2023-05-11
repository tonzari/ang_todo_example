import { Component } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private todoService: TodoService) { }

  addNewTodo(userTodoString: string): void {
    
    const newTodo: Todo = {
      description: userTodoString,
      colorClass: this.todoService.getRandomColorClass(),
      isComplete: false
    }

    this.todoService.addTodo(newTodo);
  }
}
