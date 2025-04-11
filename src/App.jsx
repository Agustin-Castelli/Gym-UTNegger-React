import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'

function App() { 
  const router = createBrowserRouter([
    {
      path:"*",
      element:<p>error</p>
    },
    {
      path:"/login",
      element:<p>login</p>
    },
    {
      path:"/register",
      element:<p>register</p>
    },
    {
      path:"/",
      element:<Dashboard/>
    }

  ])
  return <RouterProvider router={router}/>
}

export default App
