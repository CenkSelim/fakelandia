import IMisdemeanours from "./interfacemisdemeanours";
import React from "react";

const MisdemeanoursContext = React.createContext<IMisdemeanours[]>([{
    citizenId: 0,
    misdemeanour: 'Default misdemeanour', 
    date: 'Default date'
}]);

export default MisdemeanoursContext;