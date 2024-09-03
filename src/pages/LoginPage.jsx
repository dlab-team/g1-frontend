import Login from "../components/Login/FormLogin"
import MensajeLogin from "../components/MensajeLogin"

const LoginPage = () => {
  return (
    <div className="fixed w-full h-[1024px] content-center justify-center">
      <div className=" flex ml-auto mr-auto justify-center w-[1299px] h-[716px]">
      <MensajeLogin />
      <Login/>
      </div>
    </div>


  )
}

export default LoginPage