import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './core/guard/auth.guard';

const routes: Routes = [
  { path:'dashboard',canActivate:[authGuard], loadChildren: () => import('./core/module/dashboard.module').then(m => m.DashboardModule)},
  { path: 'login', component:LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
