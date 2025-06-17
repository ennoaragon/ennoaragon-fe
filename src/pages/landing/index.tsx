import NavMenu from "@components/nav-menu"
import { Outlet } from "react-router"

function Landing() {
    return (
        <>
            <header className="fixed w-full h-[50px] bg-transparent z-10">
                <NavMenu />
            </header>
            <main className="min-h-screen overflow-y-auto ">
                <Outlet />
            </main>
        </>
    )
}

export default Landing
