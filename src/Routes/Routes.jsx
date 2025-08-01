import { createBrowserRouter } from "react-router";
import RootLayout from "../Root/RootLayout";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                path: '/about',
                element: <div>About Page</div>
            }
        ]
    },
]);