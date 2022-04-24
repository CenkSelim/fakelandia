import { Route, Routes } from "react-router-dom";
import Confession from "../confession/confession";
import Home from "../home/home";
import MainLayout from "../layouts/main_layout";
import Misdemeanour from "../misdemeanour/misdemeanour";
import NotFound from "../not_found/not_found";

const Router : React.FC = () =>
    <Routes>
        <Route element={<MainLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="misdemeanour" element={<Misdemeanour/>}/>
            <Route path="confession" element={<Confession/>}/>
            <Route path="*" element={<NotFound/>} />
        </Route>
    </Routes>

export default Router;