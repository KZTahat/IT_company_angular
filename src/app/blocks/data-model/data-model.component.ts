import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-model',
  standalone: true,
  imports: [],
  templateUrl: './data-model.component.html',
  styleUrl: './data-model.component.scss'
})
export class DataModelComponent {
  @Input() toggle: () => void = () => {};
  @Input() showModel: boolean = false;

  close(): void {
    this.toggle();
  }
}
