import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  cursos: string [] = ['Angular', 'Java', 'CSharp', 'Ionic', 'JavaScriptcls'];

  constructor() { }

  getCursos(){
    return this.cursos;  }

}
