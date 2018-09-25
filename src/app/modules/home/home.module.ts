import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ComponentsComponent } from './components/components.component';
import { HomePageComponent } from './components/home-page/home-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeComponent, ComponentsComponent, HomePageComponent]
})
export class HomeModule { }
