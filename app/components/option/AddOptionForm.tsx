import React, { useState } from "react";

const OptionForm: React.FC = () => {
  const [optionData, setOptionData] = useState({
    name: "",
    description: "",
    price: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    description: "",
    price: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setOptionData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: "",
      description: "",
      price: "",
    };

    if (!optionData.name) {
      newErrors.name = "Le nom est requis";
      isValid = false;
    }
    if (!optionData.description) {
      newErrors.description = "La description est requise";
      isValid = false;
    }
    if (!optionData.price || isNaN(Number(optionData.price))) {
      newErrors.price = "Le prix doit être un nombre valide";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
      <div className="mb-6">
        <label
          htmlFor="name"
          className="block text-gray-700 font-semibold mb-2"
        >
          Nom de l'option
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={optionData.name}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
          placeholder="Nom de l'option"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
        )}
      </div>

      <div className="mb-6">
        <label
          htmlFor="description"
          className="block text-gray-700 font-semibold mb-2"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={optionData.description}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
          placeholder="Description de l'option"
        />
        {errors.description && (
          <p className="text-red-500 text-sm mt-1">{errors.description}</p>
        )}
      </div>

      <div className="mb-6">
        <label
          htmlFor="price"
          className="block text-gray-700 font-semibold mb-2"
        >
          Prix (€)
        </label>
        <input
          type="text"
          id="price"
          name="price"
          value={optionData.price}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
          placeholder="Prix de l'option"
        />
        {errors.price && (
          <p className="text-red-500 text-sm mt-1">{errors.price}</p>
        )}
      </div>

      <div className="text-center">
        <button
          type="submit"
          className={`px-6 py-3 bg-indigo-500 text-white font-bold rounded-lg hover:bg-indigo-600 transition-colors ${
            submitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={submitting}
        >
          {submitting ? "Ajout en cours..." : "Ajouter l'option"}
        </button>
      </div>
    </form>
  );
};

export default OptionForm;
