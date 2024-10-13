import { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { PlusCircleOutline, ChevronLeftOutline, ChevronRightOutline } from '../../assets/icons/index';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import TaskTableForm from '../TaskTableComponents/TaskTableForm'

const GoalCard = ({ title, progress, startDate, endDate }) => {
  const [showForm, setShowForm] = useState(false); // Estado para mostrar/ocultar el formulario

  const data = {
    labels: ['Completado', 'Restante'],
    datasets: [
      {
        data: [progress, 100 - progress],
        backgroundColor: ['#009EE3', '#D9D9D9'],
        borderWidth: 0
      }
    ]
  };

  const options = {
    plugins: {
      legend: {
        display: false
      },
      datalabels: {
        display: false
      }
    },
    cutout: '70%'
  };

  const handleFormClose = () => {
    setShowForm(false); // Cerrar el formulario
  };

  return (
    <div className='flex flex-col items-center border border-gray-200 rounded-lg p-2 md:p-4 w-full max-w-sm'>
      {showForm ? (
        // Mostrar el formulario en lugar del contenido habitual
        <TaskTableForm onClose={handleFormClose} />
      ) : (
        <>
          <h2 className='font-workSans italic text-lg font-semibold mb-2 text-left w-full flex justify-between items-center'>
            <span className='truncate'>{title}</span>
            <div
              className='md:w-8 md:h-8 bg-primary-500 flex items-center justify-center rounded-md ml-2 cursor-pointer'
              onClick={() => setShowForm(true)} // Mostrar el formulario al hacer clic
            >
              <img src={PlusCircleOutline} alt='Agregar' className='w-4 h-4 md:w-5 md:h-5 filter invert brightness-0' />
            </div>
          </h2>
          <div className='flex items-center w-full'>
            <div className='relative flex items-center justify-center'>
              <Pie data={data} options={options} plugins={[ChartDataLabels]} className='w-[100px] h-[100px]' />
              <p className='absolute font-semibold text-xl text-center'>{progress}%</p>
            </div>
            <div className='ml-2 text-left'>
              <p className='font-normal'>En Curso</p>
              <p className='font-normal'>{startDate} - {endDate}</p>
            </div>
          </div>
          <div className='flex items-center justify-between w-full mt-2'>
            <img src={ChevronLeftOutline} alt='SVG-left' className='w-4 h-4 md:w-5 md:h-5' />
            <div className=''>
              <p className='font-semibold font-roboto text-sm mb-1 text-center'>Cumplimiento Semanal</p>
              <div className='grid grid-cols-2 flex-wrap gap-1'>
                <button className='bg-orange-500 w-full text-white py-2 rounded text-sm whitespace-nowrap'>
                  26 de mayo - 02 de junio, 2024
                </button>
                <button className='bg-primary-500 w-full text-white py-2 rounded text-sm whitespace-nowrap'>
                  19 de mayo - 26 de mayo, 2024
                </button>
                <button className='bg-primary-600 w-full text-white py-2 rounded text-sm whitespace-nowrap'>
                  02 de junio - 09 de junio, 2024
                </button>
                <button className='bg-blue-500 w-full text-white py-2 rounded text-sm whitespace-nowrap'>
                  09 de junio - 16 de junio, 2024
                </button>
              </div>
            </div>
            <img src={ChevronRightOutline} alt='SVG-right' className='w-4 h-4 md:w-5 md:h-5' />
          </div>
        </>
      )}
    </div>
  );
};

export default GoalCard;
