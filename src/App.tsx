import { useState } from 'react';
import 'boxicons';

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
    href: 'certificate',
    icon: 'bx bx-award'
  },
  {
    title: 'References',
    href: 'references',
    icon: 'bx bx-link-external'
  },
]

function App() {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(0);

  const onClickItem = (index: number) => {
    setToggle(false);
    setActive(index)
  }

  return (
    <header className="l-header" id='header'>
      <nav className="nav bd-container">
        <a href="#" className="nav__logo">Gwyn</a>

        <div className={`nav__menu ${toggle && 'show-menu'}`} id="nav-menu">
          <ul className="nav__list">
        {
          navList.map(({title, href, icon}, index) => (
              <li onClick={() => onClickItem(index)} className="nav__item">
                <a href={`#${href}`} className={`nav__link ${index === active && 'active-link'}`}>
                  <i className={icon}></i>{title}
                </a>
              </li>
          ))
        }
        </ul>
        </div>
     

        <div onClick={() => setToggle(!toggle)} className="nav__toggle" id="nav-toggle">
          <i className='bx bx-grid-alt'></i>
        </div>
      </nav>
    </header>
  )
}

export default App
