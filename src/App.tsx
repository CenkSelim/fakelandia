import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/router/router';
import React, { useEffect, useState } from 'react';
import IMistemeanours from './components/misdemeanour/interfacemisdemeanours';
import generateMisdemeanours from './components/misdemeanour/generatemisdemeanours';

const App : React.FC = () => {

  const [numberOfMistermeanours, setnumberOfMistermeanours] = useState<number>(10);
  const [mistemeanours, setMistemeanours] = useState<Array<IMistemeanours>>([
   
  ]);

  useEffect(() => {
    if (mistemeanours.length < numberOfMistermeanours)
    {
      const getMistemeanours = async (numberOfMistermeanours : number) => {
        const apiResponse = await generateMisdemeanours(numberOfMistermeanours);
        setMistemeanours(apiResponse);
      };
      getMistemeanours(numberOfMistermeanours);

    }	
  });

  

  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
