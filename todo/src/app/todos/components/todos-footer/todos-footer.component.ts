import { Component, computed, inject } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { FilterEnum } from '../../types/filter.enum';

@Component({
  selector: 'app-todos-footer',
  imports: [],
  templateUrl: './todos-footer.component.html',
  styleUrl: './todos-footer.component.scss',
})
export class FooterComponent {
  todosService = inject(TodosService);
  filterSig = this.todosService.filterSig;
  filterEnum = FilterEnum;

  activeCount = computed(() => {
    return this.todosService.todosSig().filter((todo) => !todo.isCompleted).length;
  });

  changeFilter(event: Event, filterName: FilterEnum): void {
    event.preventDefault();
    this.todosService.changeFilter(filterName);
  }
}
