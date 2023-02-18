import { HomeComponent } from './home/home.component';
import { IframeComponent } from './iframe/iframe.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  /* ACESSO VAZIO */
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  /* ============  */
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
