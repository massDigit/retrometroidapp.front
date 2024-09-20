import React, { useState } from "react";

const AccessoryForm: React.FC = () => {
  const [accessoryData, setAccessoryData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setAccessoryData((prevData) => ({
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
      category: "",
    };

    if (!accessoryData.name) {
      newErrors.name = "Le nom est requis";
      isValid = false;
    }
    if (!accessoryData.description) {
      newErrors.description = "La description est requise";
      isValid = false;
    }
    if (!accessoryData.price || isNaN(Number(accessoryData.price))) {
      newErrors.price = "Le prix doit être un nombre valide";
      isValid = false;
    }
    if (!accessoryData.category) {
      newErrors.category = "La catégorie est requise";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {};

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
      <div className="mb-6">
        <label
          htmlFor="name"
          className="block text-gray-700 font-semibold mb-2"
        >
          Nom de l'accessoire
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={accessoryData.name}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
          placeholder="Nom de l'accessoire"
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
          value={accessoryData.description}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
          placeholder="Description de l'accessoire"
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
          value={accessoryData.price}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
          placeholder="Prix de l'accessoire"
        />
        {errors.price && (
          <p className="text-red-500 text-sm mt-1">{errors.price}</p>
        )}
      </div>

      <div className="mb-6">
        <label
          htmlFor="category"
          className="block text-gray-700 font-semibold mb-2"
        >
          Catégorie
        </label>
        <input
          type="text"
          id="category"
          name="category"
          value={accessoryData.category}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
          placeholder="Catégorie de l'accessoire"
        />
        {errors.category && (
          <p className="text-red-500 text-sm mt-1">{errors.category}</p>
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
          {submitting ? "Ajout en cours..." : "Ajouter l'accessoire"}
        </button>
      </div>
    </form>
  );
};

export default AccessoryForm;
