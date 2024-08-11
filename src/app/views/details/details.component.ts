import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../services/projects.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../blocks/header/header.component';
import { TitleComponent } from '../../blocks/title/title.component';
import { FooterComponent } from '../../blocks/footer/footer.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, HeaderComponent, TitleComponent, FooterComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit {
  project: any;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    let temp: any = this.projectService.getProjectById(
      this.route.snapshot.paramMap.get('id') || ''
    );

    this.project = temp[0];
  }
}
