import React, { useState, useContext } from 'react'
import { ChevronLeftOutline } from '../../assets/icons'
import { ContextApp } from '../../context/ContextApp.jsx'
import axios from 'axios'

const TaskTableForm = ({ onClose, onChange, onSend, onList }) => {
  const ENDPOINT = import.meta.env.VITE_API_URL
  const token = window.sessionStorage.getItem('token')
  const { userId } = useContext(ContextApp)
  const [formData, setFormData] = useState({
    title: '',
    companyName: '',
    url: '',
    location: 'local',
    jobType: 'presencial',
    description: '',
    user: userId,
    list: onList
  })
  const posTasks = async (task) => {
    await axios.post(`${ENDPOINT}/jobs`, { task }, { headers: { Authorization: `Bearer ${token}` } })
      .then((result) => {
        if (result.status === 200) {
          console.log('tarea subida')
          onSend()
        }
      })
      .catch((error) => {
        console.log(error)
        console.error(error)
      })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Datos enviados:', JSON.stringify(formData, null, 2))
    posTasks(formData)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    onChange({ ...formData, [name]: value })
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col sm:p-2'>
      <div className='flex sm:flex-col'>
        <button onClick={onClose} className='mb-4'>
          <img src={ChevronLeftOutline} alt='flecha izquierda' className='size-8 sm:size-10' />
        </button>
        <h1 className='text-center text-2xl ml-1 sm:ml-0 sm:text-4xl font-workSans italic'>Agregar Postulación</h1>
      </div>
      <div className='sm:w-[461px] sm:h-[90px] mt-5'>
        <label className='block mb-2 mt-4 sm:mt-0 font-roboto font-medium'>Título Profesional</label>
        <input
          type='text'
          name='title'
          placeholder='Título'
          value={formData.title}
          onChange={handleInputChange}
          className='border border-primary-500 p-2 w-full rounded-md bg-gray-50 sm:bg-white'
        />
      </div>
      <div className='sm:w-[461px] sm:h-[90px]'>
        <label className='block mb-2 mt-4 sm:mt-0 font-roboto font-medium'>Nombre de la Compañía</label>
        <input
          type='text'
          name='companyName'
          placeholder='Nombre de la Compañía'
          value={formData.companyName}
          onChange={handleInputChange}
          className='border border-primary-500 p-2 w-full rounded-md bg-gray-50 sm:bg-white'
        />
      </div>
      <div className='flex-shrink-0 sm:w-[461px] sm:h-[90px]'>
        <label className='block mb-2 mt-4 sm:mt-0 font-roboto font-medium'>URL de la Publicación Original</label>
        <input
          type='url'
          name='url'
          placeholder='URL'
          value={formData.url}
          onChange={handleInputChange}
          className='border border-primary-500 p-2 w-full rounded-md bg-gray-50 sm:bg-white'
        />
      </div>
      <div className='flex-shrink-0 sm:w-[461px] sm:h-[90px]'>
        <label className='block mb-2 mt-4 sm:mt-0 font-roboto font-medium'>Ubicación</label>
        <select
          name='location'
          value={formData.location}
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
          name='jobType'
          value={formData.jobType}
          onChange={handleInputChange}
          className='border border-primary-500 p-2 w-full rounded-md bg-gray-50 sm:bg-white'
        >
          <option value='presencial'>Presencial</option>
          <option value='hibrido'>Híbrido</option>
        </select>
      </div>
      <div className='flex-shrink-0 sm:w-[461px] sm:h-[218px]'>
        <label className='block mb-2 mt-4 sm:mt-0 font-roboto font-medium'>Descripción del trabajo</label>
        <textarea
          name='description'
          className='border border-primary-500 p-2 w-full h-[100px] rounded-md bg-gray-50 sm:bg-white'
          placeholder='Descripción del Puesto'
          value={formData.description}
          onChange={handleInputChange}
        />
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
