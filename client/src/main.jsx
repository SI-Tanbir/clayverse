import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import './index.css'

import {
  RouterProvider,
} from "react-router";
import router from './Router/PublicRoute.jsx';






createRoot(document.getElementById('root')).render(
  <StrictMode>

     <RouterProvider router={router} />

  </StrictMode>,
)
