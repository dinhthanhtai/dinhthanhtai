import clsx from 'clsx';
import { FC, useState } from 'react';

interface ExperienceProps {
  technology: string,
  teamSize: number,
  roles: string[],
  isOpen?: boolean,
  name: string,
  order: number
}

const ExperienceDetail: FC<ExperienceProps> = ({
  technology, teamSize, roles, isOpen = false, name, order
}) => {
  const [opened, setOpened] = useState(isOpen);

  const classNames = clsx('pl-2 grid gap-1 transition-all duration-300 scale-y-1', !opened && '!scale-y-0 h-0 overflow-hidden')

  const chevron = <i className={`bx bx-chevron-${opened ? 'up' : 'down'} text-xl`}></i>

  return (
    <li key={name} className='mb-1'>
      <span className="font-bold italic cursor-pointer flex items-center gap-1" onClick={() => setOpened(!opened)}>
        {`${order + 1}. ${name}`}  {chevron}
      </span>
      <ul className={classNames} style={{ transition: 'transform 2s'}}>
        <li className="experience__project mt-1"> <span className="font-medium"> Technology: </span> <span className="experience__desc"> {technology} </span></li>
        <li className="experience__project"> <span className="font-medium text-sm"> Team-size: </span> <span className="experience__desc"> {teamSize} </span></li>
        <li className="experience__project">
          <span className="experience__project--block">
            <span className="font-medium text-sm"> Responsibility: </span>
            <ul className="leading-loose pl-8">
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
}

export default ExperienceDetail