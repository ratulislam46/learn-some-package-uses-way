import { createBrowserRouter } from "react-router";
import RootLayout from "../Root/RootLayout";
import AllNavbar from "../Components/Navbar/AllNavbar";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout
    },
    {
        path: '/about',
        element: <div>About Page</div>
    },
    {
        path:'/navbar',
        Component: AllNavbar
    }
]);