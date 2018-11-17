import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importation des modules Material
import {
  MatToolbarModule,
  MatIconModule,
  MatMenuModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatMenuModule
  ]
})
export class MaterialModule { }
