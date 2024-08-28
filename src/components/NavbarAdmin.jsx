import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import foto_perfil_figma from '../assets/images/foto_perfil_figma.jpeg'
import logo_academia from '../assets/images/logo_academia.png'
import {
  HomeOutline,
  TrendingUpOutline,
  CalendarOutline,
  ChevronLeftOutline,
  LogoutOutline,
  mdiAccountOutline,
  Menu
} from '../assets/icons'

const NavbarAdmin = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className='flex h-screen  h-[0px]'>
      <nav
        className={`fixed top-0 left-0 bottom-0 right-0 flex flex-col transition-all duration-300 bg-primary-500 text-center text-white ${
          isCollapsed ? 'w-[364px]' : 'w-[135px]'
        }`}
      >
        <div
          className={`p-2 flex  ${
            isCollapsed ? '' : 'items-center justify-center'
          }`}
        >
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className='text-white mt-3'
          >
            {isCollapsed ? (
              <img src={ChevronLeftOutline} alt='flecha izquierda' className='w-[20px] h-[20px]' />
            ) : (
              <img src={Menu} alt='menu' className='w-[28px] h-[24px]' />
            )}
          </button>
        </div>

        <div className={`flex-1 ${isCollapsed ? 'block' : ''}`}>
          <div className='pb-11'>
            <ul>
              <li>
                <Link
                  to='/'
                  className={`flex py-2 px-4 rounded hover:bg-primary-600 ${
                    isCollapsed ? 'pl-8' : 'justify-center'
                  }`}
                >
                  <img src={HomeOutline} alt='home' />
                  {isCollapsed && (
                    <span className='pl-2 pt-1 text-3 font-roboto'>Inicio</span>
                  )}
                </Link>
              </li>
              <li>
                <Link
                  to='/perfiles'
                  className={`flex py-2 px-4 rounded hover:bg-primary-600 ${
                    isCollapsed ? 'pl-8' : 'justify-center'
                  }`}
                >
                  <img src={mdiAccountOutline} alt='perfiles' />
                  {isCollapsed && (
                    <span className='pl-2 pt-1 text-3 font-roboto'>Perfiles</span>
                  )}
                </Link>
              </li>
              <li>
                <Link
                  to='/objetivos'
                  className={`flex py-2 px-4 rounded hover:bg-primary-600 ${
                    isCollapsed ? 'pl-8' : 'justify-center'
                  }`}
                >
                  <img src={TrendingUpOutline} alt='objetivos' />
                  {isCollapsed && (
                    <span className='pl-2 pt-1 text-3 font-roboto'>
                      Objetivos
                    </span>
                  )}
                </Link>
              </li>
              <li>
                <Link
                  to='/actividades'
                  className={`flex py-2 px-4 rounded hover:bg-primary-600 ${
                    isCollapsed ? 'pl-8' : 'justify-center'
                  }`}
                >
                  <img src={CalendarOutline} alt='actividades' />
                  {isCollapsed && (
                    <span className='pl-2 pt-1 text-3 font-roboto'>
                      Actividades
                    </span>
                  )}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={`bg-gray-950 text-white p-4 flex flex-col items-center gap-4 h-[571px] ${
            isCollapsed ? 'flex items-center justify-center' : 'items-center'
          }`}
        >
          <img
            src={foto_perfil_figma}
            alt='Perfil'
            className={`transition-transform duration-300 ${
              isCollapsed ? 'w-[150px] h-[150px]' : 'w-[60px] h-[60px] mt-8'
            } rounded-full border-[5px] border-primary-500`}
          />
          <div>
            {isCollapsed && (
              <span className='text-3 font-sans'>Sergio Muñoz</span>
            )}
            <p
              className={`text-sm text-gray-400 flex items-center justify-center ${
                isCollapsed ? 'mt-2' : ''
              }`}
            >
              <img src={LogoutOutline} alt='cerrar sesion' className='mr-2' />
              {isCollapsed && <span className='fons-roboto text-3'>Cerrar Sesión</span>}
            </p>
          </div>
          <img
            src={logo_academia}
            alt='logo desafio latam'
            className={`transition-transform duration-300 ${
              isCollapsed ? 'w-[141px] h-[49px]' : 'w-[98px] h-[34px]'
            }`}
          />
        </div>
      </nav>
    </div>
  )
}

export default NavbarAdmin
