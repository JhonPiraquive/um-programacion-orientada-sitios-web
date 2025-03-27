import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bindings',
  imports: [FormsModule],
  templateUrl: './bindings.component.html',
  styleUrl: './bindings.component.css'
})
export class BindingsComponent {
  nombre = 'Angular';
  imagenUrl = 'https://angular.io/assets/images/logos/angular/angular.svg';
  mostrarMensaje() {
    alert('¡Hola desde Angular!');
  }
  apellido=""
}
