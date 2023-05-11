import { Component, ElementRef, Input, AfterViewInit, Renderer2 } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-single-todo',
  templateUrl: './single-todo.component.html',
  styleUrls: ['./single-todo.component.css']
})
export class SingleTodoComponent implements AfterViewInit {

  @Input() todo!: Todo;

  constructor(private todoService: TodoService, private renderer: Renderer2, private element: ElementRef) {}
  
  ngAfterViewInit(): void {
    
    const randomDegree = this.todoService.getRandomInt(-5,6);
    
    //  change rotation with random num
    this.renderer.setStyle(this.element.nativeElement.querySelector('.todo-item'), 'transform', `rotate(${randomDegree}deg)` );
    
    // after 500ms remove raised class    
    setTimeout(() => {

      // Get reference to dom element
      const todoDiv = this.element.nativeElement.querySelector('.todo-item');
      // use renderer to remove class from element
      this.renderer.removeClass(todoDiv, 'raised');

    }, 500);
  }

  completeTodo(todo: Todo):void {

    if (todo.isComplete) {

      const ren = this.renderer;
      const el = this.element.nativeElement.querySelector('.todo-item');

      ren.setStyle(el, 'transform', `scale(0.01) rotate(180deg)` );

      setTimeout(() => {
        this.todoService.completeTodo(todo);
      }, 1300);
    } else {
      this.todoService.completeTodo(todo);
    }



  }
}
