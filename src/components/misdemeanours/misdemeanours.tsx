import { useContext } from 'react';
import image from '../../assets/under_construction.png'
import MisdemeanourContext from './misdemeanourscontext';

const Misdemeanours : React.FC = () =>{

  const misdemeanours = useContext(MisdemeanourContext);

return (
  <div>
    <h2>Misdemeanours</h2>
    <img src={image} alt='Under construction!'/>
  </div>
)};

export default Misdemeanours;