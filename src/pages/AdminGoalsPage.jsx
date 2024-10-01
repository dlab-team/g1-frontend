import NavbarAdmin from "../components/Navbar/NavbarAdmin";

const AdminGoalsPage = () => {
    return (
        <div className='flex flex-wrap max-w-screen bg-gray-50'>
            <div className='flex w-screen bg-gray-50'>
                <div className='flex-shrink-0 w-[100px] h-0 bg-white'>
                    <NavbarAdmin />
                </div>

                <div className='flex-1 ml-16 sm:ml-20 md:ml-48 p-4 md:p-8 max-w-full'>
                    <div className='mb-6 ml-10 pb-4 border-b border-gray-200'>
                        <h1 className='font-workSans italic text-2xl sm:text-3xl font-semibold text-center truncate text-primary-500'>
                            Objetivos
                        </h1>
                    </div>
                    <div className='flex'>
                        <div className='flex-auto text-left'>
                            <button className='h-8 mt-4 bg-primary-500 text-white font-workSans font-semibold text-sm px-4 rounded-full hover:bg-primary-700 focus:outline-none focus:ring-2  focus:ring-opacity-50'>
                                Crear Objetivo
                            </button>
                        </div>
                        <div className='flex-auto text-right'>
                            <button className='h-8 mt-4 text-primary-500 font-workSans font-semibold text-sm px-4 rounded-full hover:bg-slate-300 focus:outline-none focus:ring-2  focus:ring-opacity-50 border-2 border-gray-200'>
                                Descargar
                            </button>
                        </div>
                    </div>
                </div>
                
            </div>
            
            <div className='flex-1 flex-row-reverse font-workSans max-w-screen h-screen text-left bg-gray-50 justify-items-end text-nowrap overflow-x-scroll'>
                    <table className='table-fixed max-w-screen ml-48 border-collapse m-2'>
                        <thead>
                            <tr>
                                <th className='border border-gray-200 border-r-black bg-gray-300 p-2'>Nombre</th>
                                <th className='border border-gray-200 border-r-black bg-gray-300 p-2'>Estado</th>
                                <th className='border border-gray-200 border-r-black bg-gray-300 p-2'>Tipo de Actividad</th>
                                <th className='border border-gray-200 border-r-black bg-gray-300 p-2'>Objetivo</th>
                                <th className='border border-gray-200 border-r-black bg-gray-300 p-2'>Plazo de Cumplimiento</th>
                                <th className='border border-gray-200 border-r-black bg-gray-300 p-2'>Tipo de Inscripcion</th>
                                <th className='border border-gray-200 border-r-black bg-gray-300 p-2'>Inscripciones activas</th>
                                <th className='border border-gray-200 bg-gray-300 p-2'>Total de inscripciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='border border-gray-200 p-2'>The Sliding Mr. Bones</td>
                                <td className='border border-gray-200 p-2'>Malcolm Lockyer</td>
                                <td className='border border-gray-200 p-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, minima.</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-200 p-2'>Witchy Woman</td>
                                <td className='border border-gray-200 p-2'>The Eagles</td>
                                <td className='border border-gray-200 p-2'>1972</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-200 p-2'>Shining Star</td>
                                <td className='border border-gray-200 p-2'>Earth, Wind, and Fire</td>
                                <td className='border border-gray-200 p-2'>1975</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
        </div>
    );
};

export default AdminGoalsPage;