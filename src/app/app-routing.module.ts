import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren:() => import('../app/modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    loadChildren:() => import('../app/modules/home/home.module').then(m => m.HomeModule),
    component: HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
