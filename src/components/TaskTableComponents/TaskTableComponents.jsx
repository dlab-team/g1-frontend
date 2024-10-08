import React, { useState, useEffect } from 'react'
import { SearchOutline1, PlusCircleOutline, PencilOutline, TrashOutline } from '../../assets/icons'
import TaskTableForm from './TaskTableForm'
import TaskTableModal from './TaskTableModal'

const TaskTable = () => {
    const ENDPOINT = import.meta.env.VITE_API_URL
    const token = window.sessionStorage.getItem('token')
    const [isFormVisible, setIsFormVisible] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isFormModified, setIsFormModified] = useState(false)
    const [formData, setFormData] = useState({
        cargo: '',
        nombre_empresa: '',
        URL_DATA: '',
        ubicacion: 'local',
        modalidad: 'presencial',
        descripcion: '',
    })
    const [tasks, setTasks] = useState({
        wishlist: [],
        postulation: [],
        offers: [],
        rejected: [],
    })
    useEffect(() => {
        /*const loadTasks = async () => {
            const response = await fetch('task.json') //fetch provisional para consumir Tasks (funcionamiento de tarjetas) a traves de Json hasta comunicarme con backEnd
            const data = await response.json()
            setTasks(data)
            
        }*/
        const loadTasks = async () => {
        try {
            const response = await fetch(`${ENDPOINT}/empleos`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            })

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`)
            }

            const data = await response.json()
            const dataTable = {
                wishlist: data.filter(task => task.lista_id === 1), 
                postulation: data.filter(task => task.lista_id === 2),
                offers: data.filter(task => task.lista_id === 3),
                rejected: data.filter(task => task.lista_id === 4),
            }
            setTasks(dataTable)
        } catch (error) {
            console.error('Error al cargar las tareas:', error)
        }
    }

        loadTasks()
    }, [])

    const deleteTask = async (id, column) => {
        try {
            const response = await fetch(`${ENDPOINT}/empleos/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            })
    
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`)
            }
    
            setTasks((prev) => ({
                ...prev,
                [column]: prev[column].filter(task => task.id !== id),
            }))
        } catch (error) {
            console.error('Error al eliminar la tarea:', error)
        }
    }

    const toggleForm = (column, listId) => {
        setFormData({ column })
        setIsFormVisible(!isFormVisible)
        setListId(listId) 
        setIsFormModified(false)
    }

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const handleCancel = () => {
        closeModal()
        setIsFormVisible(false)
        setFormData({})
    }

    const handleCloseForm = () => {
    if (isFormVisible && isFormModified) {
        openModal()
    } else {
        setIsFormVisible(false)
    }
}

const handleFormChange = (newData) => {
    setIsFormModified(true)
    const { column, ...taskData } = newData

    setTasks((prev) => ({
        ...prev,
        [column]: [...prev[column], { ...taskData, id: Date.now(), lista_id: getListaId(column) }]
    }))
}

const getListaId = (column) => {
    switch (column) {
        case 'wishlist': return 1
        case 'postulation': return 2
        case 'offers': return 3
        case 'rejected': return 4
        default: return null
    }
}

    const handleDragStart = (e, task, column) => {
        e.dataTransfer.setData('task', JSON.stringify(task))
        e.dataTransfer.setData('column', column)
    }

    const handleDrop = async (e, column) => {
        const taskData = JSON.parse(e.dataTransfer.getData('task'))
        const fromColumn = e.dataTransfer.getData('column')
    
        if (fromColumn === column) return
    
        setTasks((prev) => {
            if (!(fromColumn in prev) || !(column in prev)) {
                console.error('Una de las columnas no existe:', { fromColumn, column })
                return prev
            }
    
            const newFromColumn = prev[fromColumn].filter(t => t.id !== taskData.id)
            const newColumn = [...prev[column] || [], { ...taskData, lista_id: getListaId(column) }]
    
            const newState = {
                ...prev,
                [fromColumn]: newFromColumn,
                [column]: newColumn,
            }
            fetch(`${ENDPOINT}/empleos`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ task: newState }),
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Error en la actualización del servidor')
                    }
                    return response.json()
                })
                .then(data => {
                    console.log('Actualización exitosa:', data)
                })
                .catch(error => {
                    console.error('Error al actualizar:', error)
                })
    
            return newState
        })
    }


    return (
        <div className='flex-col w-full p-6'>
            <div className='flex justify-end sm:mr-5'>
                <div className='relative flex justify-end max-w-lg lg:w-[400px] w-full'>
                    <input
                        type='text'
                        placeholder='Buscar'
                        className='p-3 border border-gray-300 rounded-full w-full lg:w-[310px] h-[40px] sm:h-[40px] lg:h-[44px] text-sm sm:text-base lg:text-lg'
                    />
                    <img src={SearchOutline1} alt='lupa' className='absolute inset-y-0 right-0 top-2 lg:top-2 flex items-center px-3' />
                </div>
            </div>
            {isFormVisible && (
                <div className='fixed inset-0 sm:bg-white sm:bg-opacity-50 z-40' onClick={handleCloseForm}></div>
            )}
            {isFormVisible && (
                <div className='fixed sm:top-1/2 sm:left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-50 sm:bg-white shadow-lg z-50 p-6 transition-transform duration-500 scale-100 sm:rounded-lg w-[calc(100%-32px)] h-[1024px] left-[calc(50%+38px)] top-1/2 sm:w-[521px] sm:h-[958px]'>
                    <TaskTableForm
                        onClose={handleCloseForm}
                        onChange={handleFormChange}
                        initialData={formData}
                    />
                </div>
            )}

            <div className='w-full overflow-x-auto h-full pt-6'>
                <div className='flex h-full flex-nowrap space-x-10 md:w-[1290px] 2xl:w-[2360px]'>
                    <div className='w-full sm:w-[310px] justifi-center md:w-[287px] gap-3 2xl:w-1/4 flex-shrink-0' onDragOver={(e) => e.preventDefault()} onDrop={(e) => handleDrop(e, 'wishlist')}>
                        <h2 className='text-lg sm:text-xl md:text-2xl h-[40px] sm:h-[48px] font-semibold content-center sm:mb-4 text-white bg-title-500 font-workSans rounded-lg text-center'>
                            Lista de deseos
                        </h2>
                        <div className='h-[36px] sm:h-[44px] mt-4 space-y-2 grid justify-items-center border border-gray-300 rounded-md'>
                            <button onClick={() => toggleForm('wishlist')}><img className='size-8' src={PlusCircleOutline} alt='Agregar' /></button>
                        </div>
                        {tasks.wishlist.length > 0 ? (
                            tasks.wishlist.map((task, index) => (
                                <div className='flex flex-shrink-0 w-full sm:w-[287px] sm:h-[107px] p-5 gap-[5px] mt-6 bg-white rounded-lg 2xl:w-full 2xl:justify-center' key={index} draggable onDragStart={(e) => handleDragStart(e, task, 'wishlist')}>
                                    <div className='flex flex-col p-[3px] gap-[3px] w-[212px] h-[67px] items-center'>
                                        <div className='flex w-[137px] h-[30px] justify-start items-center font-workSans font-semibold text-xl'>
                                            {task.cargo}
                                        </div>
                                        <div className='flex w-[137px] h-[30px]  justify-start items-center text-base font-medium'>
                                            {task.nombre_empresa}
                                        </div>
                                    </div>
                                    <div className='flex flex-col justify-between items-center'>
                                        <button onClick={toggleForm}>
                                            <img className='w-[24px] h-[24px]' src={PencilOutline} alt='Editar' />
                                        </button>
                                        <button onClick={() => deleteTask(task.id, 'wishlist')}>
                                            <img className='w-[24px] h-[24px]' src={TrashOutline} alt='Borrar' />
                                        </button>
                                    </div>
                                </div>
                            ))) : null}
                    </div>

                    <div className='w-full sm:w-[310px] justifi-center md:w-[287px] 2xl:w-1/4 flex-shrink-0 ' onDragOver={(e) => e.preventDefault()} onDrop={(e) => handleDrop(e, 'postulation')}>
                        <h2 className='text-lg sm:text-xl md:text-2xl h-[40px] sm:h-[48px] font-semibold content-center sm:mb-4 text-white bg-primary-500 font-workSans rounded-lg text-center'>
                            Postulados
                        </h2>
                        <div className='h-[36px] sm:h-[44px] mt-4 space-y-2 grid justify-items-center border border-gray-300 rounded-md'>
                            <button onClick={() => toggleForm('postulation')}><img className='size-8' src={PlusCircleOutline} alt='Agregar' /></button>
                        </div>
                        {tasks.postulation.length > 0 ? (
                            tasks.postulation.map((task, index) => (
                                <div className='flex w-[287px] h-[107px] p-5 gap-[5px] mt-6 bg-white rounded-lg 2xl:w-full 2xl:justify-center' key={index} draggable onDragStart={(e) => handleDragStart(e, task, 'postulation')}>
                                    <div className='flex flex-col p-[3px] gap-[3px] w-[212px] h-[67px] items-center'>
                                        <div className='flex w-[137px] h-[30px] justify-start items-center font-workSans font-semibold text-xl'>
                                            {task.cargo}
                                        </div>
                                        <div className='flex w-[137px] h-[30px]  justify-start items-center text-base font-medium'>
                                            {task.nombre_empresa}
                                        </div>
                                    </div>
                                    <div className='flex flex-col justify-between items-center'>
                                        <button onClick={toggleForm}>
                                            <img className='w-[24px] h-[24px]' src={PencilOutline} alt='Editar' />
                                        </button>
                                        <button onClick={() => deleteTask(task.id, 'postulation')}>
                                            <img className='w-[24px] h-[24px]' src={TrashOutline} alt='Borrar' />
                                        </button>
                                    </div>
                                </div>
                            ))) : null}
                    </div>

                    <div className='w-full sm:w-[310px] justifi-center md:w-[287px] 2xl:w-1/4 flex-shrink-0' onDragOver={(e) => e.preventDefault()} onDrop={(e) => handleDrop(e, 'offers')}>
                        <h2 className='text-lg sm:text-xl md:text-2xl h-[40px] sm:h-[48px] font-semibold content-center sm:mb-4 text-white bg-primary-500 font-workSans rounded-lg text-center'>
                            Oferta
                        </h2>
                        <div className='h-[36px] sm:h-[44px] mt-4 space-y-2 grid justify-items-center border border-gray-300 rounded-md'>
                            <button onClick={() => toggleForm('offers')}><img className='size-8' src={PlusCircleOutline} alt='Agregar' /></button>
                        </div>
                        {tasks.offers.length > 0 ? (
                            tasks.offers.map((task, index) => (
                                <div className='flex w-[287px] h-[107px] p-5 gap-[5px] mt-6 bg-white rounded-lg 2xl:w-full 2xl:justify-center' key={index} draggable onDragStart={(e) => handleDragStart(e, task, 'offers')}>
                                    <div className='flex flex-col p-[3px] gap-[3px] w-[212px] h-[67px] items-center'>
                                        <div className='flex w-[137px] h-[30px] justify-start items-center font-workSans font-semibold text-xl'>
                                            {task.cargo}
                                        </div>
                                        <div className='flex w-[137px] h-[30px]  justify-start items-center text-base font-medium'>
                                            {task.nombre_empresa}
                                        </div>
                                    </div>
                                    <div className='flex flex-col justify-between items-center'>
                                        <button onClick={toggleForm}>
                                            <img className='w-[24px] h-[24px]' src={PencilOutline} alt='Editar' />
                                        </button>
                                        <button onClick={() => deleteTask(task.id, 'offers')}>
                                            <img className='w-[24px] h-[24px]' src={TrashOutline} alt='Borrar' />
                                        </button>
                                    </div>
                                </div>
                            ))) : null}
                    </div>

                    <div className='w-full sm:w-[310px] justifi-center md:w-[287px] 2xl:w-1/4 flex-shrink-0' onDragOver={(e) => e.preventDefault()} onDrop={(e) => handleDrop(e, 'rejected')}>
                        <h2 className='text-lg sm:text-xl md:text-2xl h-[40px] sm:h-[48px] font-semibold content-center sm:mb-4 text-white bg-primary-500 font-workSans rounded-lg text-center'>
                            Rechazado
                        </h2>
                        <div className='h-[36px] sm:h-[44px] mt-4 space-y-2 grid justify-items-center border border-gray-300 rounded-md'>
                            <button onClick={() => toggleForm('rejected')}><img className='size-8' src={PlusCircleOutline} alt='Agregar' /></button>
                        </div>
                        {tasks.rejected.length > 0 ? (
                            tasks.rejected.map((task, index) => (
                                <div className='flex w-[287px] h-[107px] p-5 gap-[5px] mt-6 bg-white rounded-lg 2xl:w-full justify-center' key={index} draggable onDragStart={(e) => handleDragStart(e, task, 'rejected')}>
                                    <div className='flex flex-col p-[3px] gap-[3px] w-[212px] h-[67px] items-center'>
                                        <div className='flex w-[137px] h-[30px] justify-start items-center font-workSans font-semibold text-xl'>
                                            {task.cargo}
                                        </div>
                                        <div className='flex w-[137px] h-[30px]  justify-start items-center text-base font-medium'>
                                            {task.nombre_empresa}
                                        </div>
                                    </div>
                                    <div className='flex flex-col justify-between items-center'>
                                        <button onClick={toggleForm}> 
                                            <img className='w-[24px] h-[24px]' src={PencilOutline} alt='Editar' />
                                        </button>
                                        <button onClick={() => deleteTask(task.id, 'rejected')}>
                                            <img className='w-[24px] h-[24px]' src={TrashOutline} alt='Borrar' />
                                        </button>
                                    </div>
                                </div>
                            ))) : null}
                    </div>
                </div>
            </div>

            <button className='fixed bottom-6 right-6 h-16 w-16 border bg-gray-100 rounded-full text-primary-500 text-5xl'>
                i
            </button>
            <TaskTableModal
                isOpen={isModalOpen}
                onConfirm={handleCancel}
                onCancel={closeModal}

            />
        </div>
    )
}

export default TaskTable