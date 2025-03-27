import { Component } from '@angular/core';
import { CountriesComponent } from './components/countries/countries.component';

@Component({
  selector: 'app-root',
  imports: [CountriesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'api-soap';
}
