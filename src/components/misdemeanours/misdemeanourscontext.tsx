import React from "react";
import IMisdemeanour from './interfacemisdemeanour';

interface IMisdemeanourContext {
    misdemeanours: Array<IMisdemeanour>;
    setMisdemeanours: React.Dispatch<React.SetStateAction<Array<IMisdemeanour>>>
}

const MisdemeanoursContext = React.createContext<IMisdemeanourContext >(
    {
        misdemeanours: [{
            citizenId: 0,
            misdemeanour: 'Default misdemeanour',
            date: 'Default date'
        }],
        setMisdemeanours: () => { }
    }
);

export default MisdemeanoursContext;