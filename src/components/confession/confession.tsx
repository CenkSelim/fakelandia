import { useContext } from 'react';
import image from '../../assets/under_construction.png'
import MisdemeanoursContext from '../misdemeanours/misdemeanourscontext';
const Confession: React.FC = () => {

   const misdemeanoursContext =  useContext(MisdemeanoursContext);
  const updateHandlerMisdemeanours = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const test = [...misdemeanoursContext.misdemeanours];

        test.push({
            citizenId: 0,
            misdemeanour: 'Default misdemeanour',
            date: 'Default date'
        });
        misdemeanoursContext.setMisdemeanours(test);
	};

return (
  <div>
    <h2>Confession</h2> 
    <form onSubmit={updateHandlerMisdemeanours}>
      <input className="form__text"  type="submit"   value="Add Cat" />

    </form>
      <img src={image} alt='Under construction!'/>
  </div>
)};
export default Confession;