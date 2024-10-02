import { useEffect, useState } from "react";
import TotalUsersCard from "../components/MetricsComponents/TotalUsersCard";
import BarChart from "../components/MetricsComponents/MetricsChart";
import GoalCard from "../components/MetricsComponents/Goalcard";
import SidebarComponent from "../components/Navbar/Sidebar";

const defaultMetricsData = {
  postulaciones: 1000,
  entrevistas: 300,
  eventos: 900,
  chartData: [
    { nombre: "Objetivo 1", cumplimiento: 70 },
    { nombre: "Objetivo 2", cumplimiento: 50 },
  ],
  goal1: {
    percentage: 70,
    description: "El 70% de los usuarios cumplieron con este objetivo",
  },
  goal2: {
    percentage: 50,
    description: "El 50% de los usuarios cumplieron con este objetivo",
  },
};

const MetricsPage = () => {
  const [metricsData, setMetricsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMetricsData = async () => {
      try {
        const response = await fetch("/api/metrics");
        if (!response.ok) {
          throw new Error("Error en la respuesta del servidor");
        }
        const data = await response.json();
        setMetricsData(data);
      } catch (error) {
        console.error("Error al obtener los datos", error);
        setMetricsData(defaultMetricsData);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMetricsData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Cargando...
      </div>
    );
  }

  return (
    <div className="flex">
      <div className="w-16 sm:w-24 md:w-64 fixed left-0 top-0 h-full z-10 bg-white">
        <SidebarComponent />
      </div>
      <div className="flex-grow ml-16 sm:ml-24 md:ml-64">
        <div className="max-w-4xl mx-auto p-6">
          <h1 className="text-2xl font-bold text-center text-primary-500 mb-6">
            Informe
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6">
            <TotalUsersCard
              title="Postulaciones"
              count={metricsData.postulaciones}
            />
            <TotalUsersCard
              title="Entrevistas"
              count={metricsData.entrevistas}
            />
            <TotalUsersCard
              title="Eventos de Networking"
              count={metricsData.eventos}
            />
          </div>

          <BarChart data={metricsData.chartData} />

          <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6 mt-6">
            <GoalCard
              title="Crear 5 postulaciones semanales"
              percentage={metricsData.goal1.percentage}
              description={metricsData.goal1.description}
            />
            <GoalCard
              title="Asistir a 2 eventos de Networking"
              percentage={metricsData.goal2.percentage}
              description={metricsData.goal2.description}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricsPage;
