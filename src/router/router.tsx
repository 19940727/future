import * as React from "react";
import type {RouteObject} from "react-router-dom";

import {
    DashboardOutlined,
    SettingOutlined,
    UserOutlined,
    MenuOutlined,
} from '@ant-design/icons';

import Dashboard from "../pages/dashboard/dashboard";
import User from "../pages/system/user/user";
import NoMatch from "../404";
import LayoutWrapper from "../components/layout/layout";
import Login from "../login";
import Dept from "../pages/system/dept/dept";
import Job from "../pages/system/job/job";
import Role from "../pages/system/role/role";
import Menu from "../pages/system/menu/menu";

export declare type RouteConfig = RouteObject & {
    isMenu?: boolean;
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
        isMenu: true,
        children: [
            {
                index: true,
                element: <Dashboard/>,
                key: "/",
                label: "控制台",
                icon: <DashboardOutlined/>
            },
            {
                path: "/system",
                element: <User/>,
                icon: <SettingOutlined/>,
                label: "系统管理",
                children: [
                    {
                        path: "/system/user",
                        element: <User/>,
                        icon: <UserOutlined/>,
                        label: "用户管理",
                    },
                    {
                        path: "/system/dept",
                        element: <Dept/>,
                        icon: <UserOutlined/>,
                        label: "部门管理",
                    },
                    {
                        path: "/system/job",
                        element: <Job/>,
                        icon: <UserOutlined/>,
                        label: "岗位管理",
                    },
                    {
                        path: "/system/role",
                        element: <Role/>,
                        icon: <UserOutlined/>,
                        label: "角色管理",
                    },
                    {
                        path: "/system/menu",
                        element: <Menu/>,
                        icon: <MenuOutlined />,
                        label: "菜单管理",
                    },
                ]
            },
        ],
    },
    {path: "*", element: <NoMatch/>}
];

export default routes;
