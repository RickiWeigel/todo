import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { TodoInterface } from '../../types/todo.interface';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todo',
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent implements OnInit {
  @Input({ required: true }) todo!: TodoInterface;
  @Input({ required: true }) isEditing!: boolean;
  @Output() setEditingId: EventEmitter<string | null> = new EventEmitter();
  todosService = inject(TodosService);

  editingText: string = '';

  ngOnInit(): void {
    this.editingText = this.todo.text;
  }

  changeText(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.editingText = value;
  }
  changeTodo(): void {
    this.todosService.changeTodo(this.todo.id, this.editingText);
    this.setEditingId.emit(null);
  }

  setTodoOnEditdMode() {
    this.setEditingId.emit(this.todo.id);
  }

  removeTodo() {
    this.todosService.removeTodo(this.todo.id);
  }

  toggleTodo() {
    this.todosService.toggleTodo(this.todo.id);
  }
}
