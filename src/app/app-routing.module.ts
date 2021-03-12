import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CurrentNominationsComponent } from './current-nominations/current-nominations.component';
import { HomeComponent } from './home/home.component';
import { PastNominationsComponent } from './past-nominations/past-nominations.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'current-nominations',
    component: CurrentNominationsComponent
  },
  {
    path: 'past-nominations',
    component: PastNominationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
