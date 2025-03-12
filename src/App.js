import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login";
import TeacherDashboard from "./pages/TeacherDashboard";
import StudentDashboard from "./pages/StudentDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/teacher" element={<TeacherDashboard />} />
        <Route path="/student" element={<StudentDashboard />} />
      </Routes>
      {/* Ajoute ToastContainer pour afficher les notifications */}
      <ToastContainer
        position="top-right" // Position des notifications
        autoClose={3000} // Durée d'affichage (3 secondes)
        hideProgressBar={false} // Affiche la barre de progression
        newestOnTop={false} // Les nouvelles notifications apparaissent en bas
        closeOnClick // Ferme la notification au clic
        rtl={false} // De gauche à droite
        pauseOnFocusLoss // Met en pause la notification si la fenêtre perd le focus
        draggable // Permet de faire glisser la notification
        pauseOnHover // Met en pause la notification au survol
      />
    </Router>
  );
}

export default App;
