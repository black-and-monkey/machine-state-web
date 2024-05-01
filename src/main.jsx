import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {FiltersProvider} from "./context/filters.jsx";
import NavigationBar from "./routes/navigationBar.jsx";
import {Row} from "react-bootstrap";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {About} from "./components/About.jsx";

const router = createBrowserRouter([
    {
        path: "/",  element: <App/>,
    },
    {
        path: "/about",  element: <About/>,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FiltersProvider>

            <NavigationBar/>

            <RouterProvider router={router} />

        </FiltersProvider>
    </React.StrictMode>,
)
