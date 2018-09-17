import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { ComponentsComponent } from './components/components.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CoreComponent, ComponentsComponent]
})
export class CoreModule { }
