import IMisdemeanour from "./interfacemisdemeanour";
import React from "react";

const MisdemeanoursContext = React.createContext<IMisdemeanour[]>([{
    citizenId: 0,
    misdemeanour: 'Default misdemeanour', 
    date: 'Default date'
}]);

export default MisdemeanoursContext;