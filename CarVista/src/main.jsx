import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route , RouterProvider,createBrowserRouter,createRoutesFromElements} from 'react-router-dom'
import Home from './pages/Home'
import ReviewPage from './pages/ReviewPage'
import LoginPage from './pages/LoginPage'
import SellingPage from './pages/SellingPage'
import BuyingPage from './pages/BuyingPage'
import AddCar from './pages/AddCar.jsx'
import PaymentPage from './pages/PaymentPage.jsx'


const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="reviews" element={<ReviewPage />} />
      <Route path="buy" element={<BuyingPage />} />
      <Route path="buy/payment" element={<PaymentPage/>} />
      <Route path="sell" element={<SellingPage />} />
      <Route path="sell/addcar" element={<AddCar />} />
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes} />
)
