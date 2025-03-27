import { NgClass, NgFor, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';
import { MouseDirective } from '../../directives/mouse.directive';

@Component({
  selector: 'app-directives',
  imports: [NgIf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault, NgClass, NgStyle, MouseDirective],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  mostrar = false
  lista = ["uno", "dos", "tres"]
  color = ""
  esImportante = false
  colorTexto = "red"
}
