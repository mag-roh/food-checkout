import React from 'react'
import './CSS/Body.css';
const Body = () => {
  return (
      <table className='bodyElements__container'>
        <tr className='table__heading'>
            <th className='your__order'><h3>Your Order</h3></th>
            <th className='add__items'>Add items +</th>
      </tr>
      <tr className='table__contents'>
        <div className='item__details'>
          <td className='item__name'><span className='order__number'>1</span>Margarita A
          <p className='item__description1'>crab & cucumber</p>
          </td>
          <td className='item__cost'>Rs 412.00</td>
          </div>
      </tr>
      <hr/>
      <tr className='table__contents'>
        <div className='item__details'>
          <td className='item__name'><span className='order__number'>2</span>Margarita B
          <p className='item__description2'>tuna & cucumber</p>
          </td>
          <td className='item__cost'>Rs 112.00</td>
          </div>
      </tr>
      <hr/>
      <tr className='table__contents'>
        <div className='item__details'>
          <td className='item__name'><span className='order__number'>3</span>Margarita C
          <p className='item__description3'>smoked salmon over rice with extra sauce to check if this line works</p>
          </td>
          <td className='item__cost'>Rs 1236.00</td>
           </div>
        </tr>
      <hr/>
    </table>
  )
}

export default Body;
