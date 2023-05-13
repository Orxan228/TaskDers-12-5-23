import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../../../Store/cardSlice";
import "./Content.css";
import axios from "axios";
const Content = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm]= useState("")
  
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
        const newData = res.data.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()))
      setData(newData);
    });
  }, {searchTerm});

  const handleAdd = (item) => {
    dispatch(add(item));
  };

//   const [filteredVitrine, setFilteredMen] = useState(data)
//   const filteredByMen = men =>
//     {
//     setFilteredMen(
//         data.filter(item=>{
//             return item.category == "men's clothing"
//         })   
//     )
//     }
  return (
    <>
      <div className="card">
        <h3>Welcome to the Redux toolkit store</h3>
        <div className="card___product">
          <div className="card___product___hero">
            <span>Products</span>
          </div>
          <div className="card___product___search">
            <form className="search" action="#">
              <input type="text" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
              <ul>
                {data.map((item)=>(
                    <li key={item.id}>
                        {item.title} - {item.id}
                    </li>
                ))}
              </ul>
            </form>
            <div className="filter">
              <button /*onClick={filteredByMen}*/>Men's Clothing</button>
              <button>Women's Clothing</button>
              <button>Jewelery</button>
              <button>Electronics</button>
            </div>
          </div>
          <div className="card___product___vitrine">
            {data.map((item, index) => {
              return (
                <div key={index} className="card___product___vitrine--item">
                  <div className="card___product___vitrine--item--top">
                    <div className="card___product___vitrine--item--top--img">
                      <img src={item.image} alt="" />
                    </div>
                  </div>
                  <div className="card___product___vitrine--item--bottom">
                    <p className="card___product___vitrine--item--bottom--p1">
                      {item.title}
                    </p>
                    <p className="card___product___vitrine--item--bottom--p2">
                      {item.price} $
                    </p>
                    <button
                      className="card___product___vitrine--item--bottom--btn"
                      onClick={() => handleAdd(item)}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
