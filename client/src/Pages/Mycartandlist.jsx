
import React from 'react'
import { useLoaderData } from 'react-router'

const Mycartandlist = () => {
    const data=useLoaderData()

  return (
    <div>


<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Item name</th>
        <th>Rating</th>
        <th>Description</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

      

    {
        data.map(res=> 
        
            
            <tr key={res._id} className="bg-base-200">
        <th>{res.item_name}</th>
        <td>{res.rating}</td>
        <td>{res.short_description}</td>
        <td>{res.price}</td>
      </tr>
            
            
          



        )
    }
      
     
     
    </tbody>
  </table>
</div>





    </div>
  )
}

export default Mycartandlist