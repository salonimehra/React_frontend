import React from 'react'
import { withRouter } from 'react-router';
import AuthService from '../services/AuthService';
import ProductService from '../services/productService'


class Product extends React.Component{

    //intialise state
    constructor(props){
        //compulsory to make super 
        super(props);
        this.state={
            productItems:[],
            currentUser:undefined
        }
        this.addProduct=this.addProduct.bind(this)
    }

    //lifecycle method to call restapi
    componentDidMount() {
        ProductService.getPublicContent().then(
          response => {
            this.setState({
              productItems: response.data
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

    addProduct(id,quantity){
        const user=AuthService.getCurrentUser();
        
        if(user){
            this.setState({
                currentUser:user
            })
        }

        if(this.state.currentUser){
        this.props.history.push(`/add/${id}/${quantity}`);
        console.log("ADD PRODUCT");}
    }
    
    //return html 
    render(){
        return(
            <div>
                <h1 className="text-centre">Products List</h1>
                {/*
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <td>Product Id</td>
                                <td>Product Name</td>
                                <td>Product Description</td>
                                <td>Product Brand</td>
                                <td>Product Price</td>
                                <td>Product Image URL</td>
                            </tr>
                        </thead>
                        <tbody>
                           { 
                            this.state.productItems.map(
                                    products =>
                                    <tr key={products.id}>
                                        <td>{products.name} </td>
                                        <td>{products.description} </td>
                                        <td>{products.brand} </td>
                                        <td>{products.price} </td>
                                        <td>{products.imgURL} </td>
                                    </tr>
                            ) 
                           }
                        </tbody> 
                        </table>
                        */}

                        {
                        this.state.productItems.map(
                            products=>
                            <React.Fragment key={products.id}>
                        <div className="col-sm-4">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                          <div className="productinfo text-center">
                            <img src={products.imgURL} alt="" height="250" width="200" />
                            <h2><span className="rupee">Rs.</span>{products.price}</h2>
                            <p>{products.description} </p>
                            <a href="#" className="btn btn-default add-to-cart" onClick={()=>this.addProduct(products.id,1)}><i className="fa fa-shopping-cart"></i>Add to cart</a>
                          </div>
                          <div className="product-overlay">
                            <div className="overlay-content">
                            <h2><span className="rupee">Rs.</span>{products.price}</h2>
                            <p>{products.description} </p>
                            <button className="btn btn-default add-to-cart" onClick={()=>this.addProduct(products.id,1)}><i className="fa fa-shopping-cart"></i>Add to cart</button>
                            </div>
                          </div>
                      </div>
                      <div className="choose">
                        <ul className="nav nav-pills nav-justified">
                          <li ><a href="#"><i className="fa fa-plus-square"></i>Add to wishlist</a></li>
                          <li ><a href="#"><i className="fa fa-plus-square"></i>Add to compare</a></li>
                        </ul>
                      </div>
                    </div>
                    
                  </div>

                        </React.Fragment> 
                         ) }
            </div>
            
        )
    }
}

export default withRouter(Product);