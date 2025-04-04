import { createBrowserRouter, RouterProvider } from 'react-router-dom'

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
      element:<p>dash</p>
    }

  ])
  return <RouterProvider router={router}/>
}

export default App
