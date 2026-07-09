import { Routes, Route} from 'react-router'
import {HomePage} from './pages/HomePage.jsx'
import { CheckoutPage } from './pages/CheckoutPage.jsx'
import { OrdersPage } from './pages/OrdersPage.jsx'
import { TrackingPages } from './pages/TrackingPages.jsx'
import { Error404 } from './pages/Error404.jsx'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="tracking" element={<TrackingPages />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  )
}

export default App
