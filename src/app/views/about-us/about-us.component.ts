import { Component } from '@angular/core';
import { TitleComponent } from '../../blocks/title/title.component';
import { HeaderComponent } from '../../blocks/header/header.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../blocks/footer/footer.component';

interface AdminMember {
  name: string;
  position: string;
  experience: string;
}

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule, HeaderComponent, TitleComponent, FooterComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent {
  adminMembers: AdminMember[] = [
    {
      name: 'John Doe',
      position: 'CEO',
      experience:
        'John has over 20 years of experience in the IT industry and is a visionary leader.',
    },
    {
      name: 'Jane Smith',
      position: 'CTO',
      experience:
        'Jane is an expert in software development and cloud computing, leading our tech innovations.',
    },
    {
      name: 'Michael Brown',
      position: 'CFO',
      experience:
        'Michael oversees the financial operations, ensuring the company’s financial health.',
    },
    {
      name: 'Emily Davis',
      position: 'COO',
      experience:
        'Emily is responsible for the day-to-day operations, ensuring smooth and efficient processes.',
    },
  ];
}
