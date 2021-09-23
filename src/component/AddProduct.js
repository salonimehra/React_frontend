import React, { Component } from 'react'
import ProductService from '../services/productService'

export default class AddProduct extends Component {
    constructor(props){
        super(props)
        this.state={
            id:this.props.match.params.id,
            quantity:this.props.match.params.quantity,
            productItems:"",
            productList:[]
        }
        
    }
    //lifecycle method to call restapi
    
    componentDidMount() {
      
      ProductService.getProductsInCart(this.state.id,this.state.quantity).then(
        response => {
          //console.log(response.data)
          this.setState({
            productItems: response.data
          });
          console.log(this.state.productItems,"from here");
        },
        error => {
          this.setState({
            productItems:
              (error.response && error.response.data) ||
              error.message ||
              error.toString()
          });
          console.log(error);
        }
      );
      ProductService.getAllProducts().then(
        response => {
          console.log(response.data)
          this.setState({
            productList: response.data
          });
        },
        error => {
          this.setState({
            content:
              (error.response && error.response.data) ||
              error.message ||
              error.toString()
          });
        }
      );
    }

    render() {
        return (
            <div>
                <h1>Add Products</h1>
                <h2>{this.state.id}</h2>
                <h2>{this.state.productItems.toString()}</h2>
                {/*addition here */}
                
 <section id="cart-view">
   <div className="container">
     <div className="row">
       <div className="col-md-12">
         <div className="cart-view-area">
           <div className="cart-view-table">
             <form action="">
               <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th></th>
                        <th></th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        this.state.productList.map(
                          item=>
                      <tr key={item.productId}>
                        <td><a className="remove" href="#"></a></td>
                        <td><a href="#"><img src={item.imgURL} height="150" width="200" alt="img"/></a></td>
                        <td><a className="aa-cart-title" href="#">{item.productName}</a></td>
                        <td>{item.productPrice}</td>
                        <td><input className="aa-cart-quantity" type="number" value={item.productQuantity}/></td>
                        <td>{item.productPrice}</td>
                      </tr>
                        )}

                      </tbody>
                  </table>
                </div>
             </form>
             {/*<!-- Cart Total view -->*/}
             <div className="cart-view-total">
               <h4>Cart Totals</h4>
               <table className="aa-totals-table">
                 <tbody>
                   <tr>
                     <th>Subtotal</th>
                     <td>$450</td>
                   </tr>
                   <tr>
                     <th>Total</th>
                     <td>$450</td>
                   </tr>
                 </tbody>
               </table>
               <a href="#" className="aa-cart-view-btn">Proced to Checkout</a>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
 </section>
 

                {/*additions ends */}
            </div>
        )
    }
}
