import { useForm } from 'react-hook-form'
import { useState } from 'react'
import Modal from './Modal'
import ArrowBackButton from '../_common/ArrowBackButton'

function ResetPassword({ onSubmit }) {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [isSubmitted, setIsSubmitted] = useState(false)

  const onFormSubmit = (data) => {
    setIsSubmitted(true)
    onSubmit(data)
  }

  if (isSubmitted) {
    return <Modal />
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-50'>
      <div className='bg-white p-6 rounded-lg shadow-lg max-w-md w-full'>
        <ArrowBackButton/>
        <h2 className='text-center text-2xl mb-4 font-workSans font-semibold italic text-title-500'> Restablecer contraseña </h2>
        <p className='text-center font-robot text-title-400 mb-8'> Por favor ingresa el correo registrado </p>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-sm font-roboto font-medium text-gray-700'> Correo electrónico
            </label>
            <input
              type='email'
              id='email'
              className={`mt-1 block w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm`}
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
            className='w-full font-workSans font-semibold bg-primary-500 text-white py-2 rounded-full hover:bg-primary-700'
          >
            Continuar
          </button>
        </form>
      </div>
    </div>
  )
}

export default ResetPassword
