import App from "../App";

import { createBrowserRouter } from "react-router";
import Signin from "../Pages/Signin";
import Signup from "../Pages/Signup";

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
    }
  ]);

  export default router;