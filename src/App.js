import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import AdminPanel from './components/AdminPanel/AdminPanel';
import ManageProduct from './components/ManageProduct/ManageProduct';
import AddProduct from './components/AddProduct/AddProduct';
import EditProduct from './components/EditProduct/EditProduct';
import OrderedItems from './components/OrderedItems/OrderedItems';
import OrderCheckOut from './components/OrderCheckOut/OrderCheckOut';
import LogIn from './components/LogIn/LogIn';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <UserContext.Provider value={ [loggedInUser, setLoggedInUser] }>
      <Router>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home/>
            </Route>
            <PrivateRoute path= "/orders">
                <OrderedItems />
              </PrivateRoute>
            <PrivateRoute path="/admin">
              <AdminPanel/>
            </PrivateRoute>
            <PrivateRoute path="/manageProduct">
              <ManageProduct/>
            </PrivateRoute>
            <PrivateRoute path="/addProduct">
              <AddProduct/>
            </PrivateRoute>
            <Route path="/editProduct">
              <EditProduct/>
            </Route>
            <PrivateRoute path="/shopping/:id">
              <OrderCheckOut></OrderCheckOut>
            </PrivateRoute>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
