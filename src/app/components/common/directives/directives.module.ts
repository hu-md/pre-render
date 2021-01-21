import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberinputDirective } from './numberinput.directive';
import { NoSsrDirective } from './no-ssr.directive';



@NgModule({
  declarations: [NumberinputDirective, NoSsrDirective],
  imports: [
    CommonModule
  ],
  exports:[
    NumberinputDirective, NoSsrDirective
  ]
})
export class DirectivesModule { }
