import { useState } from 'react';

import './index.scss';

const navList = [
    {
      title: 'Home',
      href: 'home',
      icon: 'bx bx-home'
    },
    {
      title: 'Profile',
      href: 'profile',
      icon: 'bx bx-user'
    },
    {
      title: 'Education',
      href: 'education',
      icon: 'bx bx-book'
    },
    {
      title: 'Skills',
      href: 'skills',
      icon: 'bx bx-receipt'
    },
    {
      title: 'Experience',
      href: 'experience',
      icon: 'bx bx-briefcase-alt'
    },
    {
      title: 'Certificates',
      href: 'certificates',
      icon: 'bx bx-award'
    },
  ]

const Header: React.FC = () => {
    const [toggle, setToggle] = useState(false);
    const [active, setActive] = useState(0);
  
    const onClickItem = (index: number) => {
      setToggle(false);
      setActive(index)
    }

    return (
        <header className="l-header w-full fixed bottom-0 left-0 z-50" id='header'>
        <nav className="nav bd-container h-12 flex justify-between items-center">
          <a href="#" className="nav__logo font-medium">Gwyn</a>
  
          <div className={`nav__menu ${toggle && 'show-menu'}`} id="nav-menu">
            <ul className="nav__list grid grid-cols-3 gap-8">
          {
            navList.map(({title, href, icon}, index) => (
                <li key={index} onClick={() => onClickItem(index)} className="nav__item text-center">
                  <a href={`#${href}`} className={`nav__link flex flex-col ${index === active && 'active-link'}`}>
                    <i className={`${icon} text-xl mb-2`}></i>{title}
                  </a>
                </li>
            ))
          }
          </ul>
          </div>
  
          <div onClick={() => setToggle(!toggle)} className="nav__toggle cursor-pointer text-xl" id="nav-toggle">
            <i className='bx bx-grid-alt'></i>
          </div>
        </nav>
      </header>
    );
}

export default Header;