import React from "react";
import IMisdemeanour from './interfacemisdemeanour';

const MisdemeanoursContext = React.createContext([[{
    citizenId: 0,
    misdemeanour: 'Default misdemeanour', 
    date: 'Default date'}],  (misdemeanours: IMisdemeanour[]) => {}]);

export default MisdemeanoursContext;