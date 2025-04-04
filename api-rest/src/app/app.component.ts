import { Component } from '@angular/core';
import { CategoriesComponent } from './components/categories/categories.component';
import { HooksComponent } from './components/hooks/hooks.component';
import { NgIf } from '@angular/common';
import { DirectivesComponent } from './components/directives/directives.component';
import { BindingsComponent } from './components/bindings/bindings.component';
import { UsersModule } from './modules/users/users.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CategoriesComponent, HooksComponent, NgIf, DirectivesComponent, BindingsComponent, UsersModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'api-rest';
  mostrarComponente = false;
  valor = "Valor inicial";

  toggleComponente() {
    this.mostrarComponente = !this.mostrarComponente;
  }

  cambiarDato() {
    this.valor = "Nuevo valor " + Math.random().toFixed(2);
  }
}
