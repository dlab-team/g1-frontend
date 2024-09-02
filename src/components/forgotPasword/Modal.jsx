import { useNavigate } from 'react-router-dom'

const Modal = () => {
  const navigate = useNavigate()

  const handleBackToLogin = () => {
    navigate('/login')
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100 '>
      <div className='p-[10px] bg-gray'>

        <div className='bg-white w-[315px] h-[207px] tablet:w-[461px] tablet:h-[212px] flex flex-col justify-center items- text-center p-0 rounded-lg'>
          <p className=' text-[16px] tablet:text-[20px] mb-4'>
            Hemos enviado un enlace a tu correo electrónico.
            <br />
            Por favor verifica la bandeja de entrada
          </p>
          <button onClick={handleBackToLogin} className='font-workSans w-[287px] h-[48px] font-semibold text-[20px] mx-auto bg-primary-500 text-white py-2 px-4 rounded-full tablet:w-72 tablet:h-12 hover:bg-primary-700'>
            Aceptar
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
