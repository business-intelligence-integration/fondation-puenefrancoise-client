import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/homes',
    pathMatch: 'full'
  },
  {
    path: 'homes',
    loadChildren: () => import('./app-work-space/app-work-space.module').then(m => m.AppWorkSpaceModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
