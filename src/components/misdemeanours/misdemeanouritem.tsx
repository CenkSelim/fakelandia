
const MisdemeanourItem: React.FC<{index:number,date:string,misdemeanour:string}> = ({index,date,misdemeanour}) => {
  
    const emojis = [
        {id: "vegetables",description:"Not Eating Your Vegetables 🥗"},
        {id: "rudeness",description:"Mild Public Rudeness 🤪"},
        {id: "lift",description:"Speaking in a Lift  🗣"},
        {id: "united",description:"Supporting Manchester United  😈"},
    ];
    const getMisdemenourDescription =(param:string) => (emojis.find( ({ id }) => id === param ));  
  
return (<>
        <tr key={index}>
            <td>********</td>
            <td>{date}</td>
            <td>{getMisdemenourDescription(misdemeanour)?.description}</td>
            <td><img alt="Randomly generated" src={`https://picsum.photos/60/60?${Math.random()}`} /></td>
        </tr>
</>)    
};
export default MisdemeanourItem;