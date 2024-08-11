import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataModelService {
  modelStatus: boolean = false;

  showModel(): void {
    this.modelStatus = true;
  }

  hideModel(): void {
    this.modelStatus = false;
  }
}
