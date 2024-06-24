import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CardComponent } from './components/card/card.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';



@NgModule({
  declarations: [
    SideBarComponent,
    NavBarComponent,
    CardComponent,
    SectionGenericComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    SideBarComponent,
    NavBarComponent,
    CardComponent,
    SectionGenericComponent
  ]
})
export class SharedModule { }
