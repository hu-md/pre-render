import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreRoutingModule } from './pre-routing.module';
import { PcComponent } from './pc/pc.component';


@NgModule({
  declarations: [PcComponent],
  imports: [
    CommonModule,
    PreRoutingModule
  ]
})
export class PreModule { }
