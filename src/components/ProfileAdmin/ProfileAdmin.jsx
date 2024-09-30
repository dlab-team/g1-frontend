import React, { useState } from 'react'
import { RiAccountBoxLine, RiSearchLine } from 'react-icons/ri'

const profiles = [
  { name: 'Sebastian Muñoz', email: 'sebastianu23@gmail.com', lastTime: 'Hace 5 horas', tutor: 'Francisco Montero', totalCards: 18, applications: 18, interviews: 5, offers: 2, completion: 100 },
  { name: 'Luciano Rodríguez', email: 'LucaSanz97@gmail.com', lastTime: 'Hace 2 meses', tutor: 'Francisco Montero', totalCards: 10, applications: 10, interviews: 0, offers: 0, completion: 20 },
  { name: 'Julian Ortiz', email: 'ortijulian@hotmail.com', lastTime: 'Hace 5 días', tutor: 'Francisco Montero', totalCards: 5, applications: 5, interviews: 1, offers: 0, completion: 80 },
  { name: 'Sebastian Araya', email: 'arrayaseb78@gmail.com', lastTime: 'Hace 5 horas', tutor: 'Francisco Montero', totalCards: 22, applications: 22, interviews: 6, offers: 1, completion: 100 },
  { name: 'Alfredo Acosta', email: 'alfredoa91@hotmail.es', lastTime: 'Hace 11 días', tutor: 'Francisco Montero', totalCards: 11, applications: 11, interviews: 2, offers: 1, completion: 25 },
  { name: 'Camila Villegas', email: 'camilavila93@hotm.es', lastTime: 'Hace 3 días', tutor: 'Francisco Montero', totalCards: 5, applications: 5, interviews: 0, offers: 0, completion: 10 }
]

const ProfileAdmin = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredTutor, setFilteredTutor] = useState(false)

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleFilterTutor = () => {
    setFilteredTutor(!filteredTutor)
  }

  const filteredProfiles = profiles.filter((profile) => {
    const matchesSearch = profile.name.toLowerCase().includes(searchTerm.toLowerCase()) || profile.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesTutor = filteredTutor ? profile.tutor === 'Francisco Montero' : true
    return matchesSearch && matchesTutor
  })

  return (
    <div className='p-6 relative'>
      <h1 className='text-2xl font-workSans text-primary-500 text-center mb-6'>Perfiles</h1>

      <div className='flex justify-between mb-4'>
        <button
          className='bg-gray-100 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded flex items-center'
          onClick={handleFilterTutor}
        >
          <RiAccountBoxLine size={24} className='mr-2' />
          {filteredTutor ? 'Mostrar Todos' : 'Tutor Asignado'}
        </button>

        <div className='relative'>
          <input
            type='text'
            placeholder='Buscar por nombre o correo'
            className='px-4 py-2 border rounded w-64 pl-10'
            value={searchTerm}
            onChange={handleSearch}
          />
          <RiSearchLine className='absolute left-3 top-2.5 text-gray-500' />
        </div>
      </div>

      <div className='overflow-x-auto'>
        <table className='min-w-full table-auto bg-white shadow-md rounded-lg'>
          <thead>
            <tr className='bg-gray-100 text-left'>
              <th className='px-4 py-2 font-roboto text-title-500'>Nombre</th>
              <th className='px-4 py-2 font-roboto text-title-500'>Correo electrónico</th>
              <th className='px-4 py-2 font-roboto text-title-500'>Última vez</th>
              <th className='px-4 py-2 font-roboto text-title-500'>Tutor</th>
              <th className='px-4 py-2 font-roboto text-title-500'>Total tarjetas</th>

              {/* Ocultar estas columnas por defecto y mostrarlas solo al hacer scroll */}
              <th className='px-4 py-2 hidden font-roboto text-title-500 lg:table-cell'>Postulaciones</th>
              <th className='px-4 py-2 hidden font-roboto text-title-500 lg:table-cell'>Entrevistas</th>
              <th className='px-4 py-2 hidden font-roboto text-title-500 lg:table-cell'>Ofertas</th>
              <th className='px-4 py-2 hidden font-roboto text-title-500 lg:table-cell'>Cumplimiento</th>
            </tr>
          </thead>
          <tbody>
            {filteredProfiles.map((profile, index) => (
              <tr key={index} className='border-t'>
                <td className='px-4 py-2'>{profile.name}</td>
                <td className='px-4 py-2'>{profile.email}</td>
                <td className='px-4 py-2'>{profile.lastTime}</td>
                <td className='px-4 py-2'>{profile.tutor}</td>
                <td className='px-4 py-2'>{profile.totalCards}</td>

                <td className='px-4 py-2 hidden lg:table-cell'>{profile.applications}</td>
                <td className='px-4 py-2 hidden lg:table-cell'>{profile.interviews}</td>
                <td className='px-4 py-2 hidden lg:table-cell'>{profile.offers}</td>
                <td className='px-4 py-2 hidden lg:table-cell'>
                  <div className='w-full bg-gray-200 rounded-full h-4'>
                    <div className='bg-green-500 h-4 rounded-full' style={{ width: `${profile.completion}%` }}></div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='fixed bottom-4 right-4'>
        <button className='bg-white text-green-500 px-4 py-2 rounded hover:bg-green-300 focus:outline-none' disabled>
          Descargar
        </button>
      </div>
    </div>
  )
}

export default ProfileAdmin
