import React from 'react'
import './CSS/InfoBox.css';
const InfoBox = () => {
  return (
    <div className="infoBox__container">
      <h4 className='infoBox__heading'>TSX PIZZERIAS</h4>
      <div className='orderType'>
        <h6 className='delivery'>DELIVERY</h6>
        <h6 className='pickup'>PICK UP</h6>
        </div>
        <div className="order__info">
          <p className='order__entity1'>25 mins</p>
          <p className='order__entity2'>Rs 20</p>
        <p className='order__entity3'>Discounts</p>
              </div>

        <div className='hours'>
      Menu Hours: 10:00 AM to 11:00 PM
</div>
    </div>
  )
}

export default InfoBox;