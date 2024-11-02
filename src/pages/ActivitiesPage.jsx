import { useState, useEffect } from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import { CiUser } from 'react-icons/ci'
import SidebarComponent from '../components/Navbar/Sidebar'

const Activities = () => {
  const [activities, setActivities] = useState([])
  const [error, setError] = useState(null); // Se añadió el estado error
  const ENDPOINT = './FakeDataActivities.json'

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(ENDPOINT)
        if (!response.ok) {
          throw new Error('Error al obtener los datos')
        }
        const data = await response.json()
        setActivities(data)
      } catch (error) {
        setError(error.message)
        console.error(error)
      }
    }

    fetchData()
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
    <div className='flex h-screen'>
      <div className='w-16 sm:w-24 fixed left-0 top-0 h-full z-10 bg-white'>
        <SidebarComponent />
      </div>
      <div className='h-screen w-full flex flex-col p-8 ml-16 sm:ml-24'>
        <h1 className='text-left font-bold text-2xl mb-4'>Actividades</h1>
        
        {/* Filtros */}
        <div className='flex justify-between items-center'>
          <div className='flex space-x-2'>
            <button className='px-4 py-1 bg-green-200 text-green-700 rounded'>Todo</button>
            <button className='px-4 py-1 border border-gray-300 text-gray-500 rounded'>15 Postulaciones</button>
            <button className='px-4 py-1 border border-gray-300 text-gray-500 rounded'>5 Entrevistas</button>
            <button className='px-4 py-1 border border-gray-300 text-gray-500 rounded'>2 Eventos de Networking</button>
          </div>
          <button className='bg-green-500 text-white px-4 py-2 rounded-full'>Objetivo</button>
        </div>

        {/* Tabla */}
        <div className='mt-6 overflow-x-auto'>
        <table className='min-w-full whitespace-nowrap h-[450px]'>
  <thead>
    <tr className='flex items-center'>
      <th className='w-[180px] flex items-center justify-start border-r-2 border-r-gray-700 border-b-2 border-b-gray-300 pl-2 text-xl'>Categoría</th>
      <th className='w-[210px] flex items-center justify-start border-r-2 border-r-gray-700 border-b-2 border-b-gray-300 pl-2 text-xl'>Título</th>
      <th className='w-[150px] flex items-center justify-start border-r-2 border-r-gray-700 border-b-2 border-b-gray-300 pl-2 text-xl'>Completado</th>
      <th className='w-[325px] flex items-center justify-start border-r-2 border-r-gray-700 border-b-2 border-b-gray-300 pl-2 text-xl'>Título profesional</th>
      <th className='w-[325px] flex items-center justify-start border-r-2 border-r-gray-700 border-b-2 border-b-gray-300 pl-2 text-xl'>Compañía</th>
      <th className='w-[325px] flex items-center justify-start border-r-2 border-r-gray-700 border-b-2 border-b-gray-300 pl-2 text-xl'>Fecha Inicio</th>
      <th className='w-[325px] flex items-center justify-start border-r-2 border-r-gray-700 border-b-2 border-b-gray-300 pl-2 text-xl'>Fecha Creación</th>
    </tr>
  </thead>
  <tbody>
    {users.map((user, index) => (
      <tr key={index} className='flex items-center'>
        <td className='w-[180px] flex items-center justify-start text-white pl-3 py-3 text-base'><p className={`rounded-lg p-2 ${GetColorByCategorie(user.categorie)}`}>{user.categorie}</p></td>
        <td className='w-[210px] flex items-center justify-start border-r-2 border-r-gray-700 pl-3 py-3 text-base'>{user.title}</td>
        <td className='w-[150px] flex items-center justify-center border-r-2 border-r-gray-700 pl-3 py-3 text-base'><input className='accent-primary-500' type='checkbox' /></td>
        <td className='w-[325px] flex items-center justify-start border-r-2 border-r-gray-700 pl-3 py-3 text-base'>{user.professionalTitle}</td>
        <td className='w-[325px] flex items-center justify-start border-r-2 border-r-gray-700 pl-3 py-3 text-base'>{user.company}</td>
        <td className='w-[325px] flex items-center justify-start border-r-2 border-r-gray-700 pl-3 py-3 text-base'>{user.dateStart}</td>
        <td className='w-[325px] flex items-center justify-start pl-3 py-3 text-base'>{user.dateCreation}</td>
      </tr>
    ))}
  </tbody>
</table>

        </div>

        <button className='fixed bottom-10 right-10 bg-primary-500 text-white px-4 py-2 rounded-full'>
          Descargar
        </button>
      </div>
    </div>
  )
}

export default Activities
