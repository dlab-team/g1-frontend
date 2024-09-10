import { SearchOutline1, PlusCircleOutline } from '../../../assets/icons';

const TaskTable = () => {
    return (
        <div className="flex-col w-full p-6 sm:ml-8 lg:pl-40">
            <div className="flex justify-end mb-6">
                <div className="relative max-w-lg lg:w-[400px] w-full">
                    <input
                        type="text"
                        placeholder='Buscar'
                        className="p-2 sm:p-3 border border-gray-300 rounded-full w-full lg:w-[400px] h-[32px] sm:h-[40px] lg:h-[44px] text-sm sm:text-base lg:text-lg"
                    />
                    <img src={SearchOutline1} alt="lupa" className="absolute inset-y-0 right-0 top-1 lg:top-2 flex items-center px-3" />
                </div>
            </div>

            <div className="w-full overflow-x-auto">
                <div className="flex flex-nowrap space-x-4 min-w-full">
                    <div className="w-full sm:w-[300px] md:w-[360px] flex-shrink-0">
                        <h2 className="text-lg sm:text-xl md:text-2xl h-[40px] sm:h-[48px] font-semibold mb-2 sm:mb-4 text-white bg-title-500 font-workSans rounded-lg text-center">
                            Lista de deseos
                        </h2>
                        <div className="h-[36px] sm:h-[44px] mt-4 space-y-2 grid justify-items-center border border-gray-300 rounded-md">
                            <button><img className='size-8' src={PlusCircleOutline} alt="Agregar" /></button>
                        </div>
                    </div>

                    <div className="w-full sm:w-[300px] md:w-[360px] flex-shrink-0">
                        <h2 className="text-lg sm:text-xl md:text-2xl h-[40px] sm:h-[48px] font-semibold mb-2 sm:mb-4 text-white bg-primary-500 font-workSans rounded-lg text-center">
                            Postulados
                        </h2>
                        <div className="h-[36px] sm:h-[44px] mt-4 space-y-2 grid justify-items-center border border-gray-300 rounded-md">
                            <button><img className='size-8' src={PlusCircleOutline} alt="Agregar" /></button>
                        </div>
                    </div>

                    <div className="w-full sm:w-[300px] md:w-[360px] flex-shrink-0">
                        <h2 className="text-lg sm:text-xl md:text-2xl h-[40px] sm:h-[48px] font-semibold mb-2 sm:mb-4 text-white bg-primary-500 font-workSans rounded-lg text-center">
                            Oferta
                        </h2>
                        <div className="h-[36px] sm:h-[44px] mt-4 space-y-2 grid justify-items-center border border-gray-300 rounded-md">
                            <button><img className='size-8' src={PlusCircleOutline} alt="Agregar" /></button>
                        </div>
                    </div>

                    <div className="w-full sm:w-[300px] md:w-[360px] flex-shrink-0">
                        <h2 className="text-lg sm:text-xl md:text-2xl h-[40px] sm:h-[48px] font-semibold mb-2 sm:mb-4 text-white bg-primary-500 font-workSans rounded-lg text-center">
                            Rechazado
                        </h2>
                        <div className="h-[36px] sm:h-[44px] mt-4 space-y-2 grid justify-items-center border border-gray-300 rounded-md">
                            <button><img className='size-8' src={PlusCircleOutline} alt="Agregar" /></button>
                        </div>
                    </div>
                </div>
            </div>

            <button className='fixed bottom-6 right-6 h-16 w-16 border bg-gray-100 rounded-full text-primary-500 text-5xl'>
                i
            </button>
        </div>
    );
}

export default TaskTable;