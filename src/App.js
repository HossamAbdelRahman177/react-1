import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Porotfolio from './Porotfolio/Porotfolio';
import Contact from './Components/Contact/Contact';
import Notfound from './Components/Notfound/Notfound';
let routers = createBrowserRouter([
  {path:'*', element:<Notfound/>},
{path:'',element:<Layout/>, children:[
  {index:true, element:<Home/>},
  {path:'about', element:<About/>},
  {path:'porotfolio', element:<Porotfolio/>},
  {path:'contact', element:<Contact/>},
  
]}
])


export default function App() {
  return <>
    <RouterProvider router={routers}></RouterProvider>

  </>



}


