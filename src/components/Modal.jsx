import { FaChevronLeft } from 'react-icons/fa'

const Modal = () => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100 relative'>
      <div className='p-6 max-w-sm bg-gray'>
        <FaChevronLeft className='h-6 text-gray-400' />
        <h2 className='text-title-300 text-2xl text-center font-semibold mb-2'>
          Restablecer contraseña
        </h2>
        <p className='text-title-100 text-sm text-center'>
          Por favor ingresa el correo registrado
        </p>
        <div className='bg-white text-left p-8 rounded-lg'>
          <p className='text-sm lg:text-xs mb-4'>
            Hemos enviado un enlace a tu correo electrónico.
            <br />
            Por favor verifica la bandeja de entrada
          </p>
          <button className='  mx-auto flex justify-center bg-primary-500 text-white py-2 px-4 rounded-full w-48'>
            Aceptar
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
