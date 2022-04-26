import { useContext, useEffect, useState } from 'react';
import MisdemeanoursContext from './misdemeanourscontext';
import IMisdemeanour from './interfacemisdemeanour';
import MisdemeanourItem from './misdemeanouritem';
const Misdemeanours : React.FC = () =>{

    const misdemeanoursContext =  useContext(MisdemeanoursContext);
    const [filteredList, setFilteredList] = useState<Array<IMisdemeanour>>([]);
    const [loaded, setLoaded] = useState<boolean>(false);
    const [selectedFilter, setSelectedFilter] = useState("");
    console.log(misdemeanoursContext);

    useEffect(()=>{
        if (misdemeanoursContext.misdemeanours.length <= 0 || loaded)
        {
            return;
        }
        setFilteredList(misdemeanoursContext.misdemeanours.map((item) => item));
        if (selectedFilter!=="") {
            console.log(selectedFilter);
            setFilteredList(misdemeanoursContext.misdemeanours.filter((item) => item.misdemeanour === selectedFilter));
        } 
        setLoaded(true);
    },[selectedFilter,misdemeanoursContext.misdemeanours])

    const updateHandlerFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
        //e.preventDefault(); 
        setLoaded(false);        
        setSelectedFilter(e.target.value);      
    };

return (
  <div>
    <div>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>
                            <div>
                                <select
                                    name="misdemeanour-list"
                                    id="misdemeanour-list"
                                    onChange={updateHandlerFilter}
                                >
                                    <option value="">All</option>
                                    <option value="vegetables">Vegetables</option>
                                    <option value="rudeness">Rudeness</option>
                                    <option value="lift">Lift</option>
                                    <option value="united">United</option>
                                </select>
                            </div>
                        </th>
                        <th></th>
                    </tr>
                    <tr>
                        <th>Citizen Id</th>
                        <th>Date</th>
                        <th>Misdemeanour</th>
                        <th>Punishment Idea</th>
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