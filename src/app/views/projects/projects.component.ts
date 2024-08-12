import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/projects.service';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '../../blocks/title/title.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { HeaderComponent } from '../../blocks/header/header.component';
import { DataModelComponent } from '../../blocks/data-model/data-model.component';
import { FooterComponent } from '../../blocks/footer/footer.component';
import { DataModelService } from '../../services/dataModel.service';
import { AddProjectFormComponent } from './add-project-form/add-project-form.component';

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
    AddProjectFormComponent,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  constructor(
    private projectService: ProjectService,
    private dataModelService: DataModelService
  ) {}

  // get projects from service
  projects: any[] = [];
  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

  get showAddModel(): boolean {
    return this.dataModelService.modelStatus;
  }
  showModel = (): void => {
    this.dataModelService.showModel();
  };
  hideModel = (): void => {
    this.dataModelService.hideModel();
  };

  handleFormSubmit(newProject: any): void {
    this.projects.push(newProject);
    this.hideModel();
  }
}
