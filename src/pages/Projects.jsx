import React from 'react';



export function PageProject() {



    return (
        <div className="container mx-auto w-full h-full">

            { /**  Visible on Mobile */}
            <div className=" wrap overflow-hidden w-full | lg:hidden  sm:block">

            
                    <div className=" order-0 rounded-lg shadow-md  px-6 py-4 m-4 ">
                        <h3 className="mb-3 font-bold text-gray-800 text-xl">2020 - Muebles Suecia 🪑 </h3>
                        <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div className="order-0 bg-white rounded-lg shadow-md  px-6 py-4 m-4">
                        <h3 className="mb-3 font-bold text-black text-xl">2019 - Click Computación 💵 </h3>
                        <p className="text-sm font-medium leading-snug tracking-wide text--gray-900 text-opacity-100">Sistema web de administración contable que le permite a una empresa llevar el control de ingresos y gastos por separado de sus proyectos y departamentos.</p>
                    </div>
                    <div className="order-0 | rounded-lg shadow-md  px-6 py-4 m-4">
                        <h3 className="mb-3 font-bold text-gray-800 text-xl">2019 - Hotel Ventura 🏨</h3>
                        <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Sistema de restaurante de un hostal, con menus fijos diarios y especialmente desarrollado para usarse en tablets</p>
                    </div>
                
                    <div className="order-0 bg-white rounded-lg shadow-md  px-6 py-4 m-4">
                        <h3 className="mb-3 font-bold text-black text-xl">2019 - Buses tmt 🚍  </h3>
                        <p className="text-sm font-medium leading-snug tracking-wide text--gray-900 text-opacity-100">Sistema web de administración de empresa de buses y venta de pasajes fisicos, con cliente de impresión y multi sucursal.</p>
                    </div>
                    <div className="order-0 | rounded-lg shadow-md  px-6 py-4 m-4">
                        <h3 className="mb-3 font-bold text-gray-800 text-xl">2018 - Autoescuela Incap 🚕 </h3>
                        <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Plataforma administrativa de alumnos y test de autoevaluación</p>
                    </div>
                
                    <div className="order-0 bg-white rounded-lg shadow-md  px-6 py-4 m-4">
                        <h3 className="mb-3 font-bold text-black text-xl">2018 - Clinica denta sonria  🦷  </h3>
                        <p className="text-sm font-medium leading-snug tracking-wide text--gray-900 text-opacity-100">Sistema web de administración contable que le permite a una empresa llevar el control de ingresos y gastos por separado de sus proyectos y departamentos.</p>
                    </div>
                
            </div>
            { /**  Visible on Desktop */}
            <div className="relative wrap overflow-hidden p-10 h-full hidden lg:block">
                <div className="border-2-2 absolute border-opacity-20 border-gray-800 h-full border" style={{ "left": "50%" }}></div>
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                        <h1 className="mx-auto font-semibold text-lg text-white"></h1>
                    </div>
                    <div className="order-1 | rounded-lg shadow-md w-5/12 px-6 py-4">
                        <h3 className="mb-3 font-bold text-gray-800 text-xl">2020 - Muebles Suecia 🪑 </h3>
                        <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>

                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                        <h1 className="mx-auto text-white font-semibold text-lg"></h1>
                    </div>
                    <div className="order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4">
                        <h3 className="mb-3 font-bold text-black text-xl">2019 - Click Computación 💵 </h3>
                        <p className="text-sm font-medium leading-snug tracking-wide text--gray-900 text-opacity-100">Sistema web de administración contable que le permite a una empresa llevar el control de ingresos y gastos por separado de sus proyectos y departamentos.</p>
                    </div>
                </div>

                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                        <h1 className="mx-auto font-semibold text-lg text-white"></h1>
                    </div>
                    <div className="order-1 | rounded-lg shadow-md w-5/12 px-6 py-4">
                        <h3 className="mb-3 font-bold text-gray-800 text-xl">2019 - Hotel Ventura 🏨</h3>
                        <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Sistema de restaurante de un hostal, con menus fijos diarios y especialmente desarrollado para usarse en tablets</p>
                    </div>
                </div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                        <h1 className="mx-auto text-white font-semibold text-lg"></h1>
                    </div>
                    <div className="order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4">
                        <h3 className="mb-3 font-bold text-black text-xl">2019 - Buses tmt 🚍  </h3>
                        <p className="text-sm font-medium leading-snug tracking-wide text--gray-900 text-opacity-100">Sistema web de administración de empresa de buses y venta de pasajes fisicos, con cliente de impresión y multi sucursal.</p>
                    </div>
                </div>
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                        <h1 className="mx-auto font-semibold text-lg text-white"></h1>
                    </div>
                    <div className="order-1 | rounded-lg shadow-md w-5/12 px-6 py-4">
                        <h3 className="mb-3 font-bold text-gray-800 text-xl">2018 - Autoescuela Incap 🚕 </h3>
                        <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Plataforma administrativa de alumnos y test de autoevaluación</p>
                    </div>
                </div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                        <h1 className="mx-auto text-white font-semibold text-lg"></h1>
                    </div>
                    <div className="order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4">
                        <h3 className="mb-3 font-bold text-black text-xl">2018 - Clinica denta sonria  🦷  </h3>
                        <p className="text-sm font-medium leading-snug tracking-wide text--gray-900 text-opacity-100">Sistema web de administración contable que le permite a una empresa llevar el control de ingresos y gastos por separado de sus proyectos y departamentos.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageProject;