import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloGuard } from './Guards/hello.guard';
import { FirstModule } from './Modules/first/first.module';
const routes: Routes = [
  {
    path: 'first',
    loadChildren: () =>
      import('./Modules/first/first.module').then((val) => val.FirstModule),
    canActivate: [HelloGuard],
  },
  {
    path: 'second',
    loadChildren: () =>
      import('./Modules/second/second.module').then((val) => val.SecondModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
