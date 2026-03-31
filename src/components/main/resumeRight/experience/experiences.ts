interface IProject {
    name: string,
    technology: string,
    projectDescription?: string,
    teamSize: number,
    roles: string[],
  }
  

interface IExperience {
    company: string,
    time: string,
    title: string,
    projects: IProject[],
  }

export const CompanyName = {
  VM: 'VIETMAP - Company',
  KMS: 'KMS - Technology',
  GITGAM: 'GitGam - Company'
}

export const experiences: IExperience[] = [
    {
      company: CompanyName.VM,
      time: 'Dec 2022 - present',
      title: 'Software Engineer',
      projects: [
        {
          name: 'Fleet Management',
          technology: 'Angular 20+, TypeScript, PrimeNg, DevExpress, Leaflet, RxJs, Tailwind, Ngx-translate, NGX-ECHARTS',
          teamSize: 7,
          projectDescription: 'The web application for the management and monitoring of vehicle fleets includes the following features: reports, monitoring, history, user management, warnings, point and geofence, driver management, service subscription, and location sharing. It also offers real-time data visualization and analytics technology.',
          roles: [
            'Researched and evaluated emerging technologies, architected and established the foundational codebase.',
            'Implemented, maintained, and enhanced system stability while enforcing code quality standards through comprehensive code reviews.',
            'Optimized large dataset rendering performance in Leaflet and Table UI through clustering, virtualization, pagination, and lazy loading techniques.',
            'Led technical team initiatives: delegated responsibilities, mentored team members, conducted thorough code reviews, and resolved technical blockers.',
          ]
        },
        {
          name: "Billing System",
          technology: 'Angular 20+, TypeScript, PrimeNg, DevExpress, Leaflet, RxJs, Tailwind, Ngx-translate, NGX-ECHARTS',
          teamSize: 4,
          projectDescription: 'A web application for managing and monitoring the billing system of the company, including features such as client, customer services, documents, devices, promotions, payment management and financial reporting.',
          roles: [
            'Architected and maintained robust billing system with comprehensive code reviews to ensure code quality and best practices.',
            'Collaborated cross-functionally with sales and billing teams to gather requirements, analyze pain points, and deliver tailored solutions.',
            'Engineered advanced financial features including service management, payment tracking, and real-time reporting using data visualization components.',
          ]
        },
        {
          name: 'VM-Support 2.0',
          technology: 'ViteJS-React, TypeScript, Dev Extreme, Leaflet, React-Leaflet, TaiwindCSS, Zustand, Tanstack-query',
          teamSize: 6,
          projectDescription: 'A web application for managing and monitoring vehicle devices support sending commands and receiving data from devices.',
          roles: [
            'Implemented and maintained system features while conducting thorough code reviews to ensure code quality and best practices.',
            'Collaborated with sales team to gather requirements, evaluate technical feasibility, and deliver customized solutions.',
            'Containerized applications using Docker and deployed to production environments using Kubernetes orchestration.'
          ]
        },
        {
          name: 'Camera Monitoring',
          technology: 'ViteJS-React, TypeScript, Mantine, Antd, Zustand, Tanstack-query, UnoCSS',
          teamSize: 6,
          projectDescription: 'A web application for monitoring and managing camera devices, providing real-time video streaming and analytics.',
          roles: [
            'Maintained system stability and ensured code quality through comprehensive reviews and testing.',
            'Identified, diagnosed, and resolved existing issues from previous releases to enhance system reliability.',
            'Developed new features and optimized system performance to improve user experience and operational efficiency.',
          ]
        }
      ]
    },
    {
      company: CompanyName.KMS,
      time: 'Dec 2021 - Nov 2022',
      title: 'Software Engineer',
      projects: [
        {
          name: 'GoodHuman Web App',
          technology: 'React, Typescript, Redux, Ant-Design, SCSS, Blueprint',
          teamSize: 10,
          roles: []
        },
        {
          name: 'Shout for Good Web App',
          technology: 'React, Redux, SCSS, Jest, RX JS',
          teamSize: 12,
          roles: [],
        }
      ]
    },
    {
      company: CompanyName.GITGAM,
      time: 'Mar 2021 - Dec 2021',
      title: 'Front-End Develop',
      projects: [
        {
          name: 'Enterprise management software WebApp',
          technology: 'React, Redux, SCSS, TailwindCSS',
          teamSize: 7,
          roles: []
        }
      ]
    }
  ]