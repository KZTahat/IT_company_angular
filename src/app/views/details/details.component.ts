import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit{
  id: string = '';
  title: string = '';
  startDate: string = '';
  managerName: string = '';

  constructor(private route: ActivatedRoute) {};

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.loadCardDetails(this.id);
  }

  loadCardDetails(id: string): void {
    console.log(id);
    
  }
}
