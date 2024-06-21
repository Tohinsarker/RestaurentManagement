import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Order from "../pages/Order";


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
            },{
                path: '/menu',
                element: <Menu></Menu>
            },
            {
                path: '/order',
                element: <Order></Order>
            }
        ]
    }
])