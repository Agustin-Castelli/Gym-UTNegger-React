import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Dashboard from './components/dashboard/Dashboard'
import Layout from './components/layout/layout';
import Login from './components/login/Login'
import Contact from './components/contact/Contact';
import ShiftsPage from "./components/shiftsPage/ShiftsPage"
import { ModeContextProvider } from './context/ModeContext';
import Protected from './components/protected/Protected';
import Register from './components/register/Register';
import { UserContextProvider } from './context/userContext';
import LoggedOnPage from './components/LoggedOnPage/LoggedOnPage';
import ModifyPass from './components/login/changePass/modifyPass/ModifyPass';
import FormMail from './components/login/changePass/formMail/FormMail';
import ProtectedTrainer from './components/protected/protectedTrainer';
import NewSession from './components/newSession/NewSession';
import CancelSession from './components/CancelSession/CancelSession';
import ViewRoutines from './components/viewRoutines/ViewRoutines';
import ProtectedAdmin from './components/protected/ProtectedAdmin';
import RegisterAdmin from './components/registerAdmin/RegisterAdmin';
import RegisterTrainer from './components/registerTrainer/RegisterTrainer';
import DisableUser from './components/disableUser/DisableUser';
import RestoreUser from './components/restoreUser/RestoreUser';
import SobreNosotros from './components/SobreNosotros/sobreNosotros.jsx';
import UpdateUser from './components/updateUser/UpdateUser.jsx';
import UpdateTrainer from './components/updateTrainer/UpdateTrainer.jsx';
import Clases from './components/clases/clases.jsx';


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
          path: "/FormMail",
          element: <FormMail />
        },
        {
          path: "/modifyPass",
          element: <ModifyPass />
        },
        {
          path: "/NewSession",
          element: <ProtectedTrainer><NewSession /></ProtectedTrainer>
        },
        {
          path: "/CancelSession",
          element: <ProtectedTrainer><CancelSession /></ProtectedTrainer>
        },
        {
          path: "/viewRoutines",
          element: <ProtectedTrainer><ViewRoutines /></ProtectedTrainer>
        },
        {
          path: "/registerAdmin",
          element: <ProtectedAdmin><RegisterAdmin /></ProtectedAdmin>
        },
        {
          path: "/registerTrainer",
          element: <ProtectedAdmin><RegisterTrainer /></ProtectedAdmin>
        },
        {
          path: "/disableUser",
          element: <ProtectedAdmin><DisableUser /></ProtectedAdmin>
        },
        {
          path: "/restoreUser",
          element: <ProtectedAdmin><RestoreUser /></ProtectedAdmin>
        },
        {

          path: "/sobre-nosotros",
          element: <SobreNosotros />
        },
        {
          path: "/actualizar-cliente",
          element: <UpdateUser/>
        },
        {
          path:"/actualizar-entrenador",
          element:<ProtectedTrainer><UpdateTrainer/></ProtectedTrainer>
        },
        {
          path:"/clases",
          element:<Clases/>
        }



      ]
    },

    {
      path: "/",
      element: <p>dash</p>
    }


  ])

  return <UserContextProvider> <ModeContextProvider>
    <RouterProvider router={router} />
  </ModeContextProvider> </UserContextProvider>
}

export default App
