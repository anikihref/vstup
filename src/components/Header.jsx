import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '@/components/NavBar';
import '@/styles/components/Header.scss';

const Header = () => {
  return (
    <header className='header'>
        <div className="container header__container">

          <Link to={'/'} className='header__logo'>
            Веб Технології
          </Link>

          <NavBar />
        </div>
    </header>
  )
}

export default Header