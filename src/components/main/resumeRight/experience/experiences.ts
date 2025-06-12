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
      title: 'Front-end Developer',
      projects: [
        {
          name: 'Fleet Management',
          technology: 'ViteJS-React, TypeScript, Mantine, DevExpress, Leaflet, React-Leaflet, Tanstack-query, Zustand, UnoCSS, I18n',
          teamSize: 7,
          projectDescription: 'The web application for the management and monitoring of vehicle fleets includes the following features: reports, monitoring, history, user management, warnings, geofencing, point and geofencing, driver management, service subscription, and location sharing. It also offers real-time data visualization and analytics technology.',
          roles: [
            'Researched technologies and set up the base source code',
            'Successfully applied Module Federation to the project',
            'Implemented and maintained the system, ensuring code quality through regular reviews',
            'Optimized large dataset rendering in Leaflet and Table UI using clustering, grouping, virtualization, pagination, and lazy loading',
            'Led a small team: delegated tasks, provided support, conducted code reviews, and resolved individual issues',
          ]
        },
        {
          name: 'VM-Support 2.0',
          technology: 'ViteJS-React, TypeScript, Dev Extreme, Leaflet, React-Leaflet, TaiwindCSS, Zustand, Tanstack-query',
          teamSize: 6,
          projectDescription: 'A web application for managing and monitoring vehicle devices support sending commands and receiving data from devices.',
          roles: [
            'Implement and maintain the system, review and assure quality of code',
            'Support gathers, evaluates, and offers solutions for the sales team\'s requirements',
            'Building an image with Docker and deploying it to a server with K8s'
          ]
        },
        {
          name: 'Camera Monitoring',
          technology: 'ViteJS-React, TypeScript, Mantine, Antd, Zustand, Tanstack-query, UnoCSS',
          teamSize: 6,
          projectDescription: 'A web application for monitoring and managing camera devices, providing real-time video streaming and analytics.',
          roles: [
            'Maintain system, review and assure quality of code.',
            'Fix issues remain exist in previous version.',
            'Develop new features and improve performance of the system.',
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
          roles: [
            'Review and improve code quality.',
            'Implement form builder and integrate with feature availability.',
            'Maintain, refactor, and improve stability and performance.',
            'Implement CI/CD by using GitHub Actions.'
          ]
        },
        {
          name: 'Shout for Good Web App',
          technology: 'React, Redux, SCSS, Jest, RX JS',
          teamSize: 12,
          roles: [
            'Maintain system, review and assure quality of code.',
            'Implementation Event Ticketing feature.',
            'Pick up requirements, analyze, and discuss with team to finalize the expected results and the best way to implement them.',
            'Writing unit tests and integration tests for front-end and back-end. Research and share new technology for team.'
          ],
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
          roles: [
            'Create new components from JSX following Figma design.',
            'Integrating API to components that are created and fixing bugs relevant.',
            'Responsive for the website of the company, developing and implementing solutions based on requirements.'
          ]
        }
      ]
    }
  ]