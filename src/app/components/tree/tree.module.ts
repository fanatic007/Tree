import { NgModule } from '@angular/core';
import { TreeComponent } from './tree.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ TreeComponent ],
  imports: [ CommonModule ],
  exports: [ TreeComponent ]
})
export class TreeModule { }