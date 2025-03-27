import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // URL DE MI API
  private apiUrl = "https://api.chucknorris.io/"

  // CONSTRUCTOR PARA INICIALIZAR EL PROVEEDOR HTTP (REALIZAR PETICIONES)
  constructor(private http: HttpClient) { }

  // METODO O FUNCIÓN PARA OBTENER LAS CATEGORIAS
  getCategories(): Observable<any> {
    // CONTRUYO LA URL ESPECIFICA PARA LAS CATEGORIAS
    return this.http.get(this.apiUrl + "jokes/categories");
  }

  // METODO O FUNCIÓN PARA OBTENER UNA BROMA DE LA CATEGORIA SELECCIONADA
  getJoke(category: string): Observable<any> {
    return this.http.get<any>(this.apiUrl + `jokes/random?category=${category}`)
  }
}
