import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { JsonPipe, NgFor, NgIf, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-categories',
  imports: [NgFor, NgIf, JsonPipe, UpperCasePipe],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  categories: any[] = []; // VARIABLE PARA ALMACENAR LA INFORMACIÓN DE LA API
  joke: string = ''; //VARIABLE PARA GENERAR UNA BROMA ALEATORIA
  prueba = {
    nombre: "alejandro"
  }

  // INICIALIZO EL COMPONENTE CON EL API SERVICE PARA CONSUMIRLO
  constructor(private apiService: ApiService) {}

  // OBTENGO LA INFORMACIÓN DEL METODO QUE REQUIERO
  getCategories() {
    this.apiService.getCategories().subscribe(response => {
      this.categories = response; // SE GUARDAN LOS DATOS OBTENIDOS EN LA VARIABLE YA DEFINIDA
    });
  }

  getJoke(category: string) {
    // Obtener una broma aleatoria de la categoría seleccionada
    this.apiService.getJoke(category).subscribe(response => {
      this.joke = response.value;
    });
  }
}
