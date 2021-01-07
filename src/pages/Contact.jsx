import React from 'react';

function PageContact() {
    return (
        <div className="h-screen grid lg:grid-cols-2  md:grid-cols-12 sm:grid-cols-12">

            <div className="flex flex-wrap flex-col  | m-10">
                <div className="font-mono font-black text-2xl">¡Hablemos!  🤓</div>
                <div className="font-mono mt-5">Para cualquier consulta sobre trabajos o colaboraciones, puedes ponerte en contacto conmigo usando este formulario o enviándome un email a : eliasvalenzuela165@gmail.com</div>
            </div>
            <div className="mt-10">
                <form className="flex flex-col ">
                    <label className="mb-2">Nombre Completo *</label>
                    <input className="placeholder-gray-500 | p-3 | border-2 border-grey-700 | rounded-md | w-full  | mb-5" placeholder="Nombre completo"></input>
                    <label className="mb-2">Dirección de email *</label>
                    <input className="placeholder-gray-500 | p-3 | border-2 border-grey-700 | rounded-md | w-full  | mb-5" placeholder="jane@example.com"></input>
                    <label className="mb-2">Mensaje *</label>
                    <textarea type="text" rows={5   } className="placeholder-gray-500 | p-3 | border-2 border-grey-700 | rounded-md | w-full  | mb-5" placeholder="Tu mensaje"></textarea>
                    <button className="btn bg-gray-900 text-white | p-2 | rounded-md | mt-3 ">Enviar mensaje</button>
                </form>
            </div>
        </div>  
    )
}

export default PageContact;