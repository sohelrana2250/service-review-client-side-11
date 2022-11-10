import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Error from "../components/ErrorPage/Error";
import AddServices from "../components/Home/AddServices/AddServices";
import AllDetails from "../components/Home/AllDetails/AllDetails";
import Review from "../components/Home/Review/Review";
import ReviewUpdate from "../components/Home/ReviewUpdate/ReviewUpdate";
import Service from "../components/Home/Service/Service";
import ServiceDetails from "../components/Home/ServiceDetails/ServiceDetails";
import Login from "../components/Pages/Login/Login";
import Register from "../components/Pages/Register/Register";
import Main from "../Layout/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
                element: <PrivateRoute> <ServiceDetails></ServiceDetails></PrivateRoute>,
                loader: (props) => { return fetch(`https://b6a11-service-review-server-side-two.vercel.app/serviceDetails/${props.params.id}`) }
            },
            {
                path: '/review', element: <PrivateRoute><Review></Review></PrivateRoute>
            },
            {
                path: '/reviewUpdate/:id',
                element: <ReviewUpdate></ReviewUpdate>,
                loader: (props) => { return fetch(`https://b6a11-service-review-server-side-two.vercel.app/updateReview/${props.params.id}`) }

            },
            {
                path: '/addServices',
                element: <AddServices></AddServices>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    },
    {
        path: '*', element: <Error></Error>
    }


])
