interface ISkill {
    name: string;
    subSkills: string[];
} 

const skills: ISkill[] = [
    {
        name: 'Front - End',
        subSkills: ['HTML', 'CSS', 'TypeScript', 'JavaScript']
    },
    {
        name: 'Back -End',
        subSkills: ['Node JS (basic)', 'Ruby (basic)', 'Go (In progress)']
    }
]

const Skills = () => {
    return (
        <section className='skills section' id='skills'>
            <h2 className='section-title' > Skill </h2>

            <div className='skills__content bd-grid'>
                {
                    skills.map(value => (
                        <ul className='skills__data' key={value.name}>
                            <h2 className='mb-4'> {value.name} </h2>
                            {
                                value.subSkills.map(skill => (
                                    <li key={skill} className='skills__name'>
                                        <span className='skills__circle'/> {skill}
                                    </li>
                                ))
                            }
                        </ul>
                    ))
                }
            </div>
        </section>
    )
}

export default Skills;