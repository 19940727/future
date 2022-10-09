import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.less'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import routes from "./router/router";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={createBrowserRouter(routes)}/>
    </React.StrictMode>
);
