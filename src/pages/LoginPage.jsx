import Login from '../components/Login/FormLogin'
import MensajeLogin from '../components/Login/MensajeLogin'
import logoAcademia from '../assets/images/logo_academia.png'

const LoginPage = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen w-full bg-gray-200'>
      <div className='w-full max-w-[1200px] p-4 md:p-8'>
        <div className='flex flex-col md:flex-row items-center justify-center'>
          <img
            src={logoAcademia}
            alt='Logo Academia'
            className='mb-4 md:mb-0 md:mr-8 bg-gray-200 p-4 rounded'
          />
          <div className='flex flex-col md:flex-row w-full h-full max-h-[716px]'>
            <div className='hidden md:flex md:w-1/2 items-center justify-center p-8'>
              <MensajeLogin />
            </div>
            <div className='w-full md:w-1/2 flex items-start md:items-center justify-center mt-4 md:mt-40'>
              <Login />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
