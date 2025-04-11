import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import Layout from './components/layout/layout';

function App() { 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}/>
}

export default App
