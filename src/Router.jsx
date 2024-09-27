import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing/Landing'

import Payment from './pages/Payment/Payment';
import Orders from './pages/Orders/Orders';
import Cart from './pages/Cart/Cart'
import Result from './pages/Results/Results';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Auth from './pages/Auth/Auth';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
function Routing() {
  const stripePromise = loadStripe(
    "pk_test_51Q2eaIGfDzJfR1vITJ0JHTNAA4GRDxsN0gfa7iLMAcDi7vV9hi2Wsg42dGIAhMz8GjV4O2FyKqfrShZ3LC5LIkrC00WEh6IWlZ"
  );
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/payments"
          element={
            <ProtectedRoute
              msg={"Please login to proceed"}
              redirect={"/payments"}>

            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
            </ProtectedRoute>
          }
        />

        <Route path="/orders" element={
          <ProtectedRoute
            msg={"You must be logged in to see your orders"}
            redirect={"/payments"}>
            
            <Orders />
          </ProtectedRoute>}/>
        
        <Route path="/category/:categoryName" element={<Result />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing;