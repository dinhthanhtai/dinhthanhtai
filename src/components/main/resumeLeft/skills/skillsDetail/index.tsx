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
        details: [' Good knowledge about CSS3, Flexbox, Grid.', 'Understand the concepts of BEM, AtomicCSS, Responsive.', 'Have experience working with Bootstrap, Tailwind CSS.']
    }, 
    {
        name: 'Javascript & Typescript',
        details: ['Have knowledge about Javascript Basic & Advanced.', 'Have knowledge and have experience working with Typescript', 'Have experience building Javascript/Typescript Library.']
    },
    {
        name: 'React JS',
        details: ['Have knowledge about ReactJS Basic & Advanced.', 'Atomic Design Pattern.', ' Have experience building React cI Core Component, React Library.', 'React\'s Ecosystem: React Router, Redux, Storybook, NextJS...']
    },
    {
        name: 'TOOLS',
        details: ['Have knowledge about configuring & optimizing Webpack, plugin.', 'Other tools: ViteJs']
    }
]

const SkillsDetail: React.FC = () => {
    return (
        <section className='skills section' id='skills'>
            <h2 className='section-title' > Skill </h2>

            <div className='skills__content bd-grid'>
                {
                    DetailSkills.map(skill => {
                        const {name, details} = skill;
                        return (
                            <React.Fragment key={name}>
                                <h2 className='skills__name'>
                                    {name}
                                </h2>
                                <div className='skills__desc'>
                                    <ul>
                                        {
                                            details.map(detail => (
                                                <li key={detail} className='text-sm'> {`- ${detail}`} </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </React.Fragment>
                        )
                    })
                }
               
            </div>
        </section>
    )
}

export default SkillsDetail;