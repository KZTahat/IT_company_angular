import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './blocks/header/header.component';
import { ProjectsComponent } from './views/projects/projects.component';

// Meta data
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ProjectsComponent],
  templateUrl: './app.component.html', // component template
  styleUrl: './app.component.scss',
})

// class component
export class AppComponent {
  title: string = 'Khaled Zayed Tahat';
}
