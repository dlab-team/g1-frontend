import { useState, useEffect } from 'react';
import SidebarComponent from '../components/Navbar/Sidebar';
import { FaEdit, FaCalendarAlt, FaTrash } from 'react-icons/fa';
import ActivityFormModal from '../components/ActivitiesComponents/ActivityFormPage'

const ActivitiesPage = () => {
  const [activities, setActivities] = useState([]);
  const [completedActivities, setCompletedActivities] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const ENDPOINT = './FakeDataActivities.json';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(ENDPOINT);
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        const data = await response.json();
        setActivities(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData()
  }, [])

  const handleComplete = (index) => {
    setCompletedActivities((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  }

  const GetColorByCategorie = (categorie) => {
    switch (categorie.toLowerCase()) {
      case 'entrevista':
        return 'bg-blue-500'
      case 'postulacion':
        return 'bg-black'
      case 'evento networking':
        return 'bg-secondary-500'
      default:
        return 'bg-gray-500'
    }
  }

  return (
    <div className='flex h-screen'>
      <div className='w-16 sm:w-24 fixed left-0 top-0 h-full z-10 bg-white'>
        <SidebarComponent />
      </div>
      <div className='h-screen w-full flex flex-col p-4 sm:p-8 ml-16 sm:ml-24'>
        <h1 className='text-left font-bold text-2xl mb-4'>Actividades</h1>

        <div className='flex justify-between items-center mb-4'>
          <div className='flex space-x-2'>
            <button className='px-4 py-1 bg-primary-500 text-white rounded'>Todo</button>
            <button className='px-4 py-1 border border-gray-300 text-gray-500 rounded'>15 Postulaciones</button>
            <button className='px-4 py-1 border border-gray-300 text-gray-500 rounded'>5 Entrevistas</button>
            <button className='px-4 py-1 border border-gray-300 text-gray-500 rounded'>2 Eventos de Networking</button>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className='bg-primary-500 text-white px-4 py-2 rounded-full flex items-center space-x-2'
          >
            <span>+ Objetivo</span>
          </button>
        </div>

        <div className='overflow-x-auto'>
          <table className='min-w-full whitespace-nowrap'>
            <thead>
              <tr className='bg-gray-100'>
                <th className='px-4 py-2 text-left border-b'>Objetivo</th>
                <th className='px-4 py-2 text-left border-b'>Compañía</th>
                <th className='px-4 py-2 text-left border-b'>Cargo</th>
                <th className='px-4 py-2 text-left border-b'>Categoría</th>
                <th className='px-4 py-2 text-left border-b'>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((activity, index) => (
                <tr
                  key={index}
                  className={`hover:bg-gray-50 ${completedActivities.includes(index) ? 'line-through text-gray-400' : ''}`}
                >
                  <td className='px-4 py-2 border-b flex items-center'>
                    <input
                      type='checkbox'
                      checked={completedActivities.includes(index)}
                      onChange={() => handleComplete(index)}
                      className='mr-2'
                    />
                    {activity.title}
                    {completedActivities.includes(index) && (
                      <span className='ml-2 bg-primary-500 text-white px-2 py-1 rounded text-xs'>Completado</span>
                    )}
                  </td>
                  <td className='px-4 py-2 border-b'>{activity.company}</td>
                  <td className='px-4 py-2 border-b'>{activity.professionalTitle}</td>
                  <td className='px-4 py-2 border-b'>
                    <span className={`px-2 py-1 text-white rounded ${GetColorByCategorie(activity.categorie)}`}>
                      {activity.categorie}
                    </span>
                  </td>
                  <td className='px-4 py-2 border-b flex items-center space-x-2'>
                    {completedActivities.includes(index) && (
                      <>
                        <button className='text-green-500'>
                          <FaCalendarAlt />
                        </button>
                        <button className='text-red-500'>
                          <FaTrash />
                        </button>
                      </>
                    )}
                    <button className='text-blue-500'>
                      <FaEdit />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button className='fixed bottom-10 right-10 bg-primary-500 text-white px-4 py-2 rounded-full'>
          Descargar
        </button>

        {showModal && <ActivityFormModal onClose={() => setShowModal(false)} />}
      </div>
    </div>
  )
}

export default ActivitiesPage
