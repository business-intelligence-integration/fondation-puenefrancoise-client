import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppWorkSpaceRoutingModule } from './app-work-space-routing.module';
import { AppContentComponent } from './app-content/app-content.component';
import { UiModule } from '../ui/ui.module';


@NgModule({
  declarations: [
    AppContentComponent
  ],
  imports: [
    CommonModule,
    AppWorkSpaceRoutingModule,
    UiModule
  ]
})
export class AppWorkSpaceModule { }
