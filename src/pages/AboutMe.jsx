import React, { useEffect } from 'react';
import img from '../img/abel.jpeg'
import { ReactComponent as Github } from '../svg/github.svg'
import { ReactComponent as Linkedin } from '../svg/linkedin.svg'
import { ReactComponent as Twiter } from '../svg/twitter.svg'
import { ReactComponent as Facebook } from '../svg/facebook.svg'
import Typed from 'typed.js';


function PageAboutMe() {

    useEffect(() => {

        var options = {
            strings: ['Hola soy Abel ,  Desarrollador de Software.🧑🏻‍💻'],
            typeSpeed: 50
        };

        var typed = new Typed('#saludo',options);

        return () => {
            typed.destroy()
        }
    }, [])


    return (
        <div className="h-screen grid lg:grid-cols-2  md:grid-cols-12 sm:grid-cols-12">
            <div className="font-mono text-3xl font-black text-justify | sm: m-7 | sm: justify-start lg:hidden">Hola soy Abel ,  Desarrollador de Software.🧑🏻‍💻</div>
            <div className="flex flex-wrap flex-col content-center | m-20 ">
                <div>
                    <img src={img} alt="" width="300px"></img>
                </div>

            </div>
            <div className="lg:mt-20  sm:mt-0">
                <div className="sm : m-7 justify-start hidden  lg:block ">
                    <span className="font-mono text-4xl font-black text-justify" id="saludo"></span>

                </div>

                <div className="font-mono text-1xl mt-5 text-justify mb-8 | sm: m-7">lorem lorem a long established fact that a reader will be distracted by the uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</div>

                <div className="font-mono text-1xl mt-5  | flex  | sm: text-center  m-5 ">

                    <Github className="m-2 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110" width="25px"></Github>
                    <Linkedin className="m-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" width="25px"></Linkedin>
                    <Twiter className="m-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" width="25px"></Twiter>
                    <Facebook className="m-2 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110" width="13px" ></Facebook>
                </div>
            </div>
        </div>
    )
}

export default PageAboutMe;