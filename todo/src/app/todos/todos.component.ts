import { Component } from '@angular/core';

import { HeaderComponent } from './components/todos-header/todos-header.component';
import { MainComponent } from './components/todos-main/todos-main.component';
import { FooterComponent } from './components/todos-footer/todos-footer.component';

@Component({
  selector: 'app-todos',
  imports: [HeaderComponent,MainComponent,FooterComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent {

}
