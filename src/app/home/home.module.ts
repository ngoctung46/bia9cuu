import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CarouselComponent } from './carousel/carousel.component';
import { MainContentComponent } from './main-content/main-content.component';
import { IntroComponent } from './intro/intro.component';
import { FeatureComponent } from './feature/feature.component';
@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent, CarouselComponent, MainContentComponent, IntroComponent, FeatureComponent]
})
export class HomeModule { }
