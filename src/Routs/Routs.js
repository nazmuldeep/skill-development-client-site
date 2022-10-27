import { createBrowserRouter } from "react-router-dom";

import AboutUs from "../Pages/AboutUs/AboutUs";

import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Courses from "../Pages/Courses/Courses";
import Blog from "../Pages/Blog/Blog";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Apply from "../Pages/Apply/Apply";
import SingleCourse from "../Sharepage/SingleCourse/SingleCourse";
import FAQ from "../Pages/FAQ/FAQ";
import CheckOut from "../Sharepage/CheckOut/CheckOut";
import PrivateRoute from "./PrivateRoute";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: async () => {
                    return fetch('https://skill-development-courses-server-site.vercel.app/courses');
                },
                element: <Home></Home>
            },
            {
                path: '/home',
                loader: async () => {
                    return fetch('https://skill-development-courses-server-site.vercel.app/courses');
                },
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/singlecourse/:id',
                loader: ({ params }) => fetch(`https://skill-development-courses-server-site.vercel.app/courses/${params.id}`),
                element: <SingleCourse></SingleCourse>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/aboutUs',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/contact',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/apply',
                element: <Apply></Apply>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({ params }) => fetch(`https://skill-development-courses-server-site.vercel.app/courses/${params.id}`),
            },
        ]

    }
])