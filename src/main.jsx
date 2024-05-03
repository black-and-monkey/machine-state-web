import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {FiltersProvider} from "./context/filters.jsx";
import NavigationBar from "./routes/navigationBar.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {About} from "./components/About.jsx";
import {Auth0Provider} from "@auth0/auth0-react";

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

        <Auth0Provider
            clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
            domain={import.meta.env.VITE_AUTH0_DOMAIN}
            authorizationParams={{
                redirect_uri: window.location.origin,
                audience: import.meta.env.VITE_AUTH0_AUDIENCE,
                scope: "openid profile admin"
            }}
        >

            <FiltersProvider>
                <NavigationBar/>
                <RouterProvider router={router} />
            </FiltersProvider>
        </Auth0Provider>


    </React.StrictMode>,
)
