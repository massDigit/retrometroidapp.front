import * as yup from "yup";
import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";

const OptionForm: React.FC = () => {
  const [optionData, setOptionData] = useState({
    name: "",
    description: "",
    type:"",
    color : "",
    imagePathFront: "",
    imagePathSide:"",
    imagePathBack:"",

  });

 
  const [errors, setErrors] = useState({
    name: "",
    description: "",
    type:"",
    color : "",
    imagePathFront: "",
    imagePathSide:"",
    imagePathBack:"",
  });

const OptionForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
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
      type:"",
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
    if (!optionData.type) {
      newErrors.type = "Le type doit etre renseigner";
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
          type: optionData.type,
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 bg-black p-6 rounded-lg shadow-lg"
    >
      <div>
        <label className="block text-sm font-medium text-yellow-400">
          Nom de l'option
        </label>
        <input
          type="text"
          {...register("name")}
          className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm bg-gray-700 text-white"
        />
        {errors.name && (
          <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-yellow-400">
          Description
        </label>
        <textarea
          {...register("description")}
          className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm bg-gray-700 text-white"
        />
        {errors.description && (
          <p className="mt-2 text-sm text-red-600">
            {errors.description.message}
          </p>
        )}
      </div>

      <div className="mb-6">
        <label
          htmlFor="description"
          className="block text-gray-700 font-semibold mb-2"
        >
          Type
        </label>
        <textarea
          id="type"
          name="type"
          value={optionData.type}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
          placeholder="type de l'option"
        />
        {errors.type && (
          <p className="text-red-500 text-sm mt-1">{errors.type}</p>
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
      <button
        type="submit"
        disabled={submitting}
        className={`w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-4 rounded-lg ${
          submitting ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {submitting ? "Ajout en cours..." : "Ajouter l'option"}
      </button>
    </form>
  );
};

export default OptionForm;
