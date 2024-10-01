import Login from '../components/Login/FormLogin'
import MensajeLogin from '../components/Login/MensajeLogin'

const LoginPage = () => {
  return (
    <div className='flex md:items-center justify-center min-h-screen w-full'>
      <div className='flex flex-col md:flex-row w-full max-w-[1200px] h-full max-h-[716px] p-4 md:p-8'>
        <div className='hidden md:flex md:w-1/2 items-center justify-center p-8'>
          <MensajeLogin />
        </div>
        <div className='w-full md:w-1/2 flex items-start md:items-center justify-center mt-4 md:mt-40'>
          <Login />
        </div>
      </div>
    </div>
  )
}

export default LoginPage
