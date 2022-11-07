import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Pages/Login/Login";
import Register from "../components/Pages/Register/Register";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>,
        children: [
            {
                path: '/', element: <div>Sohel Rana</div>
            },
            {
                path: '/login', element: <Login></Login>
            },
            {
                path: '/register', element: <Register></Register>
            }
        ]
    }


])
