import {Breadcrumb, Layout} from 'antd';
import React from 'react';
import {Outlet} from "react-router-dom";
import Sidebar from "../sidebar/sidebar";

const {Header, Content, Footer} = Layout;


const LayoutWrapper: React.FC = () => {

    return (
        <Layout style={{minHeight: '100vh'}}>
            <Sidebar />
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{padding: 0}}/>
                <Content style={{margin: '0 16px'}}>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-background" style={{padding: 24, minHeight: "100%"}}>
                        <Outlet/>
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
};

export default LayoutWrapper;