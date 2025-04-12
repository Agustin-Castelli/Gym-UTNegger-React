import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Dashboard from './components/dashboard/Dashboard'
import Layout from './components/layout/layout';
import Login from './components/login/Login'


function App() { 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        }]},
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
