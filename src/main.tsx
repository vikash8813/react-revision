import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import * as React from "react";
import store from './store.js'
import { Provider } from 'react-redux'

import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import * as ReactDOM from "react-dom/client";
import Route1 from "./components/routes/route1.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <>
            <App/>
        </>
    },
    {
        path: 'contact/:id',
        element: <>
            <Route1/>
            </>,
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>

    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
    </Provider>
);