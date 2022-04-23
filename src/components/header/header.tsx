import Nav from "./nav";
import './header.css'
const Header : React.FC =  () =>
    <header className="header">
        <h1 className="header__title" >Fakelandia Justice Department</h1>
        <Nav />
    </header>;

export default Header;