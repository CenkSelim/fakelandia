import { useContext, useState } from 'react';
import MisdemeanoursContext from '../misdemeanours/misdemeanourscontext';
import { emojis } from '../misdemeanours/misdemeanourlist';
import './confession.css'
const Confession: React.FC = () => {

  const misdemeanoursContext =  useContext(MisdemeanoursContext);
  const [disable, setDisable] = useState(true);
  const [misdemeanour, setMisdemeanour] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [selectedFilter, setSelectedFilter] = useState("");
  const texDetailsMin:number=20;
  
  const updateHandlerMisdemeanours = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const misdtoupdate = [...misdemeanoursContext.misdemeanours];
    const currDate = new Date().toLocaleDateString();
    
    if (selectedFilter) {
      misdtoupdate.push({
          citizenId: Math.floor(2 + Math.random() * 37 * Math.random() * 967),
          misdemeanour: selectedFilter,
          date: currDate
      });
      misdemeanoursContext.setMisdemeanours(misdtoupdate);
    }
    else {
        console.log(`Subject: ${subject}`);
        console.log(`Reason for contact: Just want to talk`);
        console.log(`Misdemeanour : ${misdemeanour}`);
        console.log(`Current Date : ${currDate}`);

    }

    setSubject('');
    setMisdemeanour('');
    setDisable(true);

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
  <div className="form__container">
    <p>It's very difficult to catch people committing misdemeanours so we appreciate it when citizens confess to us directly.</p>
    <p>However, if you're just having a hard day and need to vent then you're welcome to contact us here too. Up to you!</p>
    <form onSubmit={updateHandlerMisdemeanours}>
      <div  className='form'>
          <div>
              <label className='form__label' htmlFor='subject'>Subject: </label>
              <input className='form__input' placeholder='input'  id="subject" required value={subject} onChange={(event) => setSubject(event.target.value)}/>
          </div>
          <div>
            <label  className='form__label'>
              Reason for contact:{` `}  
              <select
                  className='form__select'
                  name="misdemeanour-list"
                  id="misdemeanour-list" 
                  onChange={updateHandlerFilter}            
              >
                  <option value="">Just want to talk</option>
                  {emojis.map((emoji) => <option key={emoji.id} value={emoji.id}>{emoji.description}</option>)}
               </select>
            </label>
          </div>
          <div>            
              <textarea 
                className='form__note'
                id="misdemeanour"
                rows={5}
                onChange={recalculate}
                value={misdemeanour}
               />
          </div>
          <div>
              <input className='form__button' disabled={disable} type="submit"   value="Confess" />
            </div>
      </div>
    </form>
  </div>
)};
export default Confession;