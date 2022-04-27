import { useContext, useEffect, useState } from 'react';
import MisdemeanoursContext from './misdemeanourscontext';
import IMisdemeanour from './interfacemisdemeanour';
import MisdemeanourItem from './misdemeanouritem';
import { emojis } from './misdemeanourlist';
import './misdemeanour.css';

const Misdemeanours : React.FC = () =>{

    const misdContext =  useContext(MisdemeanoursContext);
    const [filteredList, setFilteredList] = useState<Array<IMisdemeanour>>([]);
    const [loaded, setLoaded] = useState<boolean>(false);
    const [selectedFilter, setSelectedFilter] = useState("");
    console.log(misdContext);

    useEffect(()=>{
        if (misdContext.misdemeanours.length <= 0 || loaded)
        {
            return;
        }
        setFilteredList(misdContext.misdemeanours.map((item) => item));
        if (selectedFilter!=="") {
            console.log(selectedFilter);
            setFilteredList(misdContext.misdemeanours.filter((item) => item.misdemeanour === selectedFilter));
        } 
        setLoaded(true);
    },[selectedFilter,misdContext.misdemeanours])

    const updateHandlerFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
        //e.preventDefault(); 
        setLoaded(false);        
        setSelectedFilter(e.target.value);      
    };
 
    return (
  <div>
    <div>
            <table className='misdemeanour__table'>
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>
                            <div>
                                <select
                                    className='misdemeanour__select'
                                    name="misdemeanour-list"
                                    id="misdemeanour-list"
                                    onChange={updateHandlerFilter}
                                >
                                    <option value="">All</option>
                                    {emojis.map((emoji) => <option key={emoji.id} value={emoji.id}>{emoji.description}</option>)}
                                </select>
                            </div>
                        </th>
                        <th></th>
                    </tr>
                    <tr>
                        <th className='misdemeanour__title'>Citizen Id</th>
                        <th className='misdemeanour__title'>Date</th>
                        <th className='misdemeanour__title'>Misdemeanour</th>
                        <th className='misdemeanour__title is-hidden-mobile'>Punishment Idea</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredList && filteredList.map((misdemeanour,index) =>
                       <MisdemeanourItem 
                        key={index}
                        index={index}
                        citizenId={misdemeanour.citizenId}
                        date={misdemeanour.date}
                        misdemeanour={misdemeanour.misdemeanour}
                       />                     
                    )}
                </tbody>
            </table>
        </div>
  </div>
)};

export default Misdemeanours;