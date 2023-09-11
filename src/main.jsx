import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Documentos from './routes/Documentos/index.jsx'
import Error from './routes/Error/index.jsx'
import FotoDaBike from './routes/FotoDaBike/index.jsx'
import FotoPessoal from './routes/FotoPessoal/index.jsx'
import FotoRG from './routes/FotoRG/index.jsx'
import FotoRosto from './routes/FotoRosto/index.jsx'
import Modificacao from './routes/Modificações/index.jsx'
import NotaFiscal from './routes/NotaFiscal/index.jsx'
import ParteFrontalBike from './routes/ParteFrontalBike/index.jsx'
import ParteTraseiraBike from './routes/ParteTraseiraBike/index.jsx'
import ValidarBike from './routes/ValidarBike/index.jsx'
import Home from './routes/Home/index.jsx'
import Integrantes from './routes/Integrantes/index.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children:[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/Documentos",
        element: <Documentos/>,
      },
      {
        path: "/FotoDaBike",
        element: <FotoDaBike/>,
      },
      {
        path: "/FotoPessoal",
        element: <FotoPessoal/>,
      },
      {
        path: "/FotoRG",
        element: <FotoRG/>,
      },
      {
        path: "/FotoRosto",
        element: <FotoRosto/>,
      },
      {
        path: "/Modificações",
        element: <Modificacao/>,
      },
      {
        path: "/NotaFiscal",
        element: <NotaFiscal/>,
      },
      {
        path: "/ParteFrontal",
        element: <ParteFrontalBike/>,
      },
      {
        path: "/ParteTraseira",
        element: <ParteTraseiraBike/>,
      },
      {
        path: "/Validar",
        element: <ValidarBike/>,
      },
      {
        path: "/Integrantes",
        element: <Integrantes/>,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)