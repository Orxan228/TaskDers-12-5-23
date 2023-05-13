import React from 'react'
import './CardCon.css'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../../../../Store/cardSlice'
const CardCon = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.cart)   
    const   handleRemove = (productId)=>{
        dispatch(remove(productId))
    }
  return (  
    <div className="cardContent">
        <div className="cardContent___wrapper">
            <div className="cardContent___wrapper___hero">
                <h2>Items in card:</h2>
            </div>
            <div className="cardContent___wrapper___vitrine">
                {
                    products.map((product,index)=>{
                        return(
                            <>
                            <div  key={index} className="cardContent___wrapper___vitrine--item">
                            <div className="cardContent___wrapper___vitrine--item--top">
                                <div className="cardContent___wrapper___vitrine--item--top--img">
                                    <img src={product.image} alt="" />
                                </div>
                            </div>
                            <div className="cardContent___wrapper___vitrine--item--bottom">
                                <p className='cardContent___wrapper___vitrine--item--bottom--p1'>{product.title}</p>
                                <p className='cardContent___wrapper___vitrine--item--bottom--p2'>{product.price} $</p>
                                <button onClick={() => handleRemove(product.id)} className='cardContent___wrapper___vitrine--item--bottom--btn'>Delete item</button>
                            </div>
                         </div> 
                            </>
                        )

                    })
                }               
            </div>
        </div>
    </div>
  )
}

export default CardCon
