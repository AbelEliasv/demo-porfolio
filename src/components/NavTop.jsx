import React from 'react';
import {
    BrowserRouter as Router,
  
    Link
} from "react-router-dom";
export function NavTop() {
    return (
        <nav className="relative flex items-center justify-between sm:h-10 lg:justify-between m-4">
            <div className="font-mono font-bold text-xl">
                AV
            </div>
             {/*  --------Visible on Desktop------------ */ }
            <div className=" lg:hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                <Link to={`/portafolio`} className="font-mono text-gray-500 hover:text-gray-900 m-5 ">Sobre mí</Link>

                <Link to={`/project`} className="font-mono text-gray-500 hover:text-gray-900 m5">Proyectos</Link>
                { /*
                <Link to={`/contact`} className="font-mono text-gray-500 hover:text-gray-900">Contacto</Link>
                <Link href={""} className="font-mono text-gray-500 hover:text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20px" style={{ display: "inline" }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>

                </Link> */ }
            </div>

            {/*  --------Visible on Desktop------------ */ }
            <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                <Link to={`/portafolio`} className="font-mono text-gray-500 hover:text-gray-900 ">Sobre mí</Link>

                <Link to={`/project`} className="font-mono text-gray-500 hover:text-gray-900">Proyectos</Link>
                { /* FEATURES FOR THE FUTURE 
                <Link to={`/contact`} className="font-mono text-gray-500 hover:text-gray-900">Contacto</Link>
                <Link href={""} className="font-mono text-gray-500 hover:text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20px" style={{ display: "inline" }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>

                </Link> */ }
            </div>
        </nav>
    )
}

export default NavTop;