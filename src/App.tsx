import {
    RouterProvider,
} from "react-router";
import {router} from "./router.ts";

function App() {

    //<div className="bg-(--bg-color) text-(--t-color) min-h-screen transition-colors">
        // <div className="bg-(--gradient-45) from-(--custom-background) from-60% via-(--custom-gradiant) via-70% to-(--custom-background) to-80%  text-white min-w-full min-h-screen h-screen font-Lato leading-normal tracking-normal overflow-hidden">
  return (
        <div className="background-gradient text-white min-w-full min-h-screen h-screen font-Lato leading-normal tracking-normal overflow-hidden">
             <main className="flex flex-1 flex-col justify-between min-w-full min-h-full h-full w-full relative pt-14 max-h-fit overflow-auto scrollbar-hide">
                <RouterProvider router={router} />
            </main>
        </div>
  )
}

export default App
