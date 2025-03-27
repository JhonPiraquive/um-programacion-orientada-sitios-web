import { 
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, 
  Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges 
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hooks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() dato: string = 'Valor inicial';
  logs: string[] = []; // Almacenar logs para mostrar en pantalla

  constructor() {
    this.log("Constructor: El componente ha sido creado.");
  }

  ngOnChanges(changes: SimpleChanges) {
    this.log("ngOnChanges: Se detectaron cambios en los @Input()");
  }

  ngOnInit() {
    this.log("ngOnInit: El componente ha sido inicializado.");
  }

  ngDoCheck() {
    this.log("ngDoCheck: Detección de cambios manual ejecutada.");
  }

  ngAfterContentInit() {
    this.log("ngAfterContentInit: Contenido proyectado en el componente inicializado.");
  }

  ngAfterContentChecked() {
    this.log("ngAfterContentChecked: Se verificaron cambios en el contenido proyectado.");
  }

  ngAfterViewInit() {
    this.log("ngAfterViewInit: Vista del componente y sus hijos inicializados.");
  }

  ngAfterViewChecked() {
    this.log("ngAfterViewChecked: Se verificaron cambios en la vista.");
  }

  ngOnDestroy() {
    this.log("ngOnDestroy: El componente está siendo destruido.");
  }

  log(mensaje: string) {
    console.log(mensaje);
    this.logs.push(mensaje);
  }
}
