import React from "react";

function Correction() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Correction automatique
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Exercice 1 : Requête SQL
        </h2>
        <p className="text-gray-600 mb-4">
          Votre réponse : <code>SELECT * FROM étudiants;</code>
        </p>
        <p className="text-gray-600 mb-4">
          Correction : <code>SELECT nom, prénom FROM étudiants;</code>
        </p>
        <p className="text-gray-600 mb-4">
          Feedback :{" "}
          <span className="text-red-600">
            Vous avez sélectionné toutes les colonnes au lieu de spécifier les
            colonnes nécessaires.
          </span>
        </p>
        <p className="text-gray-600">
          Note : <span className="font-bold">15/20</span>
        </p>
      </div>
    </div>
  );
}

export default Correction;
