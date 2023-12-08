import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Prueba from './Components/Prueba.jsx'
import Mainapp from './App.jsx'
import Fronten from './Components/Fronten.jsx'
import CompImagen from './Components/CompImagen.jsx'
import CovaluFor from './Components/CovaluFor.jsx'


const router = createBrowserRouter(
  [{
    path:"/",
    children:[
     {
      index:true,
      element:<Mainapp/>
     },
     {
      path:"/pruebas",
      element:<Prueba/>
     },{
      path:"front",
      element:<Fronten/>
     } ,
     {
      path:"/img",
      element:<CompImagen/>
     },
     {
      path:"form",
      element:<CovaluFor/>
     }
    ]
  }]
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}></RouterProvider>
  </React.StrictMode>,
)
