import { useContext } from 'react';
import MisdemeanourContext from './misdemeanourscontext';

const Misdemeanours : React.FC = () =>{

    const misdemeanours = useContext(MisdemeanourContext);
    const emojis = [{
        id: "vegetables",
        description:"Not Eating Your Vegetables 🥗"
         },
       {
        id: "rudeness",
        description:"Mild Public Rudeness 🤪"
         },
         {
        id: "lift",
        description:"Speaking in a Lift  🗣"
         },
         {
        id: "united",
        description:"Supporting Manchester United  😈"
         },
    ];
    const getMisdemenourDescription =(param:string) => (emojis.find( ({ id }) => id === param ));

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
                            <td>{getMisdemenourDescription(misdemeanour.misdemeanour)?.description}</td>
                            <td><img alt="Randomly generated" src={`https://picsum.photos/60/60?${Math.random()}`} /></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
  </div>
)};

export default Misdemeanours;