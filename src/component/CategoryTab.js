import React from 'react'
const CategoryTab=()=>{
    return(
    <div className="col-sm-12">
                    <ul className="nav nav-tabs">
                      <li className="active"><a href="#tshirt" data-toggle="tab">T-Shirt</a></li>
                      <li><a href="#blazers" data-toggle="tab">Blazers</a></li>
                      <li><a href="#sunglass" data-toggle="tab">Sunglass</a></li>
                      <li><a href="#kids" data-toggle="tab">Kids</a></li>
                      <li><a href="#poloshirt" data-toggle="tab">Polo shirt</a></li>
                    </ul>
                  </div>
    );
}
 export default CategoryTab;