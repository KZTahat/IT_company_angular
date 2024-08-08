import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../blocks/header/header.component';
import { FooterComponent } from '../../blocks/footer/footer.component';
import { TitleComponent } from '../../blocks/title/title.component';

interface Client {
  name: string;
  since: string;
  description: string;
}

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule, HeaderComponent, TitleComponent,FooterComponent],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss',
})
export class ClientsComponent {
  clients: Client[] = [
    {
      name: 'TechCorp',
      since: '2015',
      description:
        'TechCorp has been leveraging our cloud computing services to scale their operations globally.',
    },
    {
      name: 'HealthPlus',
      since: '2016',
      description:
        'HealthPlus relies on our custom software development for their patient management system.',
    },
    {
      name: 'EduWorld',
      since: '2017',
      description:
        'EduWorld uses our cybersecurity services to protect their online learning platforms.',
    },
    {
      name: 'RetailNet',
      since: '2018',
      description:
        'RetailNet has integrated our e-commerce solutions to enhance their online shopping experience.',
    },
    {
      name: 'FinanceX',
      since: '2019',
      description:
        'FinanceX counts on our IT consulting to optimize their financial systems.',
    },
    {
      name: 'AutoDrive',
      since: '2020',
      description:
        'AutoDrive employs our project management services for their autonomous vehicle projects.',
    },
    {
      name: 'MediCare',
      since: '2015',
      description:
        'MediCare uses our cloud storage solutions for secure patient data management.',
    },
    {
      name: 'GreenEnergy',
      since: '2016',
      description:
        'GreenEnergy has adopted our software solutions for managing renewable energy resources.',
    },
    {
      name: 'BuildMaster',
      since: '2017',
      description:
        'BuildMaster utilizes our IT support for maintaining their construction management systems.',
    },
    {
      name: 'TravelWide',
      since: '2018',
      description:
        'TravelWide uses our custom development services to power their booking platform.',
    },
    {
      name: 'ShopEase',
      since: '2019',
      description:
        'ShopEase relies on our IT infrastructure solutions to run their retail operations smoothly.',
    },
    {
      name: 'FoodNest',
      since: '2020',
      description:
        'FoodNest uses our software services to streamline their supply chain management.',
    },
    {
      name: 'HealthNet',
      since: '2021',
      description:
        'HealthNet has implemented our cybersecurity measures to protect their healthcare data.',
    },
  ];
}
