import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App';
import Home from './components/Home/Home';
import About from './components/About/About';
import Servicess from './components/Servicess/Servicess';
import Contact from './components/Contact/Contact';
import DetailsHome from './components/DetailsHome/DetailsHome';
import Errorpage from './components/Errorpage/Errorpage';

const router = createBrowserRouter([
  {
    path: "",
    element: <App></App>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('book.json')
      },
      {
        path: "/*",
        element: <Errorpage></Errorpage>
        
      },
      {
      path:'homs/:homeId',
      element:<DetailsHome></DetailsHome>,
      loader:({params})=>fetch(`book.json/?${params.homeId}`)
     
      },
      {
        path:'About',
        element:<About></About>,
        loader:()=>fetch('book.json')
      },
      {
        path:'Servicess',
        element:<Servicess></Servicess>
      },
      {
        path: 'Contact',
        element:<Contact></Contact>
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
   
  </React.StrictMode>,
)
