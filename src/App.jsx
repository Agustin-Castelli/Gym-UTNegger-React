import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Dashboard from './components/dashboard/Dashboard'
import Layout from './components/layout/layout';
import Login from './components/login/Login'
import Contact from './components/contact/Contact';
import ShiftsPage from "./components/shiftsPage/ShiftsPage"
import { ModeContextProvider } from './context/ModeContext';
import Protected from './components/protected/Protected';
import Register from './components/register/Register';
import { UserContextProvider } from './context/UserContext';

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
        {
          path: "/login",
          element: <Login />,

        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/shifts",
          element: <Protected><ShiftsPage /></Protected>
        }
      ]
    },

    {
      path: "/",
      element: <p>dash</p>
    }


  ])

  return  <UserContextProvider> <ModeContextProvider>
    <RouterProvider router={router} />
  </ModeContextProvider> </UserContextProvider>
}

export default App
