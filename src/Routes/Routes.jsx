import { createBrowserRouter } from "react-router";
import RootLayout from "../Root/RootLayout";
import HomeLayout from '../Root/HomeLayout'
import AllNavbar from "../Components/Navbar/AllNavbar";
import About from "../Page/About/About";
import Dashboard from "../Page/Dashboard/Dashboard";
import DashBoardLayout from "../Root/DashBoardLayout";

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
        path: 'dashboard',
        Component: Dashboard,
        children: [
            {
                path: '/dashboard',
                Component: DashBoardLayout
            }
        ]
    }

]);