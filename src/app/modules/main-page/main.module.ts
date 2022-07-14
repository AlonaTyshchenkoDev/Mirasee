import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatExpansionModule } from '@angular/material/expansion';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';

import { FormItemsComponent } from './form-items/form-items.component';
import { FormConstructorComponent } from './form-constructor/form-constructor.component';
import { StylesBuildingComponent } from './styles-building/styles-building.component';
import { MainPageComponent } from './main-page.component';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [
    FormItemsComponent,
    FormConstructorComponent,
    StylesBuildingComponent,
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    DragDropModule,
    MatExpansionModule,
    SharedModule,
    RouterModule.forChild([
      {path: '', component: MainPageComponent}
    ])
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}
  ]
})
export class MainModule {
}
