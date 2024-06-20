import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home";


export const router = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        errorElement: <p>Error page</p>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home'
                ,
                element: <Home></Home>
            }
        ]
    }
])