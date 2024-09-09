import TotalUsersCard from '../components/MetricsComponents/TotalUsersCard'
import BarChart from '../components/MetricsComponents/MetricsChart'
import GoalCard from '../components/MetricsComponents/Goalcard'
import Sidebar from '../components/Navbar/Sidebar'

const MetricsPage = () => {
  return (
    <div className='max-w-4xl mx-auto p-6'>
      <h1 className='text-2xl font-bold text-center text-primary-500 mb-6'>
        Informe
      </h1>

      <div className='grid grid-cols-3 sm:grid-cols-3 gap-4 sm:gap-6 mb-6'>
        <TotalUsersCard title='Postulaciones.' count='1.005' />
        <TotalUsersCard title='Entrevistas' count='320' />
        <TotalUsersCard title='Eventos de Networking' count='1.000' />
      </div>

      <BarChart />

      <div className='flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6 mt-6'>
        <GoalCard
          title='Crear 5 postulaciones semanales'
          percentage={70}
          description='El 70% de los usuarios cumplieron con este objetivo'
        />
        <GoalCard
          title='Asistir a 2 eventos de Networking'
          percentage={50}
          description='El 50% de los usuarios cumplieron con este objetivo'
        />
      </div>
    </div>
  )
}

export default MetricsPage
