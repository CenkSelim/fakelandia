import { NavLink } from "react-router-dom";

const Nav : React.FC = () =>
  <nav>
      <ul className="header__links">
          <li><NavLink to='/'
            className={({ isActive }) => isActive ? 'link--active' : 'link'}
            >Home</NavLink></li>
          <li><NavLink to='/misdemeanour'
            className={({ isActive }) => isActive ? 'link--active' : 'link'}
            >Misdemeanours</NavLink></li>
          <li><NavLink to='/confession'
            className={({ isActive }) => isActive ? 'link--active' : 'link'}
            >Confess To Us</NavLink></li>
      </ul>
  </nav>;

  export default Nav;