import { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const MetricsChart = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640)
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const labels = isMobile
    ? ['10 jun', '11 jun', '12 jun', '13 jun', '14 jun', '15 jun', '16 jun']
    : ['Lunes 10 jun,24', 'Ma 11 jun,24', 'Mie 12 jun,24', 'Jue 13 jun,24', 'Vie 14 jun,24', 'Sáb 15 jun,24', 'Dom 16 jun,24'];

  // Datos del gráfico
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Postulación',
        data: [4, 6, 3, 5, 2, 7, 0],
        backgroundColor: '#4A4A49'
      },
      {
        label: 'Entrevista',
        data: [2, 4, 2, 3, 1, 4, 1],
        backgroundColor: '#009EE3'
      },
      {
        label: 'Evento de Networking',
        data: [1, 2, 1, 2, 0, 3, 0],
        backgroundColor: '#E2A30B'
      }
    ]
  }

  // Opciones del gráfico
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: isMobile ? 'bottom' : 'right',
        labels: {
          padding: 20,
          boxWidth: 12
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        grid: {
          display: false
        },
        beginAtZero: true
      }
    }
  }

  return (
    <div className='p-4 sm:p-6 bg-white rounded-lg shadow-md'>
      <div className='flex flex-col space-y-2 mb-4'>
        <h2 className='text-base sm:text-lg font-workSans font-semibold italic'>
          Actividades por categoría
        </h2>
        <div className='flex space-x-1'>
          <button className='px-2 py-1 sm:px-3 sm:py-1 border border-gray-300 rounded'>
            A diario
          </button>
          <button className='px-2 py-1 sm:px-3 sm:py-1 border border-gray-300 rounded'>
            Semanal
          </button>
          <button className='px-2 py-1 sm:px-3 sm:py-1 border border-gray-300 rounded'>
            Mensual
          </button>
        </div>
      </div>

      <div className='relative h-64 sm:h-96'>
        <Bar data={data} options={options} />
      </div>
    </div>
  )}

export default MetricsChart
