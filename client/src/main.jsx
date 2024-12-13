import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import './index.css'

import {
  RouterProvider,
} from "react-router";
import router from './Router/PublicRoute.jsx';
import Authprovider from './Provider/Authprovider.jsx';
import { CartProvider } from './Provider/CartProvider.jsx';






createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      <CartProvider>
    <Authprovider>

     <RouterProvider router={router} />

    </Authprovider>
      </CartProvider>

  </StrictMode>,
)
