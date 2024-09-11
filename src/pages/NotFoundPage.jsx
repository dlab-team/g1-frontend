import ButtonRegresar from '../components/404Components/ButtonBack'
import Image404 from '../components/404Components/Image404'
import Message404 from '../components/404Components/Message404'
import SidebarComponent from '../components/Navbar/Sidebar.jsx'

const Error404Page = () => {
  return (
    <div className='layout__container flex flex-col items-center h-screen desktop:items-start desktop:grid grid-cols-5'>
      <SidebarComponent />
      <div className='message__button__container desktop:mt-[15.37rem] desktop:col-start-1 col-end-3 justify-self-end  '>
        <Message404 />
        <div className='buttonDesk__container hidden desktop:flex justify-center mt-5 '>
          <ButtonRegresar />
        </div>
      </div>
      <div className='img__container col-start-3 desktop:col-end-6 desktop:justify-self-start '>
        <Image404 />
        <div className='buttonMob__container flex justify-center desktop:hidden'>
          <ButtonRegresar />
        </div>
      </div>
    </div>
  )
}

export default Error404Page
