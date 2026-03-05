import { createBrowserRouter } from "react-router";
import Home from "@/pages/home";
import MainLayout from "@/pages/landing";
import About from "@/pages/about";
import Gallery from "@/pages/gallery";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            { index: true, Component: Home },
            { path: "about", Component: About },
            { path: "gallery", Component: Gallery},
            // {
            //   path: "auth",
            //   Component: AuthLayout,
            //   children: [
            //     { path: "login", Component: Login },
            //     { path: "register", Component: Register },
            //   ],
            // },
            // {
            //   path: "concerts",
            //   children: [
            //     { index: true, Component: ConcertsHome },
            //     { path: ":city", Component: ConcertsCity },
            //     { path: "trending", Component: ConcertsTrending },
            //   ],
            // },
        ],
    },
]);
