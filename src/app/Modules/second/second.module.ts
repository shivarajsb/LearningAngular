import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SecondContainerComponent } from 'src/app/Components/second-container/second-container.component';
import { FirstChildComponent } from 'src/app/Components/first-child/first-child.component';
import { SecondChildComponent } from 'src/app/Components/second-child/second-child.component';

const routes: Routes = [
  {
    path: '',
    component: SecondContainerComponent,
    children: [
      { path: 'child1', component: FirstChildComponent },
      { path: 'child2', component: SecondChildComponent },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SecondModule {}
