import { Component, input, Input } from '@angular/core';
import { TitleComponent } from '../../../blocks/title/title.component';
import { ButtonComponent } from '../../../blocks/button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [TitleComponent, ButtonComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})

export class ProjectCardComponent {
  constructor(private router: Router) {}

  imagePath: string = '../../../../assets/images/male_dummy_photo.png';

  @Input() id: string= '';
  @Input() title: string = '';
  @Input() startDate: string = '';
  @Input() managerName: string = '';
  @Input() isLoading: boolean = false;

  onClick(): void {
    this.isLoading = true;
  }

  navigateToDetails(id: string): void {
    console.log(id);
    
    this.router.navigate(['/details', this.id]);
  }
}

