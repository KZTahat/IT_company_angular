import { Component } from '@angular/core';
import { HeaderComponent } from '../../blocks/header/header.component';
import { TitleComponent } from '../../blocks/title/title.component';
import { FooterComponent } from '../../blocks/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, HeaderComponent, TitleComponent, FooterComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent {
  companyName: string = 'TechNova';
  companyPhrase: string =
    'We believe in Simple, Clean & Modern Design Standards with Responsive Approach. Browse the amazing work of our company.';
  headquarters: string = '123 Tech Street, Innovation City, USA';
  contactInfo: string[] = [
    'Phone: +962 779 27823',
    'Email: kztahat96@gmail.com.com',
    'Website: it-companykzt.netlify.app',
  ];
}
