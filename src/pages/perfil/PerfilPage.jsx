import React from 'react';
import { LuPencil } from "react-icons/lu";; // Importa el icono de lápiz desde react-icons
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";

import '../perfil/PerfilPage.css';

const PerfilPage = () => {
    return (
        <div className="bg-primary-50 min-h-screen p-8" id="container">

            {/* título */}
            <div className="flex justify-start" id="perfil-title">
                <img src="src/assets/images/title.png" alt="title" />
            </div>


            {/* datos de perfil */}

            <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                <div className="flex items-center">

                    <div className="relative w-40 h-40 border-4 border-primary-500 rounded-full flex items-center justify-center overflow-hidden">
                        <img
                            src="src/assets/images/foto_perfil_figma.jpeg"
                            alt="Foto de perfil"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <button className="absolute bottom-4 rounded-full w-10 h-10 border-2 border-primary-500 bg-white text-primary-500 flex items-center justify-center">
                            +
                        </button>
                    </div>


                    <div className="ml-6">
                        <h2 className="text-tittle-600 text-xl font-bold">Sergio Muñoz García</h2>
                        <p className="text-tittle-400  text-gray-500">Santiago de Chile</p>
                        <div className="flex items-center text-tittle-400 ">
                            <p className="flex items-center mr-4  text-gray-500"><MdOutlineEmail className="mr-2" />sergio23@gmail.com</p>
                            <p className="flex items-center  text-gray-500 "><MdOutlinePhone className="mr-2" />+56 9 53427586</p>
                        </div>
                    </div>
                    <div className="ml-auto">
                        <button className="text-tittle-400 hover:text-tittle-600">
                            <LuPencil />
                        </button>
                    </div>
                </div>
            </div>

            {/* experiencia profesional */}

            <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                <div className="flex items-start justify-between">
                    <h3 className="text-tittle-600 text-lg font-bold mb-2">Analista de Marketing</h3>
                    <button className="text-tittle-400 hover:text-tittle-600">
                        <LuPencil />
                    </button>
                </div>
                <p className="text-tittle-400 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.
                    Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.
                    Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu.
                </p>
            </div>

            {/* cargos */}
            <div className="bg-white shadow-md rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                    <h3 className="text-tittle-600 text-lg font-bold">Experiencia Profesional</h3>
                    <button className="text-tittle-400 hover:text-tittle-600">
                        <LuPencil />
                    </button>
                </div>

                <div className="space-y-4">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className=" font-bold text-left flex items-center">
                                    <div className="flex items-center justify-center text-2xl w-4 h-4 bg-primary-200 rounded-full mr-2">
                                        <div className="text-black mb-2">•</div>
                                    </div>
                                    Ingeniero de Sistemas
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-left">
                            <tr>
                                <td className="text-tittle-400 flex items-center">Webhelp</td>
                            </tr>
                            <tr>
                                <td className="text-tittle-400 flex items-center">Diciembre 2022 - Noviembre 2023</td>
                            </tr>
                        </tbody>
                    </table>

                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className="text-tittle-500 font-bold text-left flex items-center">
                                    <div className="flex items-center justify-center text-2xl w-4 h-4 bg-primary-200 rounded-full mr-2">
                                        <div className="text-black mb-2">•</div>
                                    </div> Analista de Marketing
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-left">
                            <tr>
                                <td className="text-tittle-400 flex items-center">Webhelp</td>
                            </tr>
                            <tr>
                                <td className="text-tittle-400 flex items-center">Enero 2022 - Octubre 2022</td>
                            </tr>
                        </tbody>
                    </table>

                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className="text-tittle-500 font-bold text-left flex items-center">
                                    <div className="flex items-center justify-center text-2xl w-4 h-4 bg-primary-200 rounded-full mr-2">
                                        <div className="text-black mb-2">•</div>
                                    </div>
                                    Añadir nueva experiencia
                                </th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>




        </div >
    );
};

export default PerfilPage;
