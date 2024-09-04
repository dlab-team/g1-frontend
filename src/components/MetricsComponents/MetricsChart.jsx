import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const MetricsChart = () => {
  const data = {
    labels: [
      "Lunes 10 jun,24",
      "Ma 11 jun,24",
      "Mie 12 jun,24",
      "Jue 13 jun,24",
      "Vie 14 jun,24",
      "Sáb 15 jun,24",
      "Dom 16 jun,24",
    ],
    datasets: [
      {
        label: "Postulación",
        data: [4, 6, 3, 5, 2, 7, 0],
        backgroundColor: "#4A4A49",
      },
      {
        label: "Entrevista",
        data: [2, 4, 2, 3, 1, 4, 1],
        backgroundColor: "#009EE3",
      },
      {
        label: "Evento de Networking",
        data: [1, 2, 1, 2, 0, 3, 0],
        backgroundColor: "#E2A30B",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
        labels: {
          padding: 20,
          boxWidth: 12,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex mb-4">
        <h2 className="text-lg font-workSans font-semibold italic mr-auto">
          Actividades por categoría
        </h2>
        <div className="flex space-x-1">
          <button className="px-3 py-1 border border-gray-300 rounded">
            A diario
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded">
            Semanal
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded">
            Mensual
          </button>
        </div>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default MetricsChart;
