import React from 'react'

function GiftDetails({item}) {
    return (
        <div className="details">
    
        <div className="table_wrapper">
          <table border="1">
            <tr>
              <th colspan="2">
                
                <b>Gifts Details</b>
              </th>
            </tr>

            <tr>
              <td class="left">Price: </td>
              <td>{item.cost}</td>
            </tr>

            <tr>
              <td class="left">Fragile:</td>
              <td>{item.fragile}</td>
            </tr>

            <tr>
              <td class="left">Mass:</td>
              <td>{item.mass}</td>
            </tr>

            <tr>
              <td class="left">Packed:</td>
              <td>{item.packed}</td>
            </tr>



            <tr>
              <td class="left">Delivery Date:</td>
              <td>{item.deliveryDate.replace('T',' ')}</td>
            </tr>
          </table>
        </div>
   
    </div>
    )
}

export default GiftDetails
