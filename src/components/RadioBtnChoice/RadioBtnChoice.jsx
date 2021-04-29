import React from 'react'

function RadioBtnChoice({setPacked/* setDelivered */}) {
    return (
        <div> 
            
            <input type="radio" name="packedinfo"       id="all"     value="all"     onClick={ (ev) => setPacked(ev.target.value) } />      {/*name => serverre megy / az adja meg hogy az egy groupba tartozik itt mindenhol packedinfo */}
            <label htmlFor="all"> All  &nbsp; &nbsp;</label>
           
            <input type="radio" name="packedinfo"   id="packed"   value="packed"      onClick={ (ev) => setPacked(ev.target.value) } />
            <label htmlFor="packed"> Packed &nbsp; &nbsp;</label>
          
            <input type="radio" name="packedinfo" id="Unpacked"    value="Unpacked"    onClick={ (ev) => setPacked(ev.target.value) } />
            <label htmlFor="unpacked"> Unpacked &nbsp; &nbsp;</label>
        </div>
        
                  /*   <div>
                    <label htmlFor="Delivered">Delivered</label>
                    <input type="ratio" name="deliveredinfo" value="delivered" onClick={ (ev) => setDelivered(ev.target.value) } />             onClick mert ratio (ev) mert input mezo           

                    <label htmlFor=" Not Delivered"> Not Delivered</label>
                    <input type="ratio" name="deliveredinfo" value=" notDelivered" onClick={ (ev) => setDelivered(ev.target.value) }/>
                    </div>
         */
    )
}

export default RadioBtnChoice
