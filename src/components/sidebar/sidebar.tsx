import React, {useState} from 'react';
import {Layout, Menu, MenuProps} from "antd";
import { MenuInfo } from 'rc-menu/es/interface';
import routes, {RouteConfig} from "../../router/router";
import {useNavigate} from "react-router-dom";

const {Sider} = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key | undefined,
    icon?: React.ReactNode,
    children?: MenuItem[] | null,
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

function menuEach(menus: MenuItem[], routes: RouteConfig[]): MenuItem[] {
    if (menus == null) {
        menus = [];
    }
    routes.forEach((route) => {
        console.log(route)
        if (route.children) {
            let children = menuEach(menus, route.children);
            menus.concat(children);
        } else {
            if (route.label) {
                menus.push(getItem(route.label, route.key, route.icon));
            }
        }
    });
    return menus;
}

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();

    let menus = menuEach([], routes);

    const handleClick = (e: MenuInfo) => {
        navigate(e.key);
    }

    return (
        <Sider id="wrapper-sider" collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
            <div className="logo"/>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={menus} onClick={handleClick}/>
        </Sider>
    );
};

export default Sidebar;