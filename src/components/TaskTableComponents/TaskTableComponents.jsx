import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { SearchOutline1, PlusCircleOutline, PencilOutline, TrashOutline } from '../../assets/icons'
import { ContextApp } from '../../context/ContextApp.jsx'
import TaskTableForm from './TaskTableForm'
import TaskTableModal from './TaskTableModal'
import { useNavigate } from 'react-router-dom'

const TaskTable = () => {
  const ENDPOINT = import.meta.env.VITE_API_URL
  const token = window.sessionStorage.getItem('token')
  const { userId } = useContext(ContextApp)
  const navigate = useNavigate()
  const [isFormVisible, setIsFormVisible] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({})
  const [tasks, setTasks] = useState([])
  const [list, setList] = useState(null)

  const filterList = (numberList) => tasks.filter(task => task.lista_id === numberList) || []
  const deseos = filterList('1')
  const postulados = filterList('2')
  const ofertas = filterList('3')
  const rechazados = filterList('4')

  const getTasks = async (id) => {
    const params = { id }
    await axios.get(`${ENDPOINT}/jobs`, { params, headers: { Authorization: `Bearer ${token}` } })
      .then((result) => {
        console.log(result)
        setTasks(result.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  const deleteTask = async (id) => {
    const params = { id }
    await axios.delete(`${ENDPOINT}/jobs`, { params, headers: { Authorization: `Bearer ${token}` } })
      .then((result) => {
        if (result.status === 200) {
          console.log('tarea borrada')
          navigate('/tasks')
        }
      })
      .catch((error) => {
        console.log(error)
        console.error(error)
      })
  }

  const toggleForm = (numberList) => {
    setIsFormVisible(!isFormVisible)
    setList(numberList)
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
    if (isFormVisible && Object.keys(formData).length > 0) {
      openModal()
    } else {
      setIsFormVisible(false)
    }
  }

  const handleFormChange = (newData) => {
    setFormData(newData)
  }

  useEffect(() => {
    if (tasks.length === 0) {
      getTasks(userId)
      console.log(deseos)
    } else { console.log(deseos) }
  }, [tasks])

  return (
    <div className='flex-col w-full p-6'>
      <div className='flex justify-end'>
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
        <div className='fixed inset-0 sm:bg-white sm:bg-opacity-50 z-40' onClick={handleCloseForm} />
      )}
      {isFormVisible && (
        <div className='fixed sm:top-1/2 sm:left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-50 sm:bg-white shadow-lg z-50 p-6 transition-transform duration-500 scale-100 sm:rounded-lg w-[calc(100%-32px)] h-[1024px] left-[calc(50%+38px)] top-1/2 sm:w-[521px] sm:h-[958px]'>
          <TaskTableForm onClose={handleCloseForm} onChange={handleFormChange} onSend={handleCancel} onList={list} />
        </div>
      )}

      <div className='w-full overflow-x-auto h-full pt-6'>
        <div className='flex flex-nowrap space-x-4 md:w-[1290px] 2xl:w-[1760px]'>
          <div className='w-full sm:w-[300px] md:w-[310px] 2xl:w-1/4 flex-shrink-0'>
            <h2 className='text-lg sm:text-xl md:text-2xl h-[40px] sm:h-[48px] font-semibold content-center sm:mb-4 text-white bg-title-500 font-workSans rounded-lg text-center'>
              Lista de deseos
            </h2>
            {tasks && (deseos.map((task) => (
              <div key={task.id} className='bg-white border border-gray-300 rounded-md p-4 flex items-center justify-between shadow-md'>
                {/* Contenido del card */}
                <div className='flex items-center space-x-2'>
                  <div className='text-gray-800 font-semibold'>{task.cargo}</div>
                  <div className='text-sm text-gray-500'>{task.nombre_empresa}</div>
                </div>

                {/* Acciones de editar y eliminar */}
                <div className='flex space-x-2'>
                  <button className='text-gray-500 hover:text-gray-700'>
                    <img
                      src={PencilOutline}
                      alt='Editar'
                      className=' w-5 h-5 sm:w-6 sm:h-6 hover:opacity-50 transition-opacity duration-300 ease-in-out'
                    />
                  </button>
                  <button onClick={() => deleteTask(task.id)} className='text-gray-500 hover:text-red-600'>
                    <img
                      src={TrashOutline}
                      alt='Editar'
                      className=' w-5 h-5 sm:w-6 sm:h-6 hover:opacity-50 transition-opacity duration-300 ease-in-out'
                    />
                  </button>
                </div>
              </div>))
            )}

            <div className='h-[36px] sm:h-[44px] mt-4 space-y-2 grid justify-items-center border border-gray-300 rounded-md'>
              <button onClick={() => toggleForm(1)}><img className='size-8' src={PlusCircleOutline} alt='Agregar' /></button>
            </div>
          </div>

          <div className='w-full sm:w-[300px] md:w-[310px] 2xl:w-1/4 flex-shrink-0'>
            <h2 className='text-lg sm:text-xl md:text-2xl h-[40px] sm:h-[48px] font-semibold content-center sm:mb-4 text-white bg-primary-500 font-workSans rounded-lg text-center'>
              Postulados
            </h2>
            {tasks && (postulados.map((task) => (
              <div key={task.id} className='bg-white border border-gray-300 rounded-md p-4 flex items-center justify-between shadow-md'>
                {/* Contenido del card */}
                <div className='flex items-center space-x-2'>
                  <div className='text-gray-800 font-semibold'>{task.cargo}</div>
                  <div className='text-sm text-gray-500'>{task.nombre_empresa}</div>
                </div>

                {/* Acciones de editar y eliminar */}
                <div className='flex space-x-2'>
                  <button className='text-gray-500 hover:text-gray-700'>
                    <img
                      src={PencilOutline}
                      alt='Editar'
                      className=' w-5 h-5 sm:w-6 sm:h-6 hover:opacity-50 transition-opacity duration-300 ease-in-out'
                    />
                  </button>
                  <button onClick={() => deleteTask(task.id)} className='text-gray-500 hover:text-red-600'>
                    <img
                      src={TrashOutline}
                      alt='Editar'
                      className=' w-5 h-5 sm:w-6 sm:h-6 hover:opacity-50 transition-opacity duration-300 ease-in-out'
                    />
                  </button>
                </div>
              </div>))
            )}
            <div className='h-[36px] sm:h-[44px] mt-4 space-y-2 grid justify-items-center border border-gray-300 rounded-md'>
              <button onClick={() => toggleForm(2)}><img className='size-8' src={PlusCircleOutline} alt='Agregar' /></button>
            </div>
          </div>

          <div className='w-full sm:w-[300px] md:w-[310px] 2xl:w-1/4 flex-shrink-0'>
            <h2 className='text-lg sm:text-xl md:text-2xl h-[40px] sm:h-[48px] font-semibold content-center sm:mb-4 text-white bg-primary-500 font-workSans rounded-lg text-center'>
              Oferta
            </h2>
            {tasks && (ofertas.map((task) => (
              <div key={task.id} className='bg-white border border-gray-300 rounded-md p-4 flex items-center justify-between shadow-md'>
                {/* Contenido del card */}
                <div className='flex items-center space-x-2'>
                  <div className='text-gray-800 font-semibold'>{task.cargo}</div>
                  <div className='text-sm text-gray-500'>{task.nombre_empresa}</div>
                </div>

                {/* Acciones de editar y eliminar */}
                <div className='flex space-x-2'>
                  <button className='text-gray-500 hover:text-gray-700'>
                    <img
                      src={PencilOutline}
                      alt='Editar'
                      className=' w-5 h-5 sm:w-6 sm:h-6 hover:opacity-50 transition-opacity duration-300 ease-in-out'
                    />
                  </button>
                  <button onClick={() => deleteTask(task.id)} className='text-gray-500 hover:text-red-600'>
                    <img
                      src={TrashOutline}
                      alt='Editar'
                      className=' w-5 h-5 sm:w-6 sm:h-6 hover:opacity-50 transition-opacity duration-300 ease-in-out'
                    />
                  </button>
                </div>
              </div>))
            )}
            <div className='h-[36px] sm:h-[44px] mt-4 space-y-2 grid justify-items-center border border-gray-300 rounded-md'>
              <button onClick={() => toggleForm(3)}><img className='size-8' src={PlusCircleOutline} alt='Agregar' /></button>
            </div>
          </div>

          <div className='w-full sm:w-[300px] md:w-[310px] 2xl:w-1/4 flex-shrink-0'>
            <h2 className='text-lg sm:text-xl md:text-2xl h-[40px] sm:h-[48px] font-semibold content-center sm:mb-4 text-white bg-primary-500 font-workSans rounded-lg text-center'>
              Rechazado
            </h2>
            {tasks && (rechazados.map((task) => (
              <div key={task.id} className='bg-white border border-gray-300 rounded-md p-4 flex items-center justify-between shadow-md'>
                {/* Contenido del card */}
                <div className='flex items-center space-x-2'>
                  <div className='text-gray-800 font-semibold'>{task.cargo}</div>
                  <div className='text-sm text-gray-500'>{task.nombre_empresa}</div>
                </div>

                {/* Acciones de editar y eliminar */}
                <div className='flex space-x-2'>
                  <button className='text-gray-500 hover:text-gray-700'>
                    <img
                      src={PencilOutline}
                      alt='Editar'
                      className=' w-5 h-5 sm:w-6 sm:h-6 hover:opacity-50 transition-opacity duration-300 ease-in-out'
                    />
                  </button>
                  <button onClick={() => deleteTask(task.id)} className='text-gray-500 hover:text-red-600'>
                    <img
                      src={TrashOutline}
                      alt='Editar'
                      className=' w-5 h-5 sm:w-6 sm:h-6 hover:opacity-50 transition-opacity duration-300 ease-in-out'
                    />
                  </button>
                </div>
              </div>))
            )}
            <div className='h-[36px] sm:h-[44px] mt-4 space-y-2 grid justify-items-center border border-gray-300 rounded-md'>
              <button onClick={() => toggleForm(4)}><img className='size-8' src={PlusCircleOutline} alt='Agregar' /></button>
            </div>
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
