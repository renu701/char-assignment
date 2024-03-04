import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Body from "./components/Body";
import Error from "./components/Error";
import { createBrowserRouter , Outlet, RouterProvider } from "react-router-dom";
import CharacterCardDetail from "./components/CharacterCardDetail";

const AppLayout = () =>{
    return (
        <div className="app-container">
            <Header />
            <Outlet />
        </div>
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