import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from "react-router-dom"
import Home from './pages/Home'
import Contact from  './pages/contact'
import { RouteLayout } from "./pages/routeLayout"
import ErrorPage from "./pages/ErrorPage"
import Productdetail from "./pages/productdetail"
  const router=createBrowserRouter([
    {
    path:'root',element:<RouteLayout/>,errorElement:<ErrorPage/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {path:'product',  
        element:<Contact/>
      },
      {
        path:'product/:pname',
        element:<Productdetail/>

      },

      {
        path:'product/:pname/product',
        element:<>Test</>
      }
      // {
      //   path:"*",
      //   element:<ErrorPage/
      // }
    ]
    }
    
  ])  



//secondway
// const routeDefinition = createRoutesFromElements(
//   <>
//      <Route path="/" element={<Home />}></Route>
//      <Route path="/product" element={<Contact />}></Route>
//   </>
// )

// const router = createBrowserRouter(routeDefinition)

const App = () => {
  return <RouterProvider router={router} />
}

export default App