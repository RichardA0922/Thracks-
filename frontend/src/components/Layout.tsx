/* Using layout page to wrap header and footer this component 
so we dont need to copy each into their pages */
import {NavLink, Outlet} from 'react-router'

const navLinkClass = ({isActive } : {isActive:boolean}) =>
    isActive ? 'text-white' : 'text-neutral-400 hover:text-white'

export default function Layout() { 
    return ( 
        <div className = "min-h screen flex flex-col bg-black text-white">
            <header className = "border-b border-neutral-800">
                <nav className = "mx-auto max-w-6x1 flex items-center  justify-between px-4 py-4">
                <NavLink to = "/" className = "text-x1 font-bold tracking-widest">
                THRACKS 
                </NavLink>
                <div className = "flex gap-6 text-sm uppercase tracking-wide">
                    <NavLink to = "/products" className = {navLinkClass}>Shop</NavLink>
                    <NavLink to = "/cart" className = {navLinkClass}>Cart</NavLink>
                </div>
                </nav>
            </header>


            <main className= "flex-1 mx-auto w-full max-w-6x1 px-4 py-8">
                <Outlet/>
            </main>

            <footer className ="border-t border-neutral-800 py-6 text-center text-sm text-neutral-500">
                {new Date().getFullYear()} THRACKS
            </footer>
        </div>
    )
}