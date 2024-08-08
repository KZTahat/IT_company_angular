import { Routes } from '@angular/router';
import { ProjectsComponent } from './views/projects/projects.component';
import { DetailsComponent } from './views/details/details.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { ClientsComponent } from './views/clients/clients.component';

export const routes: Routes = [
  { path: '', component: ProjectsComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'clients', component: ClientsComponent },
];
