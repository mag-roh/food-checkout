import React from 'react'
import './CSS/Footer.css';
import Button from './Button';
const Footer = () => {
  return (
    <div className='footerElements__container'>
      <div className='footer__summary'>
        <h2 className='title'>
         Summary
        </h2>
        <table>
      <tr className='footer__content'>
          <td className='item'>Subtotal
          </td>
          <td className='cost'>Rs 1760.00</td>
      </tr>
      <hr/>
      <tr className='footer__content'>
          <td className='item'>Discount
          </td>
          <td className='discount__cost'>- Rs 759.50</td>
      </tr>
      <hr/>
      <tr className='footer__content'>
          <td className='item'>Delivery Fee
          </td>
          <td className='cost'>Rs 12.00</td>
          </tr>
          <hr />
           <tr className='footer__content'>
          <td className='item'>Taxes
          </td>
          <td className='cost'>Rs 46.15</td>
          </tr>
          <hr />
          <tr className='footer__content'>
          <td className='item__total'>Total</td>
          <td className='total__cost'>Rs 1058.65</td>
          </tr>
          </table>
          </div>
      
        </div>
  )
}
export default Footer;