import { Component, inject } from '@angular/core';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todos-header',
  imports: [],
  templateUrl: './todos-header.component.html',
  styleUrl: './todos-header.component.scss',
})
export class HeaderComponent {
  todosService = inject(TodosService);
  text: string = '';

  changeText(event: Event):void{
    const target = event.target as HTMLInputElement;
    this.text = target.value;
  }

  addTodo():void{
    this.todosService.addTodo(this.text);
    this.text = '';
  }
}
