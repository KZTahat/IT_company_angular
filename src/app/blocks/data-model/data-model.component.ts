import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-model',
  standalone: true,
  imports: [],
  templateUrl: './data-model.component.html',
  styleUrl: './data-model.component.scss',
})
export class DataModelComponent {
  @Input() hideModel: () => void = () => {};

  close(): void {
    if (this.hideModel) {
      this.hideModel();
    } else {
      console.warn('hideModel is not defined');
    }
  }
}
