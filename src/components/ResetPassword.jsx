import { FaChevronLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import Modal from './Modal'

function ResetPassword({ onSubmit }) {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleBackToLogin = () => {
    navigate('/Login')
  }

  const onFormSubmit = (data) => {
    setIsSubmitted(true)
    onSubmit(data)
  }

  if (isSubmitted) {
    return <Modal />
  }

  return (
    <div className='flex items-center justify min-h-screen bg-gray-50'>
      <div className='bg-white p-6 rounded-lg shadow-lg max-w-md w-full'>
        <button className='text-gray-600 mb-4' onClick={handleBackToLogin}>
          <FaChevronLeft size={24} />
        </button>
        <h2 className='text-center text-2xl font-workSans text-gray-900'> Restablecer contraseña </h2>
        <p className='text-center font-roboto text-gray-500 mb-6'> Por favor ingresa el correo registrado </p>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-sm font-roboto text-gray-700'> Correo electrónico
            </label>
            <input
              type='email'
              id='email'
              className={`mt-1 block w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm`}
              {...register('email', {
                required: 'El correo electrónico es obligatorio',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Correo electrónico inválido'
                }
              })}
            />
            {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email.message}</p>}
          </div>
          <button
            type='submit'
            className='w-full font-workSans bg-primary-500 text-white py-2 rounded-full hover:bg-primary-700'
          >
            Continuar
          </button>
        </form>
      </div>
    </div>
  )
}

export default ResetPassword
