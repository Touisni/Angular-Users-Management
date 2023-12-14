import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './elements/pages/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'users', loadChildren: () => import('./elements/pages/users/users.module').then(m => m.UsersModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
