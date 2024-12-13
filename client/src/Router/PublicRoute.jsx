import App from "../App";

import { createBrowserRouter } from "react-router";
import Signin from "../Pages/Signin";
import Signup from "../Pages/Signup";
import Mycartandlist from "../Pages/Mycartandlist";
import AllCart from "../Pages/AllCart";

let router = createBrowserRouter([
    {
      path: "/",
      element:<App></App>
     
    },
    {path:'/signin'
      ,
      element:<Signin></Signin>
    },
    {path:'/signup'
      ,
      element:<Signup></Signup>
    },
    {path:'/cartlist',
      element:<Mycartandlist></Mycartandlist>,
      loader: () => {
        // Add logic to load required data here
        return fetch('http://localhost:3000/items') 
          .then(response => response.json());
      }
    },
    {
      path:'/allcart',
      element:<AllCart></AllCart>
    }

  ]);

  export default router;