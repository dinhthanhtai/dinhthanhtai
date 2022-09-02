interface IProject {
    name: string,
    technology: string,
    teamSize: number,
    role: string,
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
                technology: 'React, Typescript, Redux, Ant – design, SCSS, Blueprint',
                teamSize: 14,
                role: 'Maintain system, review and improve code quality, implement form builder and integrate with feature availability. Upgrade package to stable new version'
            }, 
            {
                name: 'Shout for Good Web App',
                technology: 'React, Redux, SCSS, Jest, RX JS',
                teamSize: 14,
                role: 'Maintain system, review and assure quality of code, implementation Event Ticketing features. Pick up requirement, analyze and discuss with team to finalize the expect results, and the best way to implement it. Writing unit test and integration test for front-end and back-end. Research and sharing new technology for team.'
            }
        ]
    },
    {
        company: 'GitGam',
        time: 'Mar 2021 - Dec 2021',
        title: 'Front-End Develope',
        projects: [
            {
                name: 'Enterprise management software WebApp',
                technology: 'React, Redux, SCSS, TailwindCSS',
                teamSize: 7,
                role: 'Create new components from JSX follow to Figma design, integrating API to components that are created and fixed bugs relevant. Responsive for the website of company and developed and implemented solutions based on requirements'
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
                                        <ol className="experience__projects" type="1">
                                            {
                                                projects.map(project => {
                                                    const { name, role, teamSize, technology} = project;

                                                    return (
                                                        <li key={name} style={{listStyle: 'decimal inside'}} className='mb-3'>
                                                            <span className="font-bold italic">
                                                                {name}
                                                            </span>
                                                            <ul className='pl-2'>
                                                                <li className="experience__project"> <span className="font-medium"> Technology: </span> <span className="text-sm"> {technology} </span></li>
                                                                <li className="experience__project"> <span className="font-medium"> Team-size: </span> <span className="text-sm"> {teamSize} </span></li>
                                                                <li className="experience__project"> <span className="font-medium"> Role: </span> <span className="text-sm"> {role} </span></li>
                                                            </ul>
                                                        </li>
                                                    )
                                                })
                                            }                               
                                        </ol>
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