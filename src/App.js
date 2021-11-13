import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import AllProducts from './Pages/AllProducts/AllProducts';
import AddReview from './Pages/DashBoard/AddReview/AddReview';
import DashBoard from './Pages/DashBoard/DashBoard/DashBoard';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/Home/Shared/NotFoud/NotFound';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Login/Register/Register';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <PrivateRoute path='/addReview'>
            <AddReview />
          </PrivateRoute>
          <PrivateRoute path='/allProducts'>
            <AllProducts />
          </PrivateRoute>
          <PrivateRoute path='/placeOrder/:productId'>
            <PlaceOrder />
          </PrivateRoute>
          <PrivateRoute path='/dashBoard'>
            <DashBoard />
          </PrivateRoute>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/*'>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
