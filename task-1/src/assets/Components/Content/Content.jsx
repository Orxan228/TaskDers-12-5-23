import React, { useEffect, useState } from 'react'
import "./Content.css"
import axios from 'axios'
const Content = () => {
const [data, setData]= useState([])
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then(res=>{
            setData(res.data)
        })
    })

  return (
    <>
    <div className="card">
        <h3>Welcome to the Redux toolkit store</h3>
        <div className="card___product">
            <div className="card___product___hero">
                <span>Products</span>
            </div>
            <div className="card___product___vitrine">
                {data.map((item,index)=>{
                    return(
                    <div key={index} className="card___product___vitrine--item">
                        <div className="card___product___vitrine--item--top">
                            <div className="card___product___vitrine--item--top--img">
                                <img src={item.image} alt="" />
                            </div>
                        </div>
                        <div className="card___product___vitrine--item--bottom">
                            <p className='card___product___vitrine--item--bottom--p1'>{item.title}</p>
                            <p className='card___product___vitrine--item--bottom--p2'>{item.price} $</p>
                            <button className='card___product___vitrine--item--bottom--btn'>Add to cart</button>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    </div>
    
    </>
  ) 
}

export default Content