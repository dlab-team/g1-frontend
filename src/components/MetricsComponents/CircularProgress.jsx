import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js'

ChartJS.register(ArcElement, Tooltip)

const CircularProgress = ({ percentage }) => {
  const data = {
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: ['#729e2e', '#e5e7eb'],
        borderWidth: 0
      }
    ]
  }

  const options = {
    cutout: '75%',
    plugins: {
      tooltip: { enabled: false }
    }
  }

  return (
    <div className='relative w-20 h-20 sm:w-24 sm:h-24'>
      <Doughnut data={data} options={options} />
      <div className='absolute inset-0 flex items-center justify-center'>
        <span className='text-sm sm:text-lg font-semibold text-title-500'>
          {`${percentage}%`}
        </span>
      </div>
    </div>
  )
}

export default CircularProgress
