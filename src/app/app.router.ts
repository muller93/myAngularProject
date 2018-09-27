import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
// Services
import { LayoutComponent } from './modules/core/components/layout/layout.component';

export const routes: Routes = [{
   path: '',
   redirectTo: 'app/home',
   pathMatch: 'full'
}, {
   path: 'app',
   component: LayoutComponent,
   children: [{
       path: 'home',
       loadChildren: 'src/app/modules/home/home.module#HomeModule'
   }, { path: 'layout',
      loadChildren: 'src/app/modules/core/core.module#CoreModule'
   }],
   // canActivateChild: [AuthGuard],
}, {
   path: '**',
  // component:  PageNotFoundComponent
}];
@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRouterModule { }
