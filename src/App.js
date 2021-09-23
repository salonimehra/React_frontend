/*
import './App.css';
import Greet from './component/greet';

function App() {
  var country=[{"url":"www.google.com","description":"google"},
        {"url":"www.bing.com","description":"bing"}
        ]
  return (
    <div className="App">
      <Greet name={list}/>
    </div>
  );
}

export default App;
*/

//######################################### REACT DEFAULT APPP ############################################
/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
//########################################### SHOPPING WEBSITE ############################################

import React from 'react';

import './App.css';
import Home from './component/Home';
import {BrowserRouter as Routers, Switch,Route} from 'react-router-dom'
import AddProduct from './component/AddProduct';
import Login from './component/Login';
import AuthService from './services/AuthService';
import ProtectedRoute from './services/ProtectedRoute';



/*https://www.bezkoder.com/react-jwt-auth/
https://www.youtube.com/watch?v=XkVpb_8IPUM */
class App extends React.Component
{
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      currentUser: undefined,
    };
  }
  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
      });
    }
  }
  logOut() {
    AuthService.logout();
  }
  render()
  {
    return (
      <div>
        <Routers>
          <Switch>
            <Route path={["/","/home"]} exact component={Home}/>
            {/* <ProtectedRoute authed={this.state.currentUser} component={AddProduct} path="/add/:id/:quantity"/>*/}
            
            <Route path="/add/:id/:quantity" component={AddProduct}/>
            <Route path="/login" component={Login}/>
          </Switch>
        </Routers>
      </div>
) } }
 export default App;

//############################################# ADD PRODUCTS ################################################
/*
import React, { Component } from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
import ProductsList from './component/ProductsList';
import Product from './component/Product';
import AddProduct from './component/AddProduct';
import { Switch,Route,Link } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/products" className="navbar-brand">
            products
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/products"} className="nav-link">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/products"]} component={ProductsList} />
            <Route exact path="/add" component={AddProduct} />
            <Route path="/products/:id" component={Product} />
          </Switch>
        </div>
      </div>
    );
  }
}


export default App;
*/
//################################################### ADD USERS##########################################
/*
import './App.css';
import Product from './component/Product';
//import UserComponent from './component/UserComponent';

function App() {
  return (
    <div className="App">
     {//<UserComponent/>
      }
     <Product/>
    </div>
  );
}

export default App;
*/