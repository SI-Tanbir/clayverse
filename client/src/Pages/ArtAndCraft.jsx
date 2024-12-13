import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../Provider/CartProvider";

const ArtAndCraft = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/items")
      .then((res) => res.json())
      .then((d) => setData(d));
  }, []);

  // const handlecart=(id,name,price)=>{
  //   console.log('click',id,name,price)
  // }

  const { addToCart } = useContext(CartContext);


  return (
    <div className="grid grid-cols-3 gap-5 place-items-center mt-4">
      {data.map((r) => (
        <div key={r._id} >


          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img
              className="w-full object-cover"
                src={r.image}
                alt={r.item_name}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{r.item_name}</h2>
              <p>{r.short_description}</p>
              <div className="card-actions justify-between">
                <button onClick={()=>addToCart(r)} className="btn btn-accent">add to cart</button>
                <button className="btn btn-outline">More details</button>
             
              </div>
            </div>
          </div>



        </div>
      ))}
    </div>
  );
};

export default ArtAndCraft;
