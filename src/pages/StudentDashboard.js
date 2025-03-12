import React, { useState } from "react";
import { toast } from "react-toastify"; // Importe toast pour afficher des notifications
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function StudentDashboard() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleSubmit = () => {
    // Simule une soumission réussie
    toast.success("Réponse soumise avec succès !");
  };

  const data = [
    { name: "Semaine 1", note: 14 },
    { name: "Semaine 2", note: 16 },
    { name: "Semaine 3", note: 18 },
    { name: "Semaine 4", note: 15 },
  ];

  return (
    <div
      className={`p-6 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"
      } min-h-screen transition-all duration-300`}
    >
      <h1 className="text-2xl font-bold mb-6">Tableau de bord Étudiant</h1>
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
          <h2 className="text-xl font-semibold mb-4">Soumettre une réponse</h2>
          <input
            type="file"
            onChange={handleSubmit}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div
          className={`${
            darkMode ? "bg-gray-800" : "bg-white"
          } p-6 rounded-lg shadow-md`}
        >
          <h2 className="text-xl font-semibold mb-4">Mes performances</h2>
          <LineChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="note"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
