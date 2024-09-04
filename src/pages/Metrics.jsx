import React from "react";
import TotalUsersCard from "../components/MetricsComponents/TotalUsersCard";
import BarChart from "../components/MetricsComponents/MetricsChart";
import GoalCard from "../components/MetricsComponents/Goalcard"
import Sidebar from "../components/Navbar/Sidebar";

const MetricsPage = () => {
  return (
    <div className="display-grid max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-center text-primary-500 mb-6">
        Informe
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
        <TotalUsersCard
          title="Usuarios conectados las últimas 24hrs."
          count="1.005"
        />
        <TotalUsersCard
          title="Usuarios nuevos esta semana"
          count="320"
        />
        <TotalUsersCard title="Postulaciones totales" count="1.000" />
      </div>

      <BarChart />

      <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-8 mt-6">
        <GoalCard
          title="Crear 5 postulaciones semanales"
          percentage={70}
          description="El 70% de los usuarios cumplieron con este objetivo"
        />
        <GoalCard
          title="Asistir a 2 eventos de Networking"
          percentage={50}
          description="El 50% de los usuarios cumplieron con este objetivo"
        />
      </div>
    </div>
  );
};

export default MetricsPage;
