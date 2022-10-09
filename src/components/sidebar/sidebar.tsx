import React, {useState} from 'react';
import {Layout, Menu, MenuProps} from "antd";
import {MenuInfo} from 'rc-menu/es/interface';
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


function menuEach(routes: RouteConfig[]): MenuItem[] {
    let menus: MenuItem[] = [];

    routes.forEach((route) => {

        if (route.children) {
            let child = menuEach(route.children);
            let parent = getItem(route.label, route.path, route.icon, child);
            menus.push(parent);
        } else {
            if (route.label) {
                menus.push(getItem(route.label, route.path, route.icon));
            }
        }
    });
    return menus;
}


const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();

    let menusConfig = routes.filter((route) => {
        return route.isMenu;
    })

    let menus: MenuItem[] = [];
    menusConfig.forEach((config) => {
        menus.concat(...menuEach(config.children || []));
    })

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