import { useState } from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Navbar = ({ mobileMenu, setMobileMenu, color }) => {
  const [mobileSubMenu, setMobileSubMenu] = useState('');
  const [mobileSubMenuSub, setMobileSubMenuSub] = useState('');
  const [menuTitle, setMenuTitle] = useState('');

  const handleMenu = () => {
    setMobileMenu(false);
    setMobileSubMenu('');
    setMobileSubMenuSub('');
  };

  const handleSubMenu = (e, id) => {
    e.preventDefault();
    setMobileSubMenu(id);

    if (e.target.tagName === 'A') {
      const content = e.target.firstChild.textContent;
      setMenuTitle(content);
    } else {
      const content = e.target.parentElement.textContent;
      setMenuTitle(content);
    }
  };

  const handleSubMenuSub = (e, id) => {
    e.preventDefault();
    setMobileSubMenuSub(id);
    if (e.target.tagName === 'A') {
      const content = e.target.firstChild.textContent;
      setMenuTitle(content);
    } else {
      const content = e.target.parentElement.textContent;
      setMenuTitle(content);
    }
  };

  const handleGoBack = () => {
    if (mobileSubMenuSub) {
      setMobileSubMenuSub('');
      return;
    }
    if (mobileSubMenu) {
      setMobileSubMenu('');
      return;
    }
  };

  return (
    <div className='menu-block-wrapper'>
      <div
        onClick={handleMenu}
        className={`menu-overlay ${mobileMenu && 'active'}`}
      />
      <nav
        className={`menu-block ${mobileMenu && 'active'}`}
        id='append-menu-header'
      >
        <div className={`mobile-menu-head ${mobileSubMenu && 'active'}`}>
          <div onClick={handleGoBack} className='go-back'>
            <img
              className='dropdown-icon'
              src='assets/img/icon-black-long-arrow-right.svg'
              alt='cheveron-right'
              width={16}
              height={16}
            />
          </div>
          <div className='current-menu-title'>{menuTitle}</div>
          <div onClick={handleMenu} className='mobile-menu-close'>
            ×
          </div>
        </div>
        <ul className={`site-menu-main ${color}`}>
          {/* Global navbar */}
          {/*<li
            onClick={(e) => handleSubMenu(e, 1)}
            className='nav-item nav-item-has-children'
          >
            <Link to='#' className='nav-link-item drop-trigger'>
              Demo
              <img
                className='dropdown-icon'
                src='assets/img/icon-black-cheveron-right.svg'
                alt='cheveron-right'
                width={16}
                height={16}
              />
            </Link>
            <ul
              className={`sub-menu ${mobileSubMenu === 1 && 'active'}`}
              id='submenu-1'
            >
              <li className='sub-menu--item'>
                <Link to='/'>home 01</Link>
              </li>
              <li className='sub-menu--item'>
                <Link to='/home-2'>home 02</Link>
              </li>
              <li className='sub-menu--item'>
                <Link to='/home-3'>home 03</Link>
              </li>
              <li className='sub-menu--item'>
                <Link to='/home-4'> home 04</Link>
              </li>
            </ul>
  </li>*/}
          <li className='nav-item'>
          <Link to='/' className='nav-link-item'>
            Home
          </Link>
        </li>
        <li
        onClick={(e) => handleSubMenu(e, 2)}
        className='nav-item nav-item-has-children'
      >
        <Link to='#' className='nav-link-item drop-trigger'>
          About
          <img
            className='dropdown-icon'
            src='assets/img/icon-black-cheveron-right.svg'
            alt='cheveron-right'
            width={16}
            height={16}
          />
        </Link>
        <ul
          className={`sub-menu ${mobileSubMenu === 2 && 'active'}`}
          id='submenu-2'
        >
          <li className='sub-menu--item'>
            <Link to='/about'>About Us</Link>
          </li>
          <li className='sub-menu--item'>
            <Link to='/pricing'>Pricing</Link>
          </li>
          <li className='sub-menu--item'>
            <Link to='/faq'>FAQ</Link>
          </li>
        </ul>
      </li>
          <li className='nav-item'>
            <Link to='/services' className='nav-link-item'>
              Services
            </Link>
          </li>
          <li className='nav-item'>
          <Link to='/portfolio' className='nav-link-item'>
            Portfolios
          </Link>
        </li>
          <li className='nav-item'>
            <Link to='/contact' className='nav-link-item'>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
