import * as React from "react";
import type {RouteObject} from "react-router-dom";
import Dashboard from "../pages/dashboard/dashboard";
import {createBrowserRouter,RouteProps} from "react-router-dom";
import User from "../pages/system/user/user";
import NoMatch from "../404";
import LayoutWrapper from "../components/layout/layout";
import Login from "../login";

let routes: RouteObject[] = [
    {path: "/login", element: <Login/>},
    {
        path: "/",
        element: <LayoutWrapper/>,
        children: [
            {index: true, element: <Dashboard/>},
            {
                path: "/system/user",
                element: <User/>,
            },
        ],
    },
    {path: "*", element: <NoMatch/>}
];

export default createBrowserRouter(routes);