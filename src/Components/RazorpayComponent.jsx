import { useEffect, useState } from 'react';
import Razorpay from 'razorpay';

const RazorpayComponent = () => {
  const [rzp, setRzp] = useState(null);

  useEffect(() => {
    const options = {
      key: 'rzp_test_01GaCZQAiE5gCv',
      amount: 50000, // amount in paise (e.g., 50000 for INR 500)
      currency: 'INR',
      name: 'Your Company Name',
      description: 'Purchase Description',
      image: 'path/to/your/logo.png',
      handler: function(response) {
        // Handle successful payment response
        console.log(response);
      },
      prefill: {
        name: 'John Doe',
        email: 'john@example.com',
        contact: '9876543210',
      },
      notes: {
        address: 'Razorpay Corporate Office',
      },
      theme: {
        color: '#F37254',
      },
    };

    const rzpInstance = new Razorpay(options);
    setRzp(rzpInstance);

    // Clean up function
    return () => {
      rzpInstance.close(); // Close Razorpay instance on component unmount
    };
  }, []);

  

  /*return (
    <div>
      <button onClick={handlePayment}>Proceed to Pay</button>
    </div>
  );*/
};

export default RazorpayComponent;