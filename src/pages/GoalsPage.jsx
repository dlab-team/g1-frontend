import SidebarComponent from '../components/Navbar/Sidebar'
import { ChevronLeftOutline, ChevronRightOutline } from '../assets/icons/index'

const GoalsPage = () => {
  return (
    <>
      <SidebarComponent />
      <div className='p-4 max-w mx-48'>
        <div className='mb-4 border-b border-gray-200 pb-4'>
          <h1 className='font-workSans italic text-3xl font-semibold text-left'>
            Objetivos
          </h1>
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <div className='flex flex-col items-center border border-gray-200 rounded-lg p-6 w-full'>
            <h2 className='font-workSans italic text-lg font-semibold mb-4 text-left'>
              Crear 5 postulaciones semanales
            </h2>
            <p className='font-workSans font-semibold pb-12 pt-12'>
              Aún no te han asignado objetivos!
            </p>
            <div className='flex items-center'>
              <img src={ChevronLeftOutline} alt='SVG-left' />
              <p className='ml-2 font-semibold font-roboto'>Cumplimiento Semanal</p>
              <img src={ChevronRightOutline} alt='SVG-right' />
            </div>
          </div>
          <div className='flex flex-col items-center border border-gray-200 rounded-lg p-6 w-full'>
            <h2 className='font-workSans italic text-lg font-semibold mb-4 text-left'>
              Asistir a 5 Eventos de Networking
            </h2>
            <p className='font-workSans font-semibold pb-12 pt-12'>
              Aún no te han asignado objetivos!
            </p>
            <div className='flex items-center'>
              <img src={ChevronLeftOutline} alt='SVG-left' />
              <p className='ml-2 font-semibold font-roboto'>Cumplimiento Semanal</p>
              <img src={ChevronRightOutline} alt='SVG-right' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GoalsPage
