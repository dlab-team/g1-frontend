import React, { useState } from 'react';

const AddApplication = ({ onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    companyName: '',
    originalUrl: '',
    location: '',
    employmentMode: '',
    jobDescription: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    onClose();
  };

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm'>
        <h2 className='font-semibold text-lg mb-4 text-center sm:text-left'>Agregar Postulación</h2>
        <form onSubmit={handleSubmit} className='space-y-3'>
          <div>
            <label className='block mb-1 text-sm'>Título Profesional</label>
            <input
              type='text'
              name='title'
              placeholder='Título profesional'
              value={formData.title}
              onChange={handleChange}
              className='border border-gray-300 rounded p-2 w-full text-sm'
              required
            />
          </div>
          <div>
            <label className='block mb-1 text-sm'>Nombre de la Compañía</label>
            <input
              type='text'
              name='companyName'
              placeholder='Nombre de la compañía'
              value={formData.companyName}
              onChange={handleChange}
              className='border border-gray-300 rounded p-2 w-full text-sm'
              required
            />
          </div>
          <div>
            <label className='block mb-1 text-sm'>URL de la Publicación Original</label>
            <input
              type='url'
              name='originalUrl'
              placeholder='URL de la publicación original'
              value={formData.originalUrl}
              onChange={handleChange}
              className='border border-gray-300 rounded p-2 w-full text-sm'
              required
            />
          </div>
          <div>
            <label className='block mb-1 text-sm'>Ubicación</label>
            <input
              type='text'
              name='location'
              placeholder='Ubicación'
              value={formData.location}
              onChange={handleChange}
              className='border border-gray-300 rounded p-2 w-full text-sm'
              required
            />
          </div>
          <div>
            <label className='block mb-1 text-sm'>Modalidad de Empleo</label>
            <input
              type='text'
              name='employmentMode'
              placeholder='Modalidad de empleo'
              value={formData.employmentMode}
              onChange={handleChange}
              className='border border-gray-300 rounded p-2 w-full text-sm'
              required
            />
          </div>
          <div>
            <label className='block mb-1 text-sm'>Descripción del Trabajo</label>
            <textarea
              name='jobDescription'
              placeholder='Descripción del trabajo'
              value={formData.jobDescription}
              onChange={handleChange}
              className='border border-gray-300 rounded p-2 w-full text-sm'
              rows='3'
              required
            ></textarea>
          </div>
          <div className='flex justify-end space-x-2'>
            <button
              type='button'
              className='bg-white text-primary-500 py-1 px-3 rounded-full border border-primary-500 text-sm'
              onClick={onClose}
            >
              Cancelar
            </button>
            <button
              type='submit'
              className='bg-primary-500 py-1 px-3 rounded-full text-white text-sm'
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddApplication