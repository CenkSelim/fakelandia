import { useContext, useEffect, useState } from 'react';
import MisdemeanourContext from './misdemeanourscontext';
import IMisdemeanour from './interfacemisdemeanour';
import MisdemeanourItem from './misdemeanouritem';
const Misdemeanours : React.FC = () =>{

    const misdemeanours = useContext(MisdemeanourContext);
    const [filteredList, setFilteredList] = useState<Array<IMisdemeanour>>([]);
    const [loaded, setLoaded] = useState<boolean>(false);
    const [selectedFilter, setSelectedFilter] = useState("");
    console.log(misdemeanours);

    useEffect(()=>{
        console.log("1" + loaded);
        if (loaded && filteredList.length > 0)
        {
            return;
        }
        console.log("2" + selectedFilter);
        setFilteredList(misdemeanours.map((item) => item));
        if (selectedFilter!=="") {
            console.log(selectedFilter);
            setFilteredList(misdemeanours.filter((item) => item.misdemeanour === selectedFilter));
        } 
        setLoaded(true);
    },[selectedFilter,misdemeanours])

    const updateHandlerFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
        //e.preventDefault(); 
        setLoaded(false);        
        setSelectedFilter(e.target.value);      
    };




    const emojis = [
        {id: "vegetables",description:"Not Eating Your Vegetables 🥗"},
        {id: "rudeness",description:"Mild Public Rudeness 🤪"},
        {id: "lift",description:"Speaking in a Lift  🗣"},
        {id: "united",description:"Supporting Manchester United  😈"},
    ];
    const getMisdemenourDescription =(param:string) => (emojis.find( ({ id }) => id === param ));  
    

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
                                    <option value="vegetables">Vegetables</option>7
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
                        index={index}
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