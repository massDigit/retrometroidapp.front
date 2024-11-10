import React, { useState } from "react";

const OptionForm: React.FC = () => {
  const [optionData, setOptionData] = useState({
    name: "",
    description: "",
    color : "",
    imagePathFront: "",
    imagePathSide:"",
    imagePathBack:"",

  });

 
  const [errors, setErrors] = useState({
    name: "",
    description: "",
    color : "",
    imagePathFront: "",
    imagePathSide:"",
    imagePathBack:"",
  });

  const [submitting, setSubmitting] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setOptionData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setSelectedFile(file);
      const relativePath = file.name; // Suppose que le nom de fichier correspond au chemin relatif
      setOptionData((prev) => ({
        ...prev,
        imagePathFront: relativePath, 
        imagePathSide: relativePath,
        imagePathBack: relativePath,
      }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: "",
      description: "",
      color : "",
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
    if (!optionData.color) {
      newErrors.color = "La couleur doit etre renseigner";
      isValid = false;
    }


    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    if(validateForm()){
      setSubmitting(true);

      try{


        const bodyData = {
          name: optionData.name,
          description: optionData.description,
          imagePathFront: optionData.imagePathFront,
          imagePathSide: optionData.imagePathSide,
          imagePathBack:optionData.imagePathBack,
          color : optionData.color
        };
        console.log("Données envoyées:", bodyData); 

        const response = await fetch("http://localhost:3000/options/addOptions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bodyData), // Conversion des données en JSON
        });
        
        const responseData = await response.json();
        console.log("reponse de data",responseData);
        
        if (!response.ok) {
          throw new Error("Erreur lors de l'ajout de l'option");
        }

      }catch(error) {
        console.error( error);
      }finally {
        setSubmitting(false);
      }
    }
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
          htmlFor="color"
          className="block text-gray-700 font-semibold mb-2"
        >
          Couleur
        </label>
        <input
          type="text"
          id="color"
          name="color"
          value={optionData.color}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
          placeholder="Couleur de l'option"
        />
        {errors.color && (
          <p className="text-red-500 text-sm mt-1">{errors.color}</p>
        )}
      </div>

      <div className="mb-6">
        <label
          htmlFor="imagePath"
          className="block text-gray-700 font-semibold mb-2"
        >
          Image de face
        </label>
        <input
          type="file"
          id="imagePathFront"
          name="imagePathFront"
          onChange={handleImageChange}
          className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
          placeholder="Image de l option"
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
          Image de coté
        </label>
        <input
          type="file"
          id="imagePathSide"
          name="imagePathSide"
          onChange={handleImageChange}
          className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
          placeholder="Image de l option"
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
          onChange={handleImageChange}
          className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
          placeholder="Image de l option"
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
