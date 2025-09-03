import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientsDetailComponent } from './clients/clients-detail/clients-detail.component';
import { SessionsComponent } from './sessions/sessions.component';
import { SessionsQuestionsComponent } from './sessions/sessions-questions/sessions-questions.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'clients',
        pathMatch: 'full',
      },
      {
        path: 'clients',
        component: ClientsComponent,
      },
      {
        path: 'clients-detail',
        component: ClientsDetailComponent,
      },
      {
        path: 'sessions',
        component: SessionsComponent,
      },
      {
        path: 'sessions-questions',
        component: SessionsQuestionsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
