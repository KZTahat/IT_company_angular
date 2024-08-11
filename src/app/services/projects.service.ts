import { Injectable } from '@angular/core';

interface TeamMember {
  name: string;
  yearsOfExperience: number;
  department: string;
}

interface Project {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  managerName: string;
  description: string;
  clientName: string;
  teamMembers: Array<TeamMember>;
}

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projects: Project[] = [
    {
      id: '1',
      title: 'Project Alpha',
      startDate: '2024-01-15',
      endDate: '2024-06-15',
      managerName: 'Alice Johnson',
      description:
        'Project Alpha involved developing a cutting-edge AI-powered analytics platform for real-time data processing. The platform was designed to handle large datasets and deliver insights with minimal latency, providing a competitive edge for our client in their market.',
      clientName: 'Vantage Tech',
      teamMembers: [
        { name: 'John Doe', yearsOfExperience: 5, department: 'Data Science' },
        {
          name: 'Jane Smith',
          yearsOfExperience: 4,
          department: 'Backend Development',
        },
        {
          name: 'Samuel Green',
          yearsOfExperience: 3,
          department: 'Frontend Development',
        },
        { name: 'Megan Brown', yearsOfExperience: 6, department: 'DevOps' },
      ],
    },
    {
      id: '2',
      title: 'Project Beta',
      startDate: '2024-02-20',
      endDate: '2024-08-20',
      managerName: 'Bob Smith',
      description:
        'Project Beta was focused on modernizing a legacy IT infrastructure for a major financial services provider. Our team implemented a robust cloud solution, enhancing the client’s data security and operational efficiency while reducing costs.',
      clientName: 'InnovateX',
      teamMembers: [
        {
          name: 'Olivia White',
          yearsOfExperience: 7,
          department: 'Cloud Engineering',
        },
        {
          name: 'Liam Black',
          yearsOfExperience: 4,
          department: 'Cybersecurity',
        },
        {
          name: 'Noah Brown',
          yearsOfExperience: 5,
          department: 'Systems Architecture',
        },
        {
          name: 'Emma Wilson',
          yearsOfExperience: 6,
          department: 'Project Management',
        },
        {
          name: 'Ava Jones',
          yearsOfExperience: 3,
          department: 'Software Development',
        },
      ],
    },
    {
      id: '3',
      title: 'Project Gamma',
      startDate: '2024-03-10',
      endDate: '2024-09-10',
      managerName: 'Charlie Brown',
      description:
        'Project Gamma aimed to build a scalable e-commerce platform that could handle a high volume of transactions with peak performance. The project included features like a recommendation engine, secure payment gateways, and an advanced customer analytics dashboard.',
      clientName: 'Tech Solutions Co.',
      teamMembers: [
        {
          name: 'Isabella Clark',
          yearsOfExperience: 6,
          department: 'E-commerce Development',
        },
        {
          name: 'Sophia Johnson',
          yearsOfExperience: 5,
          department: 'User Experience Design',
        },
        {
          name: 'James Lee',
          yearsOfExperience: 4,
          department: 'Full Stack Development',
        },
        {
          name: 'Benjamin Harris',
          yearsOfExperience: 3,
          department: 'Database Management',
        },
        {
          name: 'Lucas Martinez',
          yearsOfExperience: 5,
          department: 'Frontend Development',
        },
        {
          name: 'Mia Robinson',
          yearsOfExperience: 4,
          department: 'Quality Assurance',
        },
      ],
    },
    {
      id: '4',
      title: 'Project Delta',
      startDate: '2024-04-05',
      endDate: '2024-10-05',
      managerName: 'Dana White',
      description:
        'Project Delta focused on implementing a blockchain-based supply chain management system for a global logistics company. The solution improved transparency and traceability, reducing operational bottlenecks and increasing trust across the supply chain.',
      clientName: 'GlobalTech Logistics',
      teamMembers: [
        {
          name: 'Charlotte Davis',
          yearsOfExperience: 7,
          department: 'Blockchain Development',
        },
        {
          name: 'Amelia Garcia',
          yearsOfExperience: 5,
          department: 'Smart Contracts',
        },
        {
          name: 'Ethan Hall',
          yearsOfExperience: 4,
          department: 'Cryptography',
        },
        {
          name: 'Harper Allen',
          yearsOfExperience: 6,
          department: 'Supply Chain Management',
        },
      ],
    },
    {
      id: '5',
      title: 'Project Epsilon',
      startDate: '2024-05-15',
      endDate: '2024-11-15',
      managerName: 'Evan Lee',
      description:
        'Project Epsilon was dedicated to creating a mobile application that integrates with wearable technology to provide users with real-time health monitoring. The app features advanced algorithms to predict potential health issues and offers personalized wellness plans.',
      clientName: 'HealthTech Innovations',
      teamMembers: [
        {
          name: 'Henry King',
          yearsOfExperience: 8,
          department: 'Mobile Development',
        },
        {
          name: 'Ella Wright',
          yearsOfExperience: 7,
          department: 'AI & Machine Learning',
        },
        {
          name: 'Aiden Scott',
          yearsOfExperience: 6,
          department: 'Health Informatics',
        },
        {
          name: 'Scarlett Evans',
          yearsOfExperience: 5,
          department: 'User Interface Design',
        },
      ],
    },
    {
      id: '6',
      title: 'Project Zeta',
      startDate: '2024-06-20',
      endDate: '2024-12-20',
      managerName: 'Fiona Green',
      description:
        'Project Zeta was about building a secure, scalable cloud storage solution for a media company. The project included advanced data encryption, automated backup, and disaster recovery features to ensure data integrity and availability.',
      clientName: 'Vantage Tech',
      teamMembers: [
        {
          name: 'Emily Adams',
          yearsOfExperience: 6,
          department: 'Cloud Solutions',
        },
        {
          name: 'Daniel Baker',
          yearsOfExperience: 5,
          department: 'Data Security',
        },
        { name: 'Chloe Carter', yearsOfExperience: 4, department: 'DevOps' },
        {
          name: 'Michael Perez',
          yearsOfExperience: 7,
          department: 'Network Administration',
        },
      ],
    },
    {
      id: '7',
      title: 'Project Eta',
      startDate: '2024-07-25',
      endDate: '2025-01-25',
      managerName: 'George Black',
      description:
        'Project Eta aimed to implement an IoT-based solution for a smart city initiative. The project involved deploying sensors across the city to monitor traffic, pollution levels, and energy usage, all of which were integrated into a central dashboard for real-time monitoring.',
      clientName: 'InnovateX',
      teamMembers: [
        {
          name: 'Jack Harris',
          yearsOfExperience: 7,
          department: 'IoT Solutions',
        },
        {
          name: 'Zoe Murphy',
          yearsOfExperience: 6,
          department: 'Embedded Systems',
        },
        {
          name: 'Oliver Nelson',
          yearsOfExperience: 5,
          department: 'Data Analysis',
        },
        {
          name: 'Lily Martinez',
          yearsOfExperience: 4,
          department: 'Cloud Integration',
        },
      ],
    },
    {
      id: '8',
      title: 'Project Theta',
      startDate: '2024-08-30',
      endDate: '2025-02-28',
      managerName: 'Hannah Brown',
      description:
        'Project Theta focused on developing an AI-driven customer support chatbot for a retail company. The chatbot was designed to handle a wide range of customer inquiries, providing instant responses and reducing the need for human intervention, thereby improving efficiency and customer satisfaction.',
      clientName: 'Tech Solutions Co.',
      teamMembers: [
        {
          name: 'Lucas Foster',
          yearsOfExperience: 5,
          department: 'AI Development',
        },
        {
          name: 'Sofia Ramirez',
          yearsOfExperience: 6,
          department: 'Natural Language Processing',
        },
        {
          name: 'Mason Rivera',
          yearsOfExperience: 4,
          department: 'Backend Development',
        },
        {
          name: 'Isabella Brooks',
          yearsOfExperience: 7,
          department: 'User Experience Design',
        },
      ],
    },
  ];

  getProjects(): Project[] {
    return this.projects;
  }

  getProjectById(id: string): Object {
    return this.projects.filter((ele) => ele.id == id);
  }
}
