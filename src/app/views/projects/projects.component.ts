import { Component } from '@angular/core';
import { ProjectCardComponent } from './project-card/project-card.component';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '../../blocks/title/title.component';
import { HeaderComponent } from '../../blocks/header/header.component';
import { DataModelComponent } from '../../blocks/data-model/data-model.component';
import { FooterComponent } from '../../blocks/footer/footer.component';

interface Project {
  id: string;
  title: string;
  startDate: string;
  managerName: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    ProjectCardComponent,
    TitleComponent,
    DataModelComponent,
    FooterComponent,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})

export class ProjectsComponent {
  showAddModel: boolean = false;

  toggleModel(): void {
    this.showAddModel = !this.showAddModel;
  }

  projects: Project[] = [
    {
      id: '1',
      title: 'Project Alpha',
      startDate: '2024-01-15',
      managerName: 'Alice Johnson',
    },
    {
      id: '2',
      title: 'Project Beta',
      startDate: '2024-02-20',
      managerName: 'Bob Smith',
    },
    {
      id: '3',
      title: 'Project Gamma',
      startDate: '2024-03-10',
      managerName: 'Charlie Brown',
    },
    {
      id: '4',
      title: 'Project Delta',
      startDate: '2024-04-05',
      managerName: 'Dana White',
    },
    {
      id: '5',
      title: 'Project Epsilon',
      startDate: '2024-05-15',
      managerName: 'Evan Lee',
    },
    {
      id: '6',
      title: 'Project Zeta',
      startDate: '2024-06-20',
      managerName: 'Fiona Green',
    },
    {
      id: '7',
      title: 'Project Eta',
      startDate: '2024-07-25',
      managerName: 'George Black',
    },
    {
      id: '8',
      title: 'Project Theta',
      startDate: '2024-08-30',
      managerName: 'Hannah Brown',
    },
  ];
}
