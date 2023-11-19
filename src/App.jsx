import './App.css'
import { Routes, Route } from 'react-router-dom';
import OrderSummaryScreen from './Components/OrderSummaryScreen';
import RazerpayPlaceholderScreen from './Components/RazerpayPlaceholderScreen';
import OrderStatusScreen from './Components/OrderStatusScreen';
function App() {
  return (
    <div>
      <Routes>
        <Route index element={<OrderSummaryScreen />} />
        <Route path='/paymentPage' element={<RazerpayPlaceholderScreen />} />
        <Route path='/orderConfirmation' element={<OrderStatusScreen />} />
      </Routes>
    </div>
  )
}

export default App
