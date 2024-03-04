import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Error from "./components/Error";
import { createBrowserRouter , Outlet, RouterProvider } from "react-router-dom";
import store from "./store/store";
import {Provider} from 'react-redux'
import CharacterCardDetail from "./components/CharacterCardDetail";


const AppLayout = () =>{
    return (
        <Provider store={store}>
            <div className="app-container">
                <Outlet />
            </div>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/character/:charId",
                element: <CharacterCardDetail />
            }
        ],
        errorElement: <Error />,
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);