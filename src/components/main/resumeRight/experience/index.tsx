interface IProject {
  name: string,
  technology: string,
  teamSize: number,
  roles: string[],
}

interface IExperience {
  company: string,
  time: string,
  title: string,
  projects: IProject[],
}

const experiences: IExperience[] = [
  {
    company: 'KMS - Technology',
    time: 'Dec 2021 - Present',
    title: 'Software Engineer',
    projects: [
      {
        name: 'GoodHuman Web App',
        technology: 'React, Typescript, Redux, Ant-Design, SCSS, Blueprint',
        teamSize: 10,
        roles: [
          'Review and improve code quality.',
          'Implement form builder and integrate with feature availability.',
          'Maintain, refactor, and improve stability performance.',
          'Support implement CI/CD by using Github Actions.'
        ]
      },
      {
        name: 'Shout for Good Web App',
        technology: 'React, Redux, SCSS, Jest, RX JS',
        teamSize: 14,
        roles: ['Maintain system, review and assure quality of code.',
          'Implementation Event Ticketing feature.',
          'Pick up requirement, analyze and discuss with team to finalize the expect results, and the best way to implement it.',
          'Writing unit test and integration test for front-end and back-end. Research and sharing new technology for team.'
        ],
      }
    ]
  },
  {
    company: 'GitGam - Company',
    time: 'Mar 2021 - Dec 2021',
    title: 'Front-End Develop',
    projects: [
      {
        name: 'Enterprise management software WebApp',
        technology: 'React, Redux, SCSS, TailwindCSS',
        teamSize: 7,
        roles: [
          'Create new components from JSX follow to Figma design.',
          'Integrating API to components that are created and fixed bugs relevant.',
          'Responsive for the website of company, develop and implement solutions based on requirements.'
        ]
      }
    ]
  }
]

const Experience: React.FC = () => {
  return (
    <section className='experience section' id='experience'>
      <h2 className='section-title'> Work Experience </h2>

      {
        experiences.map(experience => {
          const { company, time, title, projects } = experience;

          return (
            <div key={company} className='experience__container bd-grid'>
              <div className='experience__content'>
                <div className='experience__time'>
                  <span className='experience__rounder'></span>
                  <span className='experience__line'></span>
                </div>

                <div className='experience__data bd-grid'>
                  <h3 className='experience__title'> {company} </h3>
                  <span className='experience__company'> {time} | <i> {title} </i> </span>
                  <div className='experience__description'>
                    <ul className="experience__projects">
                      {
                        projects.map((project, index) => {
                          const { name, roles, teamSize, technology } = project;

                          return (
                            <li key={name} className='mb-4'>
                              <span className="font-bold italic">
                                {`${index + 1}. ${name}`}
                              </span>
                              <ul className='pl-2 grid gap-1.5'>
                                <li className="experience__project mt-1"> <span className="font-medium"> Technology: </span> <span className="experience__desc"> {technology} </span></li>
                                <li className="experience__project"> <span className="font-medium"> Team-size: </span> <span className="experience__desc"> {teamSize} </span></li>
                                <li className="experience__project">
                                  <span className="experience__project--block">
                                    <span className="font-medium"> Roles: </span>
                                    <ul className="" style={{ lineHeight: 2, padding: '0 30px' }}>
                                      {
                                        roles.map((role: string, idx: number) => (
                                          <li key={idx}> - {role} </li>
                                        ))
                                      }
                                    </ul>
                                  </span>
                                </li>
                              </ul>
                            </li>
                          )
                        })
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
    </section>
  )
}

export default Experience;
