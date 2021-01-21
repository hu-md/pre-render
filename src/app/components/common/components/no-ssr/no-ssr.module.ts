import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NoSsrComponent } from './no-ssr.component';


@NgModule({
  declarations: [NoSsrComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NoSsrComponent]
})
export class NoSsrModule { }
