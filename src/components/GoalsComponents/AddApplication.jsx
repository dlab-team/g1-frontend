import { useState } from 'react'

const AddApplication = ({ onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    companyName: '',
    originalUrl: '',
    location: '',
    employmentMode: '',
    jobDescription: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    onClose()
  }

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='bg-white p-6 rounded-lg shadow-lg w-96'>
        <h2 className='font-semibold text-lg mb-4'>Agregar Postulación</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block mb-2'>Título Profesional</label>
            <input
              type='text'
              name='title'
              placeholder='Título profesional'
              value={formData.title}
              onChange={handleChange}
              className='border border-gray-300 rounded p-2 w-full'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block mb-2'>Nombre de la Compañía</label>
            <input
              type='text'
              name='companyName'
              placeholder='Nombre de la compañía'
              value={formData.companyName}
              onChange={handleChange}
              className='border border-gray-300 rounded p-2 w-full'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block mb-2'>URL de la Publicación Original</label>
            <input
              type='url'
              name='originalUrl'
              placeholder='URL de la publicación original'
              value={formData.originalUrl}
              onChange={handleChange}
              className='border border-gray-300 rounded p-2 w-full'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block mb-2'>Ubicación</label>
            <input
              type='text'
              name='location'
              placeholder='Ubicación'
              value={formData.location}
              onChange={handleChange}
              className='border border-gray-300 rounded p-2 w-full'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block mb-2'>Modalidad de Empleo</label>
            <input
              type='text'
              name='employmentMode'
              placeholder='Modalidad de empleo'
              value={formData.employmentMode}
              onChange={handleChange}
              className='border border-gray-300 rounded p-2 w-full'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block mb-2'>Descripción del Trabajo</label>
            <textarea
              name='jobDescription'
              placeholder='Descripción del trabajo'
              value={formData.jobDescription}
              onChange={handleChange}
              className='border border-gray-300 rounded p-2 w-full'
              rows='4'
              required
            >
            </textarea>
          </div>
          <div className='flex justify-end'>
            <button type='button' className='bg-white text-primary-500 py-2 px-4 rounded-full mr-2  border-primary-500' onClick={onClose}>
              Cancelar
            </button>
            <button type='submit' className='bg-primary-500 py-2 px-4 rounded-full text-white'>
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddApplication
