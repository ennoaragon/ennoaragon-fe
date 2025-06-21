import {
    RouterProvider,
} from "react-router";
import { router } from "./router.ts";
import { ThemeProvider } from "@/components/theme-provider.tsx";

function App() {

    // <div className="bg-(--bg-color) text-(--t-color) min-h-screen transition-colors">
    // <div className="bg-(--gradient-45) from-(--custom-background) from-60% via-(--custom-gradiant) via-70% to-(--custom-background) to-80%  text-white min-w-full min-h-screen h-screen font-Lato leading-normal tracking-normal overflow-hidden">
    // <div className="background-gradient text-white min-w-screen min-h-screen h-screen w-fill font-Lato leading-normal tracking-normal overflow-hidden">

    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="text-primary min-h-screen transition-colors">
                <RouterProvider router={router} />
            </div>
        </ThemeProvider>
    )
}

export default App

