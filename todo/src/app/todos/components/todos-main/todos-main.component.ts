import { Component, computed, inject } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { FilterEnum } from '../../types/filter.enum';
import { TodoComponent } from "../todo/todo.component";

@Component({
  selector: 'app-todos-main',
  imports: [TodoComponent],
  templateUrl: './todos-main.component.html',
  styleUrl: './todos-main.component.scss',
})
export class MainComponent {
  todosService = inject(TodosService);

  visibleTodos = computed(() => {
    const todos = this.todosService.todosSig();
    const filter = this.todosService.filterSig();

    if (filter === FilterEnum.active) {
      return todos.filter((todo) => !todo.isCompleted);
    } else if (filter === FilterEnum.completed) {
      return todos.filter((todo) => todo.isCompleted);
    }
    return todos;
  });
}
