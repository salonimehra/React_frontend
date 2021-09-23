import React from 'react'

class Slider extends React.Component{

    //intialise state
    constructor(props){
        //compulsory to make super 
        super(props);
        this.state={
            imgs:[]
        }
    }

    //lifecycle method to call restapi
    componentDidMount(){
        /*UserService.getUsers().then((response,error)=>{
            if(response)
            this.setState({users:response.data})
            else
            console.log(error);
        })*/
    }

    //return html 
    render(){
        return(
            <section id="slider">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div id="slider-carousel" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                      <li data-target="#slider-carousel" data-slide-to="0" className="active"></li>
                      <li data-target="#slider-carousel" data-slide-to="1"></li>
                      <li data-target="#slider-carousel" data-slide-to="2"></li>
                    </ol>
                    
                    <div className="carousel-inner">
                      {/* image 1 of slider */}
                      <div className="item active">
                        <div className="col-sm-6">
                          <h1><span>SHOPPING</span>-WEBSITE</h1>
                          <h2>Sale upto 90%</h2>
                          <p>Be Trending Be Fashionable. </p>
                          <button type="button" className="btn btn-default get">Get it now</button>
                        </div>
                        <div className="col-sm-6">
                          <img src="assets/images/home/girl1.jpg" className="girl img-responsive" alt="" />
                          <img src="assets/images/home/pricing.png"  className="pricing" alt="" />
                        </div>
                      </div>
                      {/* image 2 of slider */}
                      <div className="item">
                        <div className="col-sm-6">
                          <h1><span>THE</span>-SALE</h1>
                          <h2>Stand The Chance To Win Rewards</h2>
                          <p>Buy One Get One Free </p>
                          <button type="button" className="btn btn-default get">Get it now</button>
                        </div>
                        <div className="col-sm-6">
                          <img src="assets/images/home/girl2.jpg" className="girl img-responsive" alt="" />
                          <img src="assets/images/home/pricing.png"  className="pricing" alt="" />
                        </div>
                      </div>
                      {/* image 3 of slider */}
                      <div className="item">
                        <div className="col-sm-6">
                          <h1><span>THE</span>-SALE</h1>
                          <h2>Hurry Up! </h2>
                          <p>Sale Upto 90% and Cash Back! upto 100% </p>
                          <button type="button" className="btn btn-default get">Get it now !</button>
                        </div>
                      <div className="col-sm-6">
                          <img src="assets/images/home/girl3.jpg" className="girl img-responsive" alt="" />
                          <img src="assets/images/home/pricing.png" className="pricing" alt="" />
                        </div>
                      </div>
                      
                    </div>
                    
                    <a href="#slider-carousel" className="left control-carousel hidden-xs" data-slide="prev">
                      <i className="fa fa-angle-left"></i>
                    </a>
                    <a href="#slider-carousel" className="right control-carousel hidden-xs" data-slide="next">
                      <i className="fa fa-angle-right"></i>
                    </a>
                  </div>
                  
                </div>
              </div>
            </div>
          </section>
          
        )
    }
}

export default Slider;