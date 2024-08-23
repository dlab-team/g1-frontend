import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineCalendar as CalendarIcon,
  AiOutlineRise as RiseIcon,
  AiOutlinePieChart as PieChartIcon,
} from "react-icons/ai";
import { FaHouse as HouseIcon } from "react-icons/fa6";
import { SlArrowLeft as ArrowLeftIcon } from "react-icons/sl";
import { HiMenu as MenuIcon } from "react-icons/hi";
import { BiLogOut as LogoutIcon, BiBell as BellIcon } from "react-icons/bi";

const SidebarComponent = () => {
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <div className="flex h-screen">
      <nav
        className={`fixed top-0 left-0 bottom-0 flex flex-col transition-all duration-300 bg-primary-500 text-center text-white ${
          isMinimized ? "w-28" : "w-64"
        }`}
      >
        {/* Button to toggle collapse */}
        <div className="p-4 flex items-center justify-center">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="text-white"
          >
            {isMinimized ? <MenuIcon size={28} /> : <ArrowLeftIcon size={28} />}
          </button>
        </div>

        {/* Sidebar items */}
        <div className={`flex-1 ${isMinimized ? "block" : ""}`}>
          <div className="p-4">
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className={`flex py-2 px-4 rounded hover:bg-primary-600 ${
                    isMinimized ? "justify-center" : ""
                  }`}
                >
                  <HouseIcon size={28} className="mr-2" />
                  {!isMinimized && <span>Inicio</span>}
                </Link>
              </li>
              <li>
                <Link
                  to="/goals"
                  className={`flex py-2 px-4 rounded hover:bg-primary-600 ${
                    isMinimized ? "justify-center" : ""
                  }`}
                >
                  <RiseIcon size={28} className="mr-2" />
                  {!isMinimized && <span>Objetivos</span>}
                </Link>
              </li>
              <li>
                <Link
                  to="/tasks"
                  className={`flex py-2 px-4 rounded hover:bg-primary-600 ${
                    isMinimized ? "justify-center" : ""
                  }`}
                >
                  <CalendarIcon size={28} className="mr-2" />
                  {!isMinimized && <span>Actividades</span>}
                </Link>
              </li>
              <li>
                <Link
                  to="/analytics"
                  className={`flex py-2 px-4 rounded hover:bg-primary-600 ${
                    isMinimized ? "justify-center" : ""
                  }`}
                >
                  <PieChartIcon size={28} className="mr-2" />
                  {!isMinimized && <span>Métricas</span>}
                </Link>
              </li>
              <li>
                <Link
                  to="/alerts"
                  className={`flex py-2 px-4 rounded hover:bg-primary-600 ${
                    isMinimized ? "justify-center" : ""
                  }`}
                >
                  <BellIcon size={28} className="mr-2" />
                  {!isMinimized && <span>Notificaciones</span>}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* User profile, logout, and new image */}
        <div
          className={`bg-gray-950 text-white p-4 flex flex-col items-center gap-4 h-1/2 ${
            isMinimized
              ? "items-center justify-center"
              : "items-center justify-center"
          }`}
        >
          <img
            src="https://s3-alpha-sig.figma.com/img/468e/d6f6/64cb8642834542644812a45bcb3f979e?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cUzgQeVvfNJrTxZ8HHdbaHjkic4QhMRAAHqr~hrl12f1OZwQMJysqeGWY2uk~oU84~n6vfufzimZ-SNYSCNokrbEl6IHguetD6I-7uc0ubmE7GEHzVQsbKaZMvXBrsSe3e-92dZL51ksJwJEPKhPxyRdG2qn5rk8ZBMg5wj8X4uuBryAUMSX2eQx9yXSdysbUA3mK0s~2dKZgsngf6w1lb2LNaBo9UTkdEvwxhDE-TdhOuCOujpEphrKqseeeUze~NyXm13-FHMjx6Qbx6L9EQOD~mwlf53WvG3aKS4wL8YFfa5WeCNyx5T7lxoods-ITAbHQhxCR36op~Rc7kGL2Q__"
            alt="Profile"
            className={`transition-transform duration-300 ${
              isMinimized ? "w-20 h-20" : "w-28 h-28"
            } rounded-full border-4 border-primary-500`}
          />
          <div className="text-center">
            {!isMinimized && (
              <p className="text-lg font-semibold">Sergio Muñoz</p>
            )}
            <p
              className={`text-sm text-gray-400 flex items-center ${
                isMinimized ? "justify-center" : ""
              }`}
            >
              <LogoutIcon size={28} className="mr-2" />
              {!isMinimized && <span>Cerrar sesión</span>}
            </p>
          </div>

          {/* Image below the logout section */}
          <img
            src="https://s3-alpha-sig.figma.com/img/1bd6/8f3d/7f478ff092e943624a751dad2ce6c5cc?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BvD4zZToYr3poUBn5ydUTezySmabI3tFmV0x6SDnaYCW7RuS5qBj~sxP~lfh6fBxqXBttxcCsHRMj5b2rrPqzPP8yJ2wg55j7zsKHF2fSEbbfw579Pt0TUHwmztiCmEJBGVCRsSFqKGwgP4aWPj2u18dGBciwSJsMcf0qQ8Vf7cdOow6p1aIhNlmFBlOg6-Z7KieKaPGwN7RPOU3TqSzpoU5v0UHqXvWMsIu38NgXcGtTb5QGOxsCicXbgnWFSspxcuF8a7iW0bwuyvqt7GLwk-UHE5N~S2PnhrpqYZz1bF8guZR7d3~HlxN3o5qvmG0ttFDE-oy4K3mR-NQkQwl9w__"
            alt="Desafio latam"
            className="mt-4 w-20 h-15"
          />
        </div>
      </nav>
    </div>
  );
};

export default SidebarComponent;
