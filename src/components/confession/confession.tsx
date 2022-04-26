import { useContext, useState } from 'react';
import MisdemeanoursContext from '../misdemeanours/misdemeanourscontext';
const Confession: React.FC = () => {

  const misdemeanoursContext =  useContext(MisdemeanoursContext);
  const [disable, setDisable] = useState(true);
  const [misdemeanour, setMisdemeanour] = useState<string>('');
  const [selectedFilter, setSelectedFilter] = useState("");
  const texDetailsMin:number=50;
  
  const updateHandlerMisdemeanours = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const test = [...misdemeanoursContext.misdemeanours];
    const currDate = new Date().toLocaleDateString();
    console.log(selectedFilter);
    test.push({
        citizenId: Math.floor(2 + Math.random() * 37 * Math.random() * 967),
        misdemeanour: selectedFilter,
        date: currDate
    });
    misdemeanoursContext.setMisdemeanours(test);
    console.log(misdemeanour);
	};

  const updateHandlerFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault(); 
        console.log(e.target.value);    
        setSelectedFilter(e.target.value);      
  };

  const recalculate = (e: React.ChangeEvent<HTMLTextAreaElement>)=> {
        setMisdemeanour(e.target.value);
        if (texDetailsMin <= e.target.value.length)
        { 
            setDisable(false);
        };
  };

return (
  <div>
    <form onSubmit={updateHandlerMisdemeanours}>
      <div>
          <div>
              <label htmlFor='subject'>Subject: </label>
              <input placeholder='input'  id="subject" required />
          </div>
          <div>
            <label>
              Reason for contact:{` `}  
              <select
                  name="misdemeanour-list"
                  id="misdemeanour-list" 
                  onChange={updateHandlerFilter}            
              >
                  <option value="">Just want to talk</option>
                  <option value="vegetables">Not Eating Your Vegetables 🥗</option>7
                  <option value="rudeness">Mild Public Rudeness 🤪</option>
                  <option value="lift">Speaking in a Lift  🗣</option>
                  <option value="united">Supporting Manchester United  😈</option>
              </select>
            </label>
          </div>
          <div>
              
              <textarea 
                id="details"
                rows={5}
                onChange={recalculate}
               />
          </div>
          <div>
              <input disabled={disable} type="submit"   value="Confess" />
            </div>
      </div>
    </form>
  </div>
)};
export default Confession;