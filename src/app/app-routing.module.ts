import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    /* path:'', loadChildren:()=>import('./main/home/home.modul').then(m=>m.HomeModule) */
    path:'',loadChildren:()=>import('./pages/pages.module').then(m=>m.PagesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
