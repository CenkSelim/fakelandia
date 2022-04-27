import { render, screen} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Misdemeanours from "./misdemeanours";


test('render misdemeanour', () => {
    render (<Misdemeanours />, {wrapper: BrowserRouter});
    const textTitle = screen.getByText(/Punishment Idea/i);
    expect(textTitle).toBeInTheDocument();  
});