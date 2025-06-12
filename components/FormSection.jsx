import { useState } from "react";

export default function FormSection() {
  const [formType, setFormType] = useState("individual");

  return (
    <div className="px-4 py-10 max-w-2xl mx-auto">
      <div className="flex justify-center gap-4 mb-6">
        {["individual", "collective"].map(type => (
          <button
            key={type}
            onClick={() => setFormType(type)}
            className={`px-4 py-2 rounded-full font-semibold transition ${
              formType === type
                ? "bg-yellow-400 text-black"
                : "bg-gray-800 text-white"
            }`}
          >
            {type === "individual" ? "Pendaftaran Individu" : "Pendaftaran Kolektif"}
          </button>
        ))}
      </div>

      {formType === "individual" ? (
        <div className="bg-gray-900 p-6 rounded-xl text-white shadow-lg">
          <h2 className="text-xl mb-4">Formulir Individu</h2>
          {/* Your individual form fields here */}
        </div>
      ) : (
        <div className="bg-gray-900 p-6 rounded-xl text-white shadow-lg">
          <h2 className="text-xl mb-4">Formulir Kolektif</h2>
          {/* Your collective form fields here */}
        </div>
      )}
    </div>
  );
}