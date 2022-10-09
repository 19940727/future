import * as React from "react";
import type {RouteObject} from "react-router-dom";

import {
    DashboardOutlined,
    UserOutlined,
} from '@ant-design/icons';

import Dashboard from "../pages/dashboard/dashboard";
import User from "../pages/system/user/user";
import NoMatch from "../404";
import LayoutWrapper from "../components/layout/layout";
import Login from "../login";

export declare type RouteConfig = RouteObject & {
    key?: React.Key;
    label?: React.ReactNode;
    icon?: React.ReactNode;
    children?: RouteConfig[];
}

let routes: RouteConfig[] = [
    {path: "/login", element: <Login/>},
    {
        path: "/",
        element: <LayoutWrapper/>,
        children: [
            {index: true, element: <Dashboard/>, key: "/", label: "控制台", icon: <DashboardOutlined/>},
            {
                path: "/system/user",
                element: <User/>,
                icon: <UserOutlined/>,
                label: "用户列表",
                key: "/system/user",
            },
        ],
    },
    {path: "*", element: <NoMatch/>}
];

export default routes;