import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppContentComponent } from './app-content/app-content.component';

const routes: Routes = [
 {
  path: "", component: AppContentComponent,
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppWorkSpaceRoutingModule { }
