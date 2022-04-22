import { Route, Routes } from "react-router-dom";
import Confession from "../confession/confession";
import Home from "../home/home";
import Misdemeanour from "../misdemeanour/misdemeanour";
import NotFound from "../not_found/not_found";

const Router : React.FC = () =>
    <Routes>
        <Route index element={<Home/>}/>
        <Route path="confession" element={<Confession/>}/>
        <Route path="misdemenour" element={<Misdemeanour/>}/>
        <Route path="*" element={<NotFound/>} />
    </Routes>

export default Router;