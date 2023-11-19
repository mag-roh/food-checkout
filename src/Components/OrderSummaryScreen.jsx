import React from 'react';
import './CSS/OrderSummaryScreen.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import Button from './Button';
const OrderSummaryScreen = () => {
  return (
      <div className="orderSummary__container">
          <div className="orderSummary__header">
              <Header/>
          </div>
          <div className="orderSummary__body">
              <Body/>
          </div>
          <div className="orderSummary__footer">
              <Footer />
            <div className='footer__button'>
      <Button className='submit__button' to='/paymentPage'>
        Place Order
        </Button>
              </div>
        </div>
    </div>
  );
}

  
export default OrderSummaryScreen;