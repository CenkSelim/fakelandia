import { useContext } from 'react';
import MisdemeanourContext from './misdemeanourscontext';

const Misdemeanours : React.FC = () =>{

  const misdemeanours = useContext(MisdemeanourContext);

return (
  <div>
    <h2>Misdemeanours</h2>
    <div>
            <h3>Display a list of misdemeanour items</h3>
            <table>
                <thead>
                    <tr>
                        <th>Citizen Id</th>
                        <th>Date</th>
                        <th>Misdemeanour</th>
                        <th>Punishment Idea</th>
                    </tr>
                </thead>
                <tbody>
                    {misdemeanours && misdemeanours.map((misdemeanour,index) =>
                        <tr key={index}>
                            <td>{misdemeanour.citizenId}</td>
                            <td>{misdemeanour.date}</td>
                            <td>{misdemeanour.misdemeanour}</td>
                            <td><img alt="Randomly generated" src={`https://picsum.photos/60/60?${Math.random()}`} /></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
  </div>
)};

export default Misdemeanours;