import React, { useState } from "react";
import { toast } from "react-toastify"; // Importe toast pour afficher des notifications

function Login() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Simule une connexion réussie
    toast.success("Connexion réussie !");
  };

  return (
    <div
      className={`flex items-center justify-center min-h-screen ${
        darkMode ? "bg-gray-900" : "bg-gradient-to-r from-blue-50 to-purple-50"
      }`}
    >
      <div
        className={`${
          darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
        } p-8 rounded-lg shadow-lg w-full max-w-md transition-all duration-300`}
      >
        <h1 className="text-3xl font-bold text-center mb-6">Connexion</h1>
        <div className="space-y-4">
          <button className="w-full flex items-center justify-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
            <img
              src="https://img.icons8.com/color/48/000000/google-logo.png"
              alt="Google"
              className="w-6 h-6 mr-2"
            />
            Se connecter avec Google
          </button>
          <button className="w-full flex items-center justify-center bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-900 transition duration-300">
            <img
              src="https://img.icons8.com/color/48/000000/github.png"
              alt="GitHub"
              className="w-6 h-6 mr-2"
            />
            Se connecter avec GitHub
          </button>
        </div>
        <p className="text-center mt-4">Ou utilisez votre email</p>
        <form className="mt-4 space-y-4" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Mot de passe"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300"
          >
            Se connecter
          </button>
        </form>
        <button
          onClick={toggleDarkMode}
          className="mt-4 w-full bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300"
        >
          {darkMode ? "Mode Clair" : "Mode Sombre"}
        </button>
      </div>
    </div>
  );
}

export default Login;
