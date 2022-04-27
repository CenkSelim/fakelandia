import { emojis } from "./misdemeanourlist";

const MisdemeanourItem: React.FC<{index:number,citizenId:number,date:string,misdemeanour:string}> = ({index,citizenId,date,misdemeanour}) => {

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