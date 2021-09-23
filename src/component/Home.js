import React, { Component } from 'react'
import Header_top from './header_top';
import Header_middle from './header_middle'
import Header_bottom from './header_bottom';
import Slider from './Slider';
import Category from './Category';

import CategoryTab from './CategoryTab';
import Product from './Product';
import RecommendedItems from './RecommendedItem';
import Footer from './Footer';
import TabContent from './TabContent';
import Brands_products from './Brands_products';
import AuthService from '../services/AuthService';


export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: AuthService.getCurrentUser()
    };
  }
  
    render() {
      const { currentUser } = this.state;
        return (
            
      <div>
          <h3>
            <strong>hi</strong> Profile
          </h3>
      <header id="header"> 
        <Header_top/>
          
          <Header_middle/>
          
            <Header_bottom/>
      </header>
      
     <Slider/>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              {// left sidebar
               }

              <div className="left-sidebar">
                <h2>Category</h2>
                  <Category/>
                
                <Brands_products/>

                <div className="shipping text-center">
                  <img src="assets/images/home/shipping.jpg" alt="" />
                </div>
              
              </div>
            </div>
            
            <div className="col-sm-9 padding-right">
              <div className="features_items">
                <h2 className="title text-center">Features Items</h2>
                {//copy code img1 
                }
                
                <Product/>
    
                {//end copy img 1 
                }
                
                
              </div>
              
              <div className="category-tab">
                 <CategoryTab/>

                <TabContent/>
              </div>
              
              <div className="recommended_items">
                <h2 className="title text-center">recommended items</h2>
                <RecommendedItems/>
              </div>
              
            </div>
          </div>
        </div>
      </section>
      
      <Footer/>
    
    </div>
    
        )
    }
}
