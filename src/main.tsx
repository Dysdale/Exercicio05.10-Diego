import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from "./pages/inicio";
import Sobre from "./pages/sobre";
import Contatos from "./pages/contato";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './pages/not-found';
import Tarefas from './pages/tarefas';
import { ChakraProvider } from '@chakra-ui/react'
import Obrabo from './components/Modeloformulario';

const router = createBrowserRouter([
  {path:'/', element: <Home/>, errorElement:<NotFound />},
  {path: '/sobre', element: <Sobre/> },
  {path: '/contato', element: <Contatos/>},
  {path: '/tarefas', element: <Tarefas/>}


  

])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
    <RouterProvider router={router}/>
    </ChakraProvider>
  </React.StrictMode>,
)
