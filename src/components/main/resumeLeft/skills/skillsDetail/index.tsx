import React from "react";

interface DetailSkill {
  name: string,
  details: Array<string>
}

const DetailSkills: DetailSkill[] = [
  {
    name: 'HTML',
    details: ['Good knowledge about HTML5, HTML Semantic.', ' Optimize SEO for the website.']
  },
  {
    name: 'CSS',
    details: [' Good knowledge about CSS3, Flexbox, Grid.', 'Understand the concepts of BEM, AtomicCSS, Responsive.', 'Have experience working with Bootstrap, Tailwind CSS, Ant-Design.']
  },
  {
    name: 'Javascript & Typescript',
    details: [
      'Have knowledge about Javascript basics, ES6.',
      'Have knowledge about Javascript Advanced Concepts: Promise, Asynchronous, Event Loop, Closure, Functional Programing, WebAPI.',
      'Have knowledge and have experience working with Typescript.', 'Have experience building Javascript/Typescript Library.',
      'Understand and experience in Reactive Programming with RxJS'
    ]
  },
  {
    name: 'React JS',
    details: ['Have knowledge about ReactJS Basic & Advanced: HOC, React Hooks, Memoization, Testing.', 'Atomic Design Pattern.', 'Have experience building React UI Core Component, React Library.', 'React\'s Ecosystem: React Router, Redux, Storybook, NextJS...']
  },
  {
    name: 'Testing',
    details: ['Have experience writing Unit and Integration Testing.', 'Testing\'s Ecosystem: Jest, Vitest, React Testing Library, Enzyme.']
  },
  {
    name: 'Tools',
    details: ['Have knowledge about configuring & optimizing Webpack, plugin.', 'Other tools: ViteJs, Figma, Bitbucket, Github, Github Action.']
  }
]

const SkillsDetail: React.FC = () => {
  return (
    <section className='skills section' id='skills'>
      <h2 className='section-title' > Skill </h2>

      <div className=''>
        {
          DetailSkills.map(skill => {
            const { name, details } = skill;
            return (
              <div className="skills__content bd-grid" key={name}>
                <h2 className='skills__name'>
                  {name}
                </h2>
                <div className='skills__desc'>
                  <ul>
                    {
                      details.map(detail => (
                        <li className="mb-2" key={detail}> {`- ${detail}`} </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default SkillsDetail;
