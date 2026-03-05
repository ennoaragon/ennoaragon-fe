import NavMenu from "@/components/nav-menu"
import { Outlet } from "react-router"

function Landing() {

    return (
        < div >
            <header className="fixed w-full h-[50px] bg-transparent z-10">
                <NavMenu />
            </header>
            <main className="min-h-screen overflow-y-auto relative "
            >
                <Outlet />
            </main>
            <footer className="relative flex justify-end text-right w-full pr-4 b-0 mt-10">
                <p className="text-custom-gray">2025 - Present © EnnoAragon</p>
            </footer>
        </ div>
    )
}

export default Landing
