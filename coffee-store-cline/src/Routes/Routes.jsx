import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import AddCoffee from "../Components/AddCoffee";
import UpdateCoffee from "../Components/UpdateCoffee";
import Singin from "../Components/Singin";
import Singup from "../Components/Singup";
import AllUsers from "../Components/AllUsers";




const router = createBrowserRouter([

    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://coffee-store-server-nur-mps-projects.vercel.app/coffee')
            },
            {
                path: '/addcoffee',
                element: <AddCoffee></AddCoffee>,
            },
            {
                path: '/updatecoffee/:id',
                element: <UpdateCoffee></UpdateCoffee>,
                loader: ({ params }) => fetch(`https://coffee-store-server-nur-mps-projects.vercel.app/coffee/${params.id}`)
            },
            {
                path: '/singin',
                element: <Singin></Singin>,
            },
            {
                path: '/singup',
                element: <Singup></Singup>
            },
            {
                path: '/allusers',
                element: <AllUsers></AllUsers>,
                loader: () => fetch("https://coffee-store-server-nur-mps-projects.vercel.app/users")
            },

        ]
    },
]);

export default router