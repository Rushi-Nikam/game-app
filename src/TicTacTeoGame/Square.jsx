import React from 'react'
const Square =(prop)=>{
    return(
        <div
        onClick={prop.onClick} 
        style={{border:'2px solid black',height:"100px",width:"100%",display:'flex',justifyContent:'center',alignItems:'center',}}
        className="Square">
            <h5>{prop.value}</h5>
        </div>
    )
}
export default Square;
