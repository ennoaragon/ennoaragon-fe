import NavMenu from "@components/nav-menu"
import { Outlet } from "react-router"

function Landing() {
    return (
        <div className="w-screen h-screen max-h-screen max-w-screen flex flex-col">
            <header className="fixed top-0 left-0 w-full h-[50px] bg-transparent z-10">
                <NavMenu />
            </header>
            <main className="pt-[50px] h-full w-full overflow-y-auto">
                <Outlet />
            </main>
        </div>
    )
}

export default Landing
