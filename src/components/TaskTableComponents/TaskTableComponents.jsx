import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { SearchOutline1, PlusCircleOutline } from '../../assets/icons'
import { ContextApp } from '../../context/ContextApp.jsx'
import TaskTableForm from './TaskTableForm'
import TaskTableModal from './TaskTableModal'

const TaskTable = () => {
  const ENDPOINT = import.meta.env.VITE_API_URL
  const token = window.sessionStorage.getItem('token')
  const { userId } = useContext(ContextApp)

  const [isFormVisible, setIsFormVisible] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({})
  const [tasks, setTasks] = useState(null)

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

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible)
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
    if (!tasks) {
      getTasks(userId)
    } else { console.log(tasks) }
  }, [])

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
          <TaskTableForm onClose={handleCloseForm} onChange={handleFormChange} close={closeModal} />
        </div>
      )}

      <div className='w-full overflow-x-auto h-full pt-6'>
        <div className='flex flex-nowrap space-x-4 md:w-[1290px] 2xl:w-[1760px]'>
          <div className='w-full sm:w-[300px] md:w-[310px] 2xl:w-1/4 flex-shrink-0'>
            <h2 className='text-lg sm:text-xl md:text-2xl h-[40px] sm:h-[48px] font-semibold content-center sm:mb-4 text-white bg-title-500 font-workSans rounded-lg text-center'>
              Lista de deseos
            </h2>
            <div className='h-[36px] sm:h-[44px] mt-4 space-y-2 grid justify-items-center border border-gray-300 rounded-md'>
              <button onClick={toggleForm}><img className='size-8' src={PlusCircleOutline} alt='Agregar' /></button>
            </div>
          </div>

          <div className='w-full sm:w-[300px] md:w-[310px] 2xl:w-1/4 flex-shrink-0'>
            <h2 className='text-lg sm:text-xl md:text-2xl h-[40px] sm:h-[48px] font-semibold content-center sm:mb-4 text-white bg-primary-500 font-workSans rounded-lg text-center'>
              Postulados
            </h2>
            <div className='h-[36px] sm:h-[44px] mt-4 space-y-2 grid justify-items-center border border-gray-300 rounded-md'>
              <button onClick={toggleForm}><img className='size-8' src={PlusCircleOutline} alt='Agregar' /></button>
            </div>
          </div>

          <div className='w-full sm:w-[300px] md:w-[310px] 2xl:w-1/4 flex-shrink-0'>
            <h2 className='text-lg sm:text-xl md:text-2xl h-[40px] sm:h-[48px] font-semibold content-center sm:mb-4 text-white bg-primary-500 font-workSans rounded-lg text-center'>
              Oferta
            </h2>
            <div className='h-[36px] sm:h-[44px] mt-4 space-y-2 grid justify-items-center border border-gray-300 rounded-md'>
              <button onClick={toggleForm}><img className='size-8' src={PlusCircleOutline} alt='Agregar' /></button>
            </div>
          </div>

          <div className='w-full sm:w-[300px] md:w-[310px] 2xl:w-1/4 flex-shrink-0'>
            <h2 className='text-lg sm:text-xl md:text-2xl h-[40px] sm:h-[48px] font-semibold content-center sm:mb-4 text-white bg-primary-500 font-workSans rounded-lg text-center'>
              Rechazado
            </h2>
            <div className='h-[36px] sm:h-[44px] mt-4 space-y-2 grid justify-items-center border border-gray-300 rounded-md'>
              <button onClick={toggleForm}><img className='size-8' src={PlusCircleOutline} alt='Agregar' /></button>
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
