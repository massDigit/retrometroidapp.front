import React, { useState,useEffect } from "react";

const OptionForm: React.FC = () => {
  const baseUrl = "http://localhost:3000"; // Base URL de votre API

  const [optionData, setOptionData] = useState({
    name: "",
    description: "",
    type: "",
    consoleType: "",
    price: "",
    color: "",
    imagePathFront: "",
    imagePathSide: "",
    imagePathBack: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    description: "",
    type: "",
    consoleType: "",
    price: "",
    color: "",
    imagePathFront: "",
    imagePathSide: "",
    imagePathBack: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [colors, setColors] = useState<string[]>([]); // Liste des couleurs récupérées
  const [error, setError] = useState<string | null>(null);

  const consoleTypeData = ["GBA-SP", "GBA", "GB", "GBC"];


  useEffect(() => {
    const fetchColors = async () => {
      try {
        const response = await fetch(`${baseUrl}/colors`);
        const data = await response.json();
        if (data.result) {
          setColors(data.allColor.map((c: { name: string }) => c.name));
        } else {
          setError("Impossible de charger les couleurs disponibles.");
        }
      } catch (err) {
        setError("Erreur lors du chargement des couleurs.");
      }
    };
    fetchColors();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "price" && Number(value) < 0) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        price: "Le prix ne peut pas être négatif",
      }));
      return;
    }

    setOptionData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof typeof optionData
  ) => {
    const file = e.target.files ? e.target.files[0] : null;
  
    if (!file) {
      // Si aucun fichier n'est sélectionné, réinitialiser le champ à une chaîne vide
      setOptionData((prev) => ({
        ...prev,
        [field]: "",
      }));
      return;
    }
  
    const fileName = file.name;
    const consoleType = optionData.consoleType; // Grand-parent (par exemple, GBA-SP)
  
    if (!consoleType) {
      alert("Veuillez d'abord sélectionner un type de console.");
      return;
    }
  
    const directory =
      field === "imagePathFront"
        ? "FRONT"
        : field === "imagePathSide"
        ? "SIDE"
        : field === "imagePathBack"
        ? "BACK"
        : "OTHER";
  
    // Construit le chemin complet
    const fullPath = `${consoleType}/${directory}/${fileName}`;
  
    setOptionData((prev) => ({
      ...prev,
      [field]: fullPath,
    }));
  };
  
  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: "",
      description: "",
      type: "",
      consoleType: "",
      price: "",
      color: "",
      imagePathFront: "",
      imagePathSide: "",
      imagePathBack: "",
    };

    if (!optionData.name) {
      newErrors.name = "Le nom est requis";
      isValid = false;
    }
    if (!optionData.description) {
      newErrors.description = "La description est requise";
      isValid = false;
    }
    if (!optionData.type) {
      newErrors.type = "Le type est requis";
      isValid = false;
    }
    if (!optionData.consoleType) {
      newErrors.consoleType = "Le type de console est requis";
      isValid = false;
    }
    if (Number(optionData.price) < 0) {
      newErrors.price = "Le prix ne peut pas être négatif";
      isValid = false;
    }
    if (!optionData.color) {
      newErrors.color = "La couleur est requise";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      setSubmitting(true);

      try {
        const bodyData = {
          ...optionData,
          price: Number(optionData.price), 
        };

        console.log("Données envoyées à l'API:", bodyData)

        const response = await fetch("http://localhost:3000/options/addOptions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bodyData),
        });

        const responseData = await response.json();
        console.log("Réponse de l'API:", responseData);
        

        if (!response.ok) {
          throw new Error(responseData.error || "Erreur lors de l'ajout de l'option");
        }
        alert("Option ajoutée avec succès !");
      } catch (error) {
        console.error("Erreur:", error);
        alert("Erreur lors de l'ajout de l'option. Veuillez réessayer.");
      } finally {
        setSubmitting(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
      <div className="mb-6">
        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
          Nom de l'option
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={optionData.name}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100"
          placeholder="Nom de l'option"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
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
          className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100"
          placeholder="Description de l'option"
        />
        {errors.description && (
          <p className="text-red-500 text-sm mt-1">{errors.description}</p>
        )}
      </div>

      <div className="mb-6">
        <label htmlFor="type" className="block text-gray-700 font-semibold mb-2">
          Type
        </label>
        <input
          type="text"
          id="type"
          name="type"
          value={optionData.type}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100"
          placeholder="Type de l'option"
        />
        {errors.type && <p className="text-red-500 text-sm mt-1">{errors.type}</p>}
      </div>

      <div className="mb-6">
        <label htmlFor="consoleType" className="block text-gray-700 font-semibold mb-2">
          Type de console
        </label>
        <select
          id="consoleType"
          name="consoleType"
          value={optionData.consoleType}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100"
        >
          <option value="" disabled>
            Type de console
          </option>
          {consoleTypeData.map((console) => (
            <option key={console} value={console}>
              {console}
            </option>
          ))}
        </select>
        {errors.consoleType && (
          <p className="text-red-500 text-sm mt-1">{errors.consoleType}</p>
        )}
      </div>

      <div className="mb-6">
        <label htmlFor="price" className="block text-gray-700 font-semibold mb-2">
          Prix
        </label>
        <input
          type="number"
          id="price"
          name="price"
          value={optionData.price}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100"
          placeholder="Prix de l'option"
          min="0"
        />
        {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
      </div>

      <div className="mb-6">
        <label htmlFor="color" className="block text-gray-700 font-semibold mb-2">
          Couleur
        </label>
        <select
          id="color"
          name="color"
          value={optionData.color}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100"
        >
          <option value="" disabled>
            Sélectionnez une couleur
          </option>
          {colors.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
        {errors.color && <p className="text-red-500 text-sm mt-1">{errors.color}</p>}
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>

      <div className="mb-6">
        <label
          htmlFor="imagePathFront"
          className="block text-gray-700 font-semibold mb-2"
        >
          Image de face
        </label>
        <input
          type="file"
          id="imagePathFront"
          name="imagePathFront"
          onChange={(e) => handleImageChange(e, "imagePathFront")}
          className="w-full"
        />
        {errors.imagePathFront && (
          <p className="text-red-500 text-sm mt-1">{errors.imagePathFront}</p>
        )}
      </div>

      <div className="mb-6">
        <label
          htmlFor="imagePathSide"
          className="block text-gray-700 font-semibold mb-2"
        >
          Image de côté
        </label>
        <input
          type="file"
          id="imagePathSide"
          name="imagePathSide"
          onChange={(e) => handleImageChange(e, "imagePathSide")}
          className="w-full"
        />
        {errors.imagePathSide && (
          <p className="text-red-500 text-sm mt-1">{errors.imagePathSide}</p>
        )}
      </div>

      <div className="mb-6">
        <label
          htmlFor="imagePathBack"
          className="block text-gray-700 font-semibold mb-2"
        >
          Image de dos
        </label>
        <input
          type="file"
          id="imagePathBack"
          name="imagePathBack"
          onChange={(e) => handleImageChange(e, "imagePathBack")}
          className="w-full"
        />
        {errors.imagePathBack && (
          <p className="text-red-500 text-sm mt-1">{errors.imagePathBack}</p>
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
