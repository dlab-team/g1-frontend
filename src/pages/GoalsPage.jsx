import { useState } from 'react'
import SidebarComponent from '../components/Navbar/Sidebar'
import GoalCard from '../components/GoalsComponents/GoalCard'
import AddApplication from '../components/GoalsComponents/AddApplication'

const GoalsPage = () => {
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false)
  const [isAddingApplication, setIsAddingApplication] = useState(false)

  const handleSidebarToggle = (isMinimized) => {
    setIsSidebarMinimized(isMinimized)
  }

  const goals = [
    {
      title: 'Crear 5 postulaciones semanales',
      progress: 20,
      startDate: '09 de junio, 2024',
      endDate: '16 de junio, 2024'
    },
    {
      title: 'Asistir a 5 Eventos de Networking',
      progress: 50,
      startDate: '01 de julio, 2024',
      endDate: '15 de julio, 2024'
    }
  ]

  return (
    <div className='flex'>
      <div className='fixed left-0 top-0 h-full z-10'>
        <SidebarComponent onToggle={handleSidebarToggle} />
      </div>
      <div className={`flex-1 p-4 md:p-8 max-w-full transition-all duration-300 ${isSidebarMinimized ? 'ml-60' : 'ml-28'}`}>
        <div className='mb-6 pb-4 border-b border-gray-200'>
          <h1 className='font-workSans italic text-2xl sm:text-3xl font-semibold text-left truncate'>Objetivos</h1>
        </div>
        <div className='max-w-fit grid grid-cols-1 lg:grid-cols-2 gap-5'>
          {goals.map((goal, index) => (
            <div key={index} className='max-w-sm'>
              <GoalCard {...goal} onAddApplication={() => setIsAddingApplication(true)} />
            </div>
          ))}
        </div>
        {isAddingApplication && <AddApplication onClose={() => setIsAddingApplication(false)} />}
      </div>
    </div>
  )
}

export default GoalsPage
