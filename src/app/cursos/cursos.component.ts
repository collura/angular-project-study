import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';
import { CursosModule } from './cursos.module';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent  {

  title = 'Curso de Angular';
  cursos: String[];

  constructor(cursos: CursosService) {
    this.cursos = cursos.getCursos();
  }
}
