import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterContactComponent } from './filter-contact/filter-contact.component';



@NgModule({
  declarations: [FilterContactComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FilterContactComponent
  ]
})
export class FilterContactModule { }
