import React, { useState } from "react";
import { toast } from "react-toastify"; // Importe toast pour afficher des notifications
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

function TeacherDashboard() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleFileUpload = () => {
    // Simule un dépôt réussi
    toast.success("Exercice déposé avec succès !");
  };

  const data = [
    { name: "Réussite", value: 80 },
    { name: "Échec", value: 20 },
  ];

  const COLORS = ["#00C49F", "#FF8042"];

  return (
    <div
      className={`p-6 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"
      } min-h-screen transition-all duration-300`}
    >
      <h1 className="text-2xl font-bold mb-6">Tableau de bord Professeur</h1>
      <button
        onClick={toggleDarkMode}
        className="mb-4 bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300"
      >
        {darkMode ? "Mode Clair" : "Mode Sombre"}
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          className={`${
            darkMode ? "bg-gray-800" : "bg-white"
          } p-6 rounded-lg shadow-md`}
        >
          <h2 className="text-xl font-semibold mb-4">Déposer un exercice</h2>
          <input
            type="file"
            onChange={handleFileUpload}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div
          className={`${
            darkMode ? "bg-gray-800" : "bg-white"
          } p-6 rounded-lg shadow-md`}
        >
          <h2 className="text-xl font-semibold mb-4">
            Statistiques des étudiants
          </h2>
          <PieChart width={400} height={300}>
            <Pie
              data={data}
              cx={200}
              cy={150}
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      </div>
    </div>
  );
}

export default TeacherDashboard;
