import React, { useState } from 'react'
import { ChevronLeftOutline } from '../../assets/icons'

const TaskTableForm = ({ onClose, onChange, initialData, listId  }) => {
    const ENDPOINT = import.meta.env.VITE_API_URL
    const token = window.sessionStorage.getItem('token')

    const [formData, setFormData] = useState(initialData || {
        cargo: '',
        nombre_empresa: '',
        URL_DATA: '',
        ubicacion: 'local',
        modalidad: 'presencial',
        descripcion: '',
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!formData.cargo || !formData.nombre_empresa) {
            console.error('Los campos "cargo" y "nombre_empresa" son obligatorios')
            return
        }

        try {
            const response = await fetch(/*`Task.json`*/`${ENDPOINT}/empleos`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    ...formData,
                    creado_en: new Date().toISOString(),
                    lista_id: listId,
                }),
            })

            if (!response.ok) {
                const errorMessage = await response.text()
                throw new Error(`Problema al guardar: ${errorMessage}`)
            }

            const result = await response.json()
            console.log('Datos enviados:', result)
            onChange(result) 
            onClose()
            setFormData({
                cargo: '',
                nombre_empresa: '',
                URL_DATA: '',
                ubicacion: 'local',
                modalidad: 'presencial',
                descripcion: '',
            })
        } catch (error) {
            console.error('Error:', error.message)
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    return (
        <form onSubmit={handleSubmit} className='flex flex-col sm:p-2'>
            <div className='flex sm:flex-col'>
                <button onClick={onClose} className='mb-4'>
                    <img src={ChevronLeftOutline} alt='flecha izquierda' className='size-8 sm:size-10' />
                </button>
                <h1 className='text-center text-2xl ml-1 sm:ml-0 sm:text-4xl font-workSans italic'>Agregar Postulación</h1>   
            </div>
            <div className='flex-shrink-0 sm:w-[461px] sm:h-[90px] mt-6'>
                <label className='block mb-2 mt-4 sm:mt-0 font-roboto font-medium'>Título Profesional</label>
                <input
                    type='text'
                    name='cargo'
                    placeholder='Título'
                    value={formData.cargo}
                    onChange={handleInputChange}
                    className='border border-primary-500 p-2 w-full rounded-md bg-gray-50 sm:bg-white'
                />
            </div>
            <div className='flex-shrink-0 sm:w-[461px] sm:h-[90px]'>
                <label className='block mb-2 mt-4 sm:mt-0 font-roboto font-medium'>Nombre de la Compañía</label>
                <input
                    type='text'
                    name='nombre_empresa'
                    placeholder='Nombre de la Compañía'
                    value={formData.nombre_empresa}
                    onChange={handleInputChange}
                    className='border border-primary-500 p-2 w-full rounded-md bg-gray-50 sm:bg-white'
                />
            </div>
            <div className='flex-shrink-0 sm:w-[461px] sm:h-[90px]'>
                <label className='block mb-2 mt-4 sm:mt-0 font-roboto font-medium'>URL de la Publicación Original</label>
                <input
                    type='URL_DATA'
                    name='url'
                    placeholder='URL_DATA'
                    value={formData.URL_DATA}
                    onChange={handleInputChange}
                    className='border border-primary-500 p-2 w-full rounded-md bg-gray-50 sm:bg-white'
                />
            </div>
            <div className='flex-shrink-0 sm:w-[461px] sm:h-[90px]'>
                <label className='block mb-2 mt-4 sm:mt-0 font-roboto font-medium'>Ubicación</label>
                <select
                    name='ubicacion'
                    value={formData.ubicacion}
                    onChange={handleInputChange}
                    className='border border-primary-500 p-2 w-full rounded-md bg-gray-50 sm:bg-white'
                >
                    <option value='local'>Local</option>
                    <option value='internacional'>En el Exterior</option>
                </select>
            </div>
            <div className='flex-shrink-0 sm:w-[461px] sm:h-[90px]'>
                <label className='block mb-2 mt-4 sm:mt-0'>Tipo de empleo:</label>
                <select
                    name='modalidad'
                    value={formData.modalidad}
                    onChange={handleInputChange}
                    className='border border-primary-500 p-2 w-full rounded-md bg-gray-50 sm:bg-white'
                >
                    <option value='presencial'>Presencial</option>
                    <option value='online'>Híbrido</option>
                </select>
            </div>
            <div className='flex-shrink-0 sm:w-[461px] sm:h-[218px]'>
                <label className='block mb-2 mt-4 sm:mt-0 font-roboto font-medium'>Descripción del trabajo</label>
                <textarea
                    name='descripcion'
                    className='border border-primary-500 p-2 w-full h-[218px] rounded-md bg-gray-50 sm:bg-white'
                    placeholder='Descripción del Puesto'
                    value={formData.descripcion}
                    onChange={handleInputChange}
                ></textarea>
            </div>

            <div className='flex justify-end mt-0 sm:mt-8 flex-shrink-0 sm:w-[461px] sm:h-[50px] gap-2'>
                {window.innerWidth > 640 && (
                    <div>
                        <button
                            type='button'
                            onClick={onClose}
                            className='border-2 border-primary-50 text-primary-500 text-xl font-workSans p-2 w-[130px] h-[50px] rounded-full'
                        >
                            Cancelar
                        </button>
                        <button
                            type='submit'
                            className='bg-primary-500 text-white text-xl font-workSans p-2 w-[130px] h-[50px] rounded-full mt-4'
                        >
                            Guardar
                        </button>
                    </div>
                )}
            </div>

            {window.innerWidth <= 640 && (
                <div>
                    <div className='text-left mt-2'>
                        <p>Acción</p>
                        <button className='text-black underline decoration-solid font-medium'>Mover Tarjeta</button>
                    </div>
                    <button
                        type='submit'
                        className='bg-primary-500 text-white text-xl font-workSans w-full h-[50px] mt-6 rounded-full'
                    >
                        Guardar
                    </button>
                </div>
            )}
        </form>
    )
}

export default TaskTableForm
