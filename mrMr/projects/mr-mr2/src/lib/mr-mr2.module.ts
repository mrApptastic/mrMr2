import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SortPipe } from './pipes/sort.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    SpinnerComponent,
    SortPipe,
    FilterPipe
  ],
  imports: [
    CommonModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  exports: [
    SpinnerComponent,
    SortPipe,
    FilterPipe
  ]
})
export class MrMr2Module { }
