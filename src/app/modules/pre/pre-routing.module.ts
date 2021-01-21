import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PcComponent } from './pc/pc.component';

const routes: Routes = [
  { path: '', component: PcComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreRoutingModule { }
