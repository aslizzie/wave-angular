import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CardComponent } from './components/card/card.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';
import { SectionCarouselComponent } from './components/section-carousel/section-carousel.component';
import { CardCarouselComponent } from './components/card-carousel/card-carousel.component';



@NgModule({
  declarations: [
    SideBarComponent,
    NavBarComponent,
    CardComponent,
    SectionGenericComponent,
    SectionCarouselComponent,
    CardCarouselComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    SideBarComponent,
    NavBarComponent,
    CardComponent,
    SectionGenericComponent,
    SectionCarouselComponent,
    CardCarouselComponent
  ]
})
export class SharedModule { }
