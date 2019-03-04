import { CursosService } from './cursos.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [CursosComponent],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    CursosComponent
    ],
  providers:[
    CursosService
  ]
})
export class CursosModule {

}
