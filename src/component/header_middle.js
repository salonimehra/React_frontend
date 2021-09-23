import React, { Component } from 'react'
import { withRouter } from 'react-router';


class header_middle extends Component {
  constructor(props){
    //compulsory to make super 
    super(props);
    this.state={
        
    }
    this.login=this.login.bind(this)
}

login(){
    console.log(this.props.history,"HISTORY");
    this.props.history.push("/login");
    console.log("LOGIN PAGE");
}
  render() {
    return(
      <div className="header-middle">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div className="logo pull-left item">
                  <a href="#"><h1><span>Shopping</span>-WEBSITE</h1></a>
                </div>
                <div className="btn-group pull-right">
                  <div className="btn-group">
                    <button type="button" className="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
                      USA
                      <span className="caret"></span>
                    </button>
                    <ul className="dropdown-menu">
                      <li><a href="#">Canada</a></li>
                      <li><a href="#">UK</a></li>
                    </ul>
                  </div>
                  
                  <div className="btn-group">
                    <button type="button" className="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
                      DOLLAR
                      <span className="caret"></span>
                    </button>
                    <ul className="dropdown-menu">
                      <li><a href="#">Canadian Dollar</a></li>
                      <li><a href="#">Pound</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-8">
                <div className="shop-menu pull-right">
                  <ul className="nav navbar-nav">
                    <li><a href="#"><i className="fa fa-user"></i> Account</a></li>
                    <li><a href="#"><i className="fa fa-star"></i> Wishlist</a></li>
                    <li><a href="#"><i className="fa fa-crosshairs"></i> Checkout</a></li>
                    <li><a href="/viewCart"><i className="fa fa-shopping-cart"></i> Cart</a></li>
                    <li><a href="#" onClick={()=>this.login()} ><i className="fa fa-lock"></i> Login</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      
  );
  }
}
export default withRouter(header_middle)