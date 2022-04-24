import { NavLink } from "react-router-dom";

const Nav : React.FC = () =>
  <nav>
      <ul className="header__links">
          <li className="nav__link">
            <h1 className="header__title" >Fakelandia Justice Department</h1>
          </li>
          <li className="nav__link">
            <NavLink to='home'
              className={({ isActive }) => isActive ? 'link--active' : 'link'}
              >Home
            </NavLink>
          </li>
          <li className="nav__link">
            <NavLink to='misdemeanour'
              className={({ isActive }) => isActive ? 'link--active' : 'link'}
              >Misdemeanours
            </NavLink>
          </li>
          <li className="nav__link">
            <NavLink to='confession'
              className={({ isActive }) => isActive ? 'link--active' : 'link'}
              >Confess To Us
            </NavLink>
          </li>
      </ul>
  </nav>;

  export default Nav;