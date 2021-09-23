import React from 'react'
function greet(props){
    const final=[];
    
    for(let prop in props.name){
        final.push(
        <li key={prop}><a href="www.google.com">{props.name[prop].description}</a> </li>
        )
    }
    return(<h1>{final}</h1>)
}
export default greet;