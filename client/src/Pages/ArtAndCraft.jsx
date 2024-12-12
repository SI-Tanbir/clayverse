import React, { useEffect, useState } from "react";

const ArtAndCraft = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/items")
      .then((res) => res.json())
      .then((d) => setData(d));
  }, []);
  return (
    <div className="grid grid-cols-3 place-items-center mt-4">
      {data.map((r) => (
        <div key={r._id} >


          <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
              <img
                src={r.image}
                alt={r.item_name}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{r.item_name}</h2>
              <p>{r.short_description}</p>
              <div className="card-actions justify-end">
                <button className="btn bg-red-500">add to cart</button>
                <button className="btn btn-primary">More details</button>
             
              </div>
            </div>
          </div>



        </div>
      ))}
    </div>
  );
};

export default ArtAndCraft;
