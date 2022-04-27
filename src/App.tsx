import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/router/router';
import React, { useEffect, useState } from 'react';
import IMisdemeanour from './components/misdemeanours/interfacemisdemeanour';
import generateMisdemeanours from './components/misdemeanours/generatemisdemeanours';
import MisdemeanourContext from './components/misdemeanours/misdemeanourscontext';

const App : React.FC = () => {

  const [loaded, setLoaded] = useState<boolean>(false);
  const numberOfMisdemeanours:number = 10;
  const [misdemeanours, setMisdemeanours] = useState<Array<IMisdemeanour>>([]);

  useEffect(() => {
    if (loaded)
    {
      return;
    }
    const getMistemeanours = async (numberOfMisdemeanours : number) => {
      const apiResponse = await generateMisdemeanours(numberOfMisdemeanours);
      setMisdemeanours(apiResponse);
    };
    getMistemeanours(numberOfMisdemeanours);
    setLoaded(true);
  },[loaded,numberOfMisdemeanours]);
  
  return (
    <BrowserRouter>
      <MisdemeanourContext.Provider value={{misdemeanours:misdemeanours,setMisdemeanours:setMisdemeanours}}>
        <Router />
      </MisdemeanourContext.Provider>
    </BrowserRouter>
  );
}

export default App;
