import React, { useState } from 'react'

const ActivityFormPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  }

  return (
    <div className='p-8'>
      <h1 className='text-2xl font-bold mb-4'>Registro de Actividad</h1>
      <form className='space-y-4'>
        <div>
          <label className='block font-medium'>Título</label>
          <input type='text' className='w-full border px-4 py-2 rounded' />
        </div>

        <div>
          <label className='block font-medium'>Categoría *</label>
          <div className='flex space-x-2 mt-2'>
            {(!selectedCategory || selectedCategory === 'Postulación') && (
              <button
                type='button'
                onClick={() => handleCategorySelect('Postulación')}
                className={`px-4 py-1 rounded ${selectedCategory === 'Postulación' ? 'bg-black text-white' : 'bg-gray-200'}`}
              >
                Postulación
              </button>
            )}
            {(!selectedCategory || selectedCategory === 'Evento de Networking') && (
              <button
                type='button'
                onClick={() => handleCategorySelect('Evento de Networking')}
                className={`px-4 py-1 rounded ${selectedCategory === 'Evento de Networking' ? 'bg-yellow-500 text-white' : 'bg-gray-200'}`}
              >
                Evento de Networking
              </button>
            )}
            {(!selectedCategory || selectedCategory === 'Entrevista') && (
              <button
                type='button'
                onClick={() => handleCategorySelect('Entrevista')}
                className={`px-4 py-1 rounded ${selectedCategory === 'Entrevista' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              >
                Entrevista
              </button>
            )}
          </div>
        </div>

        <div>
          <label className='block font-medium'>Fecha de inicio</label>
          <input type='date' className='w-full border px-4 py-2 rounded' />
        </div>

        <div>
          <label className='block font-medium'>Fecha de finalización</label>
          <input type='date' className='w-full border px-4 py-2 rounded' />
        </div>

        <div>
          <label className='block font-medium'>Nota</label>
          <textarea className='w-full border px-4 py-2 rounded' rows='4'></textarea>
        </div>

        <div className='flex items-center'>
          <input type='checkbox' className='mr-2' />
          <label>Marcar como completado</label>
        </div>

        <div className='flex justify-between'>
          <button type='button' className='px-4 py-2 bg-gray-300 rounded'>Deshacer</button>
          <button type='submit' className='px-4 py-2 bg-primary-500 text-white rounded'>Crear</button>
        </div>
      </form>
    </div>
  )
}

export default ActivityFormPage
