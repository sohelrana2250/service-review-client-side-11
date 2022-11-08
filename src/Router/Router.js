import { createBrowserRouter } from "react-router-dom";
import AllDetails from "../components/Home/AllDetails/AllDetails";
import Service from "../components/Home/Service/Service";
import ServiceDetails from "../components/Home/ServiceDetails/ServiceDetails";
import Login from "../components/Pages/Login/Login";
import Register from "../components/Pages/Register/Register";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>,
        children: [
            {
                path: '/', element: <Service></Service>
            },
            {
                path: '/login', element: <Login></Login>
            },
            {
                path: '/register', element: <Register></Register>
            },
            {
                path: '/AllDetails', element: <AllDetails></AllDetails>
            },
            {
                path: '/allDeatis/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: (props) => { return fetch(`http://localhost:5008/serviceDetails/${props.params.id}`) }
            }
        ]
    }


])
