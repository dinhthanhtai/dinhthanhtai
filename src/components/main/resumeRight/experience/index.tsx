import ExperienceDetail from "./experience";
import { CompanyName, experiences } from "./experiences";

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
                  <div className='experience__description '>
                    <ul className="experience__projects">
                      {
                        projects.map((project, index) => {
                          const { name, roles, teamSize, technology } = project;

                          return (
                            <ExperienceDetail technology={technology} teamSize={teamSize} roles={roles} name={name} order={index} isOpen={company === CompanyName.VM} />
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
