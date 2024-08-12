import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TitleComponent } from '../../../blocks/title/title.component';

@Component({
  selector: 'app-add-project-form',
  standalone: true,
  imports: [CommonModule, FormsModule, TitleComponent],
  templateUrl: './add-project-form.component.html',
  styleUrl: './add-project-form.component.scss',
})
export class AddProjectFormComponent {
  @Output() formSubmit: EventEmitter<any> = new EventEmitter();

  projectData = {
    title: '',
    startDate: '',
    endDate: '',
    managerName: '',
    clientName: '',
    description: '',
    teamMembers: [],
  };

  onSubmit(): void {
    this.formSubmit.emit(this.projectData);
  }
}
