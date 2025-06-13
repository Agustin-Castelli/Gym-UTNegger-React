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
import LoggedOnPage from './components/LoggedOnPage/LoggedOnPage';
import ModifyPass from './components/login/changePass/modifyPass/ModifyPass';
import FormMail from './components/login/changePass/formMail/FormMail';

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
        },
        {
          path: "/loggedOn",
          element: <Protected><LoggedOnPage /></Protected>
        },
        {
          path:"/FormMail",
          element: <FormMail/>
        },
        {
          path: "/modifyPass",
          element: <ModifyPass/>
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
