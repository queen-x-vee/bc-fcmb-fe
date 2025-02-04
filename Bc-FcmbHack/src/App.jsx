import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import AuthScreen from './screens/Auth.jsx'

import HomeScreen from './screens/HomeScreen.jsx'
import Budget from "./screens/Budget.jsx"
import FinanceBoard from './screens/FinanceDashboard.jsx'
import ProfileScreen from './screens/Profile.jsx'


const router = createBrowserRouter([
    
    {
      path: "/auth",
      element: <AuthScreen /> ,
    },

    {
      path: "/",
      element: <HomeScreen />,
    },
    {
      path: "/budget",
      element:<Budget/>
    },
    
    {
      path: "/profile",
      element:<ProfileScreen/>
    },

    {
      path: "/financeBoard",
      element:<FinanceBoard/>
    }

])


export default router
