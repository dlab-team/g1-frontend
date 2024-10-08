import { useState, useEffect } from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import { CiUser } from 'react-icons/ci'
import SidebarComponent from '../components/Navbar/Sidebar'

const Activities = () => {
  const [users, setUsers] = useState([])
  const ENDPOINT = './FakeDataActivities.json'

  const dateRange = 'Lunes 03 junio, 2024 - Lunes 10 junio, 2024'

  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await fetch(ENDPOINT)
        if (!response.ok) {
          throw new Error('Error al obtener los datos')
        }
        const data = await response.json()
        setUsers(data)
      } catch (error) {
        setError(error.message)
        console.error(error)
      }
    }

    FetchData()
  }, [])

  const GetColorByCategorie = (categorie) => {
    switch (categorie) {
      case 'entrevista' :
        return 'bg-blue-500'
      case 'postulacion' :
        return 'bg-black'
      case 'evento networking':
        return 'bg-secondary-500'
      default:
        return 'bg-black'
    }
  }

  return (
    <div className='flex'>
      <div className='w-16 sm:w-24 md:w-64 fixed left-0 top-0 h-full z-10 bg-white'>
        <SidebarComponent />
      </div>
      <div className='h-screen w-full flex flex-col p-8'>
        <h1 className='text-center font-bold italic text-3xl text-primary-500'>Actividades solo para creación de archivo</h1>
        <div className='w-full flex items-center justify-between pt-6'>
          <div className='flex items-center gap-2'>
            <button className='h-[34px] flex items-center  font-medium border-2 border-gray-300 rounded-md px-3 py-2'>
              <CiUser className='h-[16px] text-500' />
              <p>Tutor Asignado</p>
            </button>
            <button className='h-[34px] flex items-center text-sm font-medium border-2 border-gray-300 rounded-md px-3 py-2'>
              Categoría
            </button>
          </div>
          <p className='text-sm px-3 py-2 border-2 border-gray-300 flex gap-2 items-center justify-between'>
            <FaChevronLeft className='h-[14px] text-500 cursor-pointer' />
            {dateRange}
            <FaChevronLeft className='h-[14px] text-500 cursor-pointer rotate-180' />
          </p>
        </div>
        <div className='flex flex-row pt-6 w-full'>
          <div>
            <table>
              <thead>
                <tr>
                  <th className='w-[329px] flex justify-start border-r-2 border-r-black border-b-2 border-b-gray-300 pl-2 items-center text-xl'>Usuario</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <td key={index} className='w-[329px] flex justify-start items-center pl-3 py-3'>
                    <input type='checkbox' className='mr-2 accent-primary-500' />
                    <p className='flex items-center py-2'>{user.name} {user.lastName}</p>
                  </td>
                ))}
              </tbody>
            </table>
          </div>
          <div className='overflow-x-auto h-full'>
            <table className='min-w-full whitespace-nowrap h-[450px]'>
              <thead>
                <tr className='flex items-center'>
                  <th className='w-[180px] flex items-center justify-start border-r-2 border-r-black border-b-2 border-b-gray-300 pl-2 text-xl'>Categoría</th>
                  <th className='w-[210px] flex items-center justify-start border-r-2 border-r-black border-b-2 border-b-gray-300 pl-2 text-xl'>Título</th>
                  <th className='w-[150px] flex items-center justify-start border-r-2 border-r-black border-b-2 border-b-gray-300 pl-2 text-xl'>Completado</th>
                  <th className='w-[325px] flex items-center justify-start border-r-2 border-r-black border-b-2 border-b-gray-300 pl-2 text-xl'>Título profesional</th>
                  <th className='w-[325px] flex items-center justify-start border-r-2 border-r-black border-b-2 border-b-gray-300 pl-2 text-xl'>Compañía</th>
                  <th className='w-[325px] flex items-center justify-start border-r-2 border-r-black border-b-2 border-b-gray-300 pl-2 text-xl'>Fecha Inicio</th>
                  <th className='w-[325px] flex items-center justify-start border-r-2 border-r-black border-b-2 border-b-gray-300 pl-2 text-xl'>Fecha Creación</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index} className='flex items-center'>
                    <td className='w-[180px] flex items-center justify-start text-white  pl-3 py-3 text-base'><p className={`rounded-lg p-2 ${GetColorByCategorie(user.categorie)}`}>{user.categorie}</p></td>
                    <td className='w-[210px] flex items-center justify-start  pl-3 py-3 text-base'>{user.title}</td>
                    <td className='w-[150px] flex items-center justify-center  pl-3 py-3 text-base'><input className='accent-primary-500' type='checkbox' /></td>
                    <td className='w-[325px] flex items-center justify-start  pl-3 py-3 text-base'>{user.professionalTitle}</td>
                    <td className='w-[325px] flex items-center justify-start  pl-3 py-3 text-base'>{user.company}</td>
                    <td className='w-[325px] flex items-center justify-start  pl-3 py-3 text-base'>{user.dateStart}</td>
                    <td className='w-[325px] flex items-center justify-start  pl-3 py-3 text-base'>{user.dateCreation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button className='absolute bottom-20 right-6 font-workSans font-semibold text-sm text-primary-500 px-4 py-2 border-2 border-gray-300 rounded-full'>
            Descargar
          </button>
        </div>
      </div>
    </div>
  )
}

export default Activities
