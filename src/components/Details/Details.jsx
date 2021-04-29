import React,{useState} from "react";
import GiftDetails from './giftDetails'
/*  item
{
      name         : 'Gift card',
      cost         : '5 000 Ft',
      fragile      : false,
      mass         : '0.05 kg',
      packed       : true,
      ageLimit     : 'adult',
      deliveryDate : '2021.03.03T10:00',
  
  }, */
function Details({item }) {

  const [showMore,setShowMore] = useState()

  return (
    <div className="item">
        <h2>{item.name}</h2> 
        <div> 
            <button className="btnShow" onClick = {() => (setShowMore(!showMore))}>
                { showMore  ? 'show less' : 'show more' }
            </button>
            {
                showMore
                        ? <GiftDetails item = {item}/>
                        : ''
            }
        </div>
    </div> 
 
  );
}

export default Details;
