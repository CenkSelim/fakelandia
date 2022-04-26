import { useContext } from 'react';
import image from '../../assets/under_construction.png'
import MisdemeanoursContext from '../misdemeanours/misdemeanourscontext';
const Confession: React.FC = () => {

  const [misdemeanours, setMisdemeanours] = useContext(MisdemeanoursContext);

  const updateHandlerMisdemeanours = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
	};

return (
  <div>
    <h2>Confession</h2> 
    <img src={image} alt='Under construction!'/>
  </div>
)};
export default Confession;