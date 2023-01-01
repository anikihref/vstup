import React from 'react'
import { NavLink } from 'react-router-dom'
import '@/styles/components/NavBar.scss';

const NavBar = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar__list'>
        <li className="navbar__list-item">
          <NavLink 
            to={'/concepts'} 
            className={({ isActive }) =>
              `navbar__link ${isActive ? 'active' : ''}`
            }
          >
            Поняття
          </NavLink>
        </li>

        <li className="navbar__list-item">
          <NavLink 
            to={'/technologies'} 
            className={({ isActive }) =>
              `navbar__link ${isActive ? 'active' : ''}`
            }
          >
            Технології
          </NavLink>
        </li>

        <li className="navbar__list-item">
          <NavLink 
            to={'/sources'} 
            className={({ isActive }) =>
              `navbar__link ${isActive ? 'active' : ''}`
            }
          >
            Джерела
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar