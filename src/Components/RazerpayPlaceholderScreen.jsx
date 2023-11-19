import React from 'react'
import './CSS/RazerpayPlaceholderScreen.css'
import Header from './Header';
import Button from './Button';
//import RazorpayComponent from './RazorpayComponent';
const RazerpayPlaceholderScreen = () => {
    /*const handlePayment = () => {
    if (rzp) {
      rzp.open(); // Open the Razorpay payment popup
    }
  };*/
    return (
        <div className="orderSummary__container">
            <div className="orderSummary__header">
                <Header/>
            </div>
            <div className="razorPaySummary__body">
            </div>
            <div className="razorPaySummary__footer">
                <Button className='submit__button'>Proceed to Pay</Button>
            </div>
      </div>
    );
}
export default RazerpayPlaceholderScreen;