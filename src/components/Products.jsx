import React from 'react'

const style = {
    backgroundColor:"white",
    height:"290px",
    width:"250px",
    borderRadius:"12px",
    // display:
    margin:"20px 0px 20px 20px",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    boxShadow:"5px 5px 15px #A1A1A1",
}
export default function Products(prop){
    return(
        <div className= "product-component" style={style}>
            {prop.children}
        </div>
    )
}