import React from 'react';

const TaskTableModal = ({ isOpen, onConfirm, onCancel }) => {
    if (!isOpen) return null;

    return (
        <div className='fixed inset-y-0 left-4 w-full sm:inset-0 flex items-center justify-center z-50'>
            <div className='fixed inset-0 bg-black opacity-50' onClick={onCancel}></div>
            <div className='bg-white rounded-lg shadow-lg z-10 p-6 w-[286px] h-[207px] sm:w-[481px] sm:h-[207px] mx-auto content-center '>
                <h1 className='text-lg font-semibold font-workSans mb-3 text-center'>Sin Guardar</h1>
                <h2 className='text-base font-roboto sm:text-xl mb-3 text-center'>Estás seguro de que deseas salir sin guardar tus cambios?</h2>
                <div className='flex justify-end space-x-4 justify-center'>
                    <button className='border-2 border-primary-50 text-primary-500 text-xl font-workSans p-2 w-[269px] h-[48px] sm:w-[127px] sm:h-[48px] rounded-full' onClick={onCancel}>Cancelar</button>
                    <button className='bg-primary-500 text-white text-xl font-workSans p-2 w-[269px] h-[48px] sm:w-[127px] sm:h-[48px] rounded-full' onClick={onConfirm}>Salir</button>
                </div>
            </div>
        </div>
    );
};

export default TaskTableModal;