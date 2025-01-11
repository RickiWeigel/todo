import { Component, Input } from '@angular/core';
import { TodoInterface } from '../../types/todo.interface';


@Component({
  selector: 'app-todo',
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {

@Input({required: true}) todo!: TodoInterface;

}
