import IMisdemeanours from "./interfacemisdemeanours";
import React from "react";

const MisdemeanourContext = React.createContext<IMisdemeanours[]>([{
    citizenId: 0,
    misdemeanour: 'Default misdemeanour', 
    date: 'Default date'
}]);

export default MisdemeanourContext;