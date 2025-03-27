import { Component } from '@angular/core';
import { CategoriesComponent } from './components/categories/categories.component';

@Component({
  selector: 'app-root',
  imports: [CategoriesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'api-rest';
}
