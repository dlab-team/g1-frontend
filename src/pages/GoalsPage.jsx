import React from 'react'
import SidebarComponent from '../components/Navbar/Sidebar'
import { ChevronLeftOutline, ChevronRightOutline } from '../assets/icons/index'

const GoalsPage = () => {
  return (
    <div className='flex'>
      {/* Sidebar fijo a la izquierda */}
      <div className='fixed left-0 top-0 h-full z-10'>
        <SidebarComponent />
      </div>

      {/* Contenido principal con margen izquierdo para el sidebar */}
      <div className='flex-1 ml-16 sm:ml-20 md:ml-48 p-4 md:p-8 max-w-full'>
        <div className='mb-6 ml-10 pb-4 border-b border-gray-200'>
          <h1 className='font-workSans italic text-2xl sm:text-3xl font-semibold text-left truncate'>
            Objetivos
          </h1>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
          {['Crear 5 postulaciones semanales', 'Asistir a 5 Eventos de Networking'].map((title, index) => (
            <div key={index} className='flex flex-col items-center border border-gray-200 rounded-lg p-4 md:p-6 w-full'>
              <h2 className='font-workSans italic text-lg font-semibold mb-4 text-left w-full truncate'>
                {title}
              </h2>
              <p className='font-workSans font-semibold py-6 md:py-8 text-center'>
                Aún no te han asignado objetivos!
              </p>
              <div className='flex items-center'>
                <img src={ChevronLeftOutline} alt='SVG-left' className='w-4 h-4 md:w-5 md:h-5' />
                <p className='mx-2 font-semibold font-roboto text-sm'>Cumplimiento Semanal</p>
                <img src={ChevronRightOutline} alt='SVG-right' className='w-4 h-4 md:w-5 md:h-5' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GoalsPage
