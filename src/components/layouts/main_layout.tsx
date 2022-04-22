import { Outlet } from "react-router-dom";
import Header from "../header/header";

const MainLayout : React.FC = () =>
    <>
        <Header/>
        <main>
            <Outlet/>
        </main>
    </>

export default MainLayout;