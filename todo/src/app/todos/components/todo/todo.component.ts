import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoInterface } from '../../types/todo.interface';


@Component({
  selector: 'app-todo',
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent implements OnInit {

@Input({required: true}) todo!: TodoInterface;
@Input({required: true}) isEditing!: boolean;
@Output() setEditing: EventEmitter<string | null> = new EventEmitter();

editingText: string = '';

ngOnInit(): void {
  this.editingText = this.todo.text;
}

changeText(event: Event){
  const value = ((event.target as HTMLInputElement).value)
  this.editingText = value
}
changeTodo():void {

}
}
