import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/login/Login'

function App() { 
  const router = createBrowserRouter([
    {
      path:"*",
      element:<p>error</p>
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/register",
      element:<p>register</p>
    },
    {
      path:"/",
      element:<p>dash</p>
    }

  ])
  return <RouterProvider router={router}/>
}

export default App
