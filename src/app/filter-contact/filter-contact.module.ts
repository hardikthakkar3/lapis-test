import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterContactComponent } from './components/filter-contact/filter-contact.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [FilterContactComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    FilterContactComponent
  ]
})
export class FilterContactModule { }
