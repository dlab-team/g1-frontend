import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome as HouseIcon } from "react-icons/fa";
import { SlArrowLeft as ArrowLeftIcon } from "react-icons/sl";
import { HiMenu as MenuIcon } from "react-icons/hi";
import { BiLogOut as LogoutIcon, BiBell as BellIcon } from "react-icons/bi";
import {
  HomeOutline,
  TrendingUpOutline,
  CalendarOutline,
  LogoutOutline,
  ChartBarOutline,  
} from '../assets/icons'
import foto_perfil_figma from '../assets/images/foto_perfil_figma.jpeg'
import logo_academia from '../assets/images/logo_academia.png'

const SidebarComponent = () => {
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <div className="flex h-[0px]">
      <nav
        className={`fixed top-0 left-0 bottom-0 flex flex-col transition-all duration-300 bg-primary-500 text-center text-white ${
          isMinimized ? "w-60" : "w-28"
        }`}
      >
        {/* Button to toggle collapse */}
        <div className="p-4 flex items-center justify-center">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="text-white"
          >
            {isMinimized ? <ArrowLeftIcon size={28} /> : <MenuIcon size={28} /> }
          </button>
        </div>

        {/* Sidebar items */}
        <div className={`flex-1 ${isMinimized ? "" : "block"}`}>
          <div className="p-4">
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className={`flex py-2 px-4 rounded hover:bg-primary-600 ${
                    isMinimized ? "" : "justify-center"
                  }`}
                >
                  <img
                    src={HomeOutline}
                    alt="Inicio"
                    className="w-6 h-6 mr-2 fill-current text-white" // Aplica color blanco
                  />
                  {isMinimized && <span>Inicio</span>}
                </Link>
              </li>
              <li>
                <Link
                  to="/goals"
                  className={`flex py-2 px-4 rounded hover:bg-primary-600 ${
                    isMinimized ? "" : "justify-center"
                  }`}
                >
                  <img
                    src={TrendingUpOutline}
                    alt="Objetivos"
                    className="w-6 h-6 mr-2 fill-current text-white" // Aplica color blanco
                  />
                  {isMinimized && <span>Objetivos</span>}
                </Link>
              </li>
              <li>
                <Link
                  to="/tasks"
                  className={`flex py-2 px-4 rounded hover:bg-primary-600 ${
                    isMinimized ? "" : "justify-center"
                  }`}
                >
                  <img
                    src={CalendarOutline}
                    alt="Actividades"
                    className="w-6 h-6 mr-2 fill-current text-white" // Aplica color blanco
                  />
                  {isMinimized && <span>Actividades</span>}
                </Link>
              </li>
              <li>
                <Link
                  to="/analytics"
                  className={`flex py-2 px-4 rounded hover:bg-primary-600 ${
                    isMinimized ? "" : "justify-center"
                  }`}
                >
                  <img
                    src={ChartBarOutline}
                    alt="Métricas"
                    className="w-6 h-6 mr-2 fill-current text-white" // Aplica color blanco
                  />
                  {isMinimized && <span>Métricas</span>}
                </Link>
              </li>
              <li>
                <Link
                  to="/notification"
                  className={`flex py-2 px-4 rounded hover:bg-primary-600 ${
                    isMinimized ? "" : "justify-center"
                  }`}
                >
                  <BellIcon size={28} color="white" className="mr-2" />
                  {isMinimized && <span>Notificaciones</span>}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* User profile, logout, and new image */}
        <div
          className={`bg-gray-950 text-white p-4 flex flex-col items-center gap-4 h-[571px] ${
            isMinimized ? 'flex items-center justify-center' : 'items-center'
          }`}
        >
          <Link to="/profile">
            <img
              src={foto_perfil_figma}
              alt="Perfil"
              className={`transition-transform duration-300 ${
                isMinimized ? "w-[150px] h-[150px]" : "w-[60px] h-[60px] mt-8"
              } rounded-full border-[5px] border-primary-500`}
            />
          </Link>
          <div>
            {isMinimized && (
              <span className='text-3 font-sans'>Sergio Muñoz</span>
            )}
            <p
              className={`text-sm text-gray-400 flex items-center justify-center ${
                isMinimized ? 'mt-2' : ''
              }`}
            >
              <img src={LogoutOutline} alt='cerrar sesion' className='mr-2' />
              {isMinimized && <span className='fons-roboto text-3'>Cerrar Sesión</span>}
            </p>
          </div>
          <img
            src={logo_academia}
            alt='logo desafio latam'
            className={`transition-transform duration-300 ${
              isMinimized ? 'w-[141px] h-[49px]' : 'w-[98px] h-[34px]'
            }`}
          />
        </div>
      </nav>
    </div>
  );
};

export default SidebarComponent;
