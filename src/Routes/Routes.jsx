import { createBrowserRouter } from "react-router";
import RootLayout from "../Root/RootLayout";
import HomeLayout from '../Root/HomeLayout'
import AllNavbar from "../Components/Navbar/AllNavbar";
import About from "../Page/About/About";
import Dashboard from "../Page/Dashboard/Dashboard";
import DashBoardLayout from "../Root/DashBoardLayout";
import Admin from "../Page/Dashboard/Admin/Admin";
import User from "../Page/Dashboard/User/User";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: HomeLayout
            },
            {
                path: 'navbar'
                , Component: AllNavbar
            },
            {
                path: 'about',
                Component: About
            }
        ]
    },
    {
        path: '/dashboard',
        Component: Dashboard,
        children: [
            {
                index: true,
                Component: DashBoardLayout
            },
            {
                path: '/dashboard/admin',
                Component: Admin
            },
            {
                path: '/dashboard/user',
                Component: User
            }
        ]
    }

]);