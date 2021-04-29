import "./App.css";
import React, { useState, useEffect } from "react";
import Loading from "./components/Loading/Loading.jsx";
import ButtonChoice from "./components/ButtonChoice/ButtonChoice.jsx";
import Details from './components/Details/Details'
import RadioBtnChoice from './components/RadioBtnChoice/RadioBtnChoice.jsx'


const App = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState('')
  const [filteredData, setFilteredData] = useState([])
  
  const[packed,setPacked] = useState('')  

 
  useEffect(() => {

    setLoading(true);
    setData([]);

    fetch("/api/gifts")
      .then((response) => response.json())
      .then((responseAdat) => setData(responseAdat))
      .catch((error) => {
        console.log("error", error);
        setData(null);
      })
      .finally(() => {
        console.log("fetch end");
        setLoading(false);
      });

    return () => {
      //cleanup
    };
  }, []);

  console.log("data=", data);

  useEffect(() => {
    if( show === 'all')
      setFilteredData(data)

    if (show === 'adult')
    setFilteredData( data.filter( gift => gift.ageLimit === 'adult'   ) )

    if (show === 'child')
    setFilteredData( data.filter( gift => gift.ageLimit === 'child'   ) )

    if (show === 'baby')
    setFilteredData( data.filter( gift => gift.ageLimit === 'baby'   ) )

  return () => {
    //cleanup
  }
}, [show])

console.log('packed=',packed);
console.log('filteredData=',filteredData);
  return (
    <div className="App">
        <h1>Gifts</h1>

            <hr/>
               {loading ? <Loading/> : <ButtonChoice setShow = {setShow} />}
                
                 {
                   (data === 0)
                                ? <p>Upss something happend</p>
                                : <div className="items">
                                   <hr/>
                                      <RadioBtnChoice setPacked={setPacked}/>
                                  {
                                  filteredData.map(  (item) => 

                                     packed === 'all'
                                        ? <Details item = {item}/> 
                                        : packed === "packed"
                                             ?  item.packed=== true && <Details item = {item}/> 
                                             :  item.packed=== false && <Details item = {item}/> 
                                            
                                    
                                        
                                    )  
                                   }</div>

                 }

    </div>
  );
};
export default App;
