import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NonExistComponent } from './non-exist/non-exist.component';

const routes: Routes = [
  {
    path: '',
    component: NonExistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorRoutingModule { }
