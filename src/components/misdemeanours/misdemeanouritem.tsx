
const MisdemeanourItem: React.FC<{index:number,citizenId:number,date:string,misdemeanour:string}> = ({index,citizenId,date,misdemeanour}) => {
  
    const emojis = [
        {id: "vegetables",description:"Not Eating Your Vegetables 🥗"},
        {id: "rudeness",description:"Mild Public Rudeness 🤪"},
        {id: "lift",description:"Speaking in a Lift  🗣"},
        {id: "united",description:"Supporting Manchester United  😈"},
    ];
    const getMisdemenourDescription =(param:string) => (emojis.find( ({ id }) => id === param ));  
  
return (<>
        <tr>
            <td className='misdemeanour__detail'>{citizenId}</td>
            <td className='misdemeanour__detail'>{date}</td>
            <td className='misdemeanour__detail'>{getMisdemenourDescription(misdemeanour)?.description}</td>
            <td className="misdemeanour__detail is-hidden-mobile"><img alt="Randomly generated" src={`https://picsum.photos/100/60?${Math.random()}`} /></td>
        </tr>
</>)    
};
export default MisdemeanourItem;