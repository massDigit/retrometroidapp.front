import * as yup from "yup";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

<<<<<<< HEAD
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
=======
interface FormValues {
  name: string;
  description: string;
  type: string;
  color: string;
  imagePathFront: File | null;
  imagePathSide: File | null;
  imagePathBack: File | null;
}

const schema = yup.object().shape({
  name: yup.string().required("Nom de l'option est requis"),
  description: yup.string().required("Description est requise"),
  type: yup.string().required("Type est requis"),
  color: yup.string().required("Couleur est requise"),
  imagePathFront: yup.mixed().required("Image avant est requise").nullable(),
  imagePathSide: yup.mixed().required("Image côté est requise").nullable(),
  imagePathBack: yup.mixed().required("Image arrière est requise").nullable(),
});
>>>>>>> origin/dev

const AddOptionForm: React.FC = () => {
  const [submitting, setSubmitting] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

<<<<<<< HEAD
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
=======
  const onSubmit = async (data: FormValues) => {
    setSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("type", data.type);
      formData.append("color", data.color);
      if (data.imagePathFront)
        formData.append("imagePathFront", data.imagePathFront);
      if (data.imagePathSide)
        formData.append("imagePathSide", data.imagePathSide);
      if (data.imagePathBack)
        formData.append("imagePathBack", data.imagePathBack);

      const response = await fetch("http://localhost:3000/options/addOption", {
        method: "POST",
        body: formData,
      });

      const responseData = await response.json();
      console.log("reponse de data", responseData);

      if (!response.ok) {
        throw new Error("Erreur lors de l'ajout de l'option");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
>>>>>>> origin/dev
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 bg-black p-6 rounded-lg shadow-lg"
    >
      <div className="mb-6">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-yellow-400"
        >
          Nom de l'option
        </label>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input
              type="text"
              id="name"
              {...field}
              className={`mt-1 block w-full ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm`}
            />
          )}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div className="mb-6">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-yellow-400"
        >
          Description
        </label>
        <Controller
          name="description"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <textarea
              id="description"
              {...field}
              className={`mt-1 block w-full ${
                errors.description ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm`}
            />
          )}
        />
        {errors.description && (
          <p className="text-red-500 text-sm mt-1">
            {errors.description.message}
          </p>
        )}
      </div>

      <div className="mb-6">
        <label
<<<<<<< HEAD
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
=======
          htmlFor="type"
          className="block text-sm font-medium text-yellow-400"
        >
          Type
        </label>
        <Controller
          name="type"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input
              type="text"
              id="type"
              {...field}
              className={`mt-1 block w-full ${
                errors.type ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm`}
            />
          )}
        />
        {errors.type && (
          <p className="text-red-500 text-sm mt-1">{errors.type.message}</p>
>>>>>>> origin/dev
        )}
      </div>

      <div className="mb-6">
        <label
          htmlFor="color"
          className="block text-sm font-medium text-yellow-400"
        >
          Couleur
        </label>
        <Controller
          name="color"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input
              type="text"
              id="color"
              {...field}
              className={`mt-1 block w-full ${
                errors.color ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm`}
            />
          )}
        />
        {errors.color && (
          <p className="text-red-500 text-sm mt-1">{errors.color.message}</p>
        )}
      </div>

      <div className="mb-6">
        <label
          htmlFor="imagePathFront"
          className="block text-sm font-medium text-yellow-400"
        >
          Image avant
        </label>
        <Controller
          name="imagePathFront"
          control={control}
          defaultValue={null}
          render={({ field }) => (
            <input
              type="file"
              id="imagePathFront"
              onChange={(e) =>
                field.onChange(e.target.files ? e.target.files[0] : null)
              }
              className={`mt-1 block w-full ${
                errors.imagePathFront ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm`}
            />
          )}
        />
        {errors.imagePathFront && (
          <p className="text-red-500 text-sm mt-1">
            {errors.imagePathFront.message}
          </p>
        )}
      </div>

      <div className="mb-6">
        <label
          htmlFor="imagePathSide"
          className="block text-sm font-medium text-yellow-400"
        >
          Image côté
        </label>
        <Controller
          name="imagePathSide"
          control={control}
          defaultValue={null}
          render={({ field }) => (
            <input
              type="file"
              id="imagePathSide"
              onChange={(e) =>
                field.onChange(e.target.files ? e.target.files[0] : null)
              }
              className={`mt-1 block w-full ${
                errors.imagePathSide ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm`}
            />
          )}
        />
        {errors.imagePathSide && (
          <p className="text-red-500 text-sm mt-1">
            {errors.imagePathSide.message}
          </p>
        )}
      </div>

      <div className="mb-6">
        <label
          htmlFor="imagePathBack"
          className="block text-sm font-medium text-yellow-400"
        >
          Image arrière
        </label>
        <Controller
          name="imagePathBack"
          control={control}
          defaultValue={null}
          render={({ field }) => (
            <input
              type="file"
              id="imagePathBack"
              onChange={(e) =>
                field.onChange(e.target.files ? e.target.files[0] : null)
              }
              className={`mt-1 block w-full ${
                errors.imagePathBack ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm`}
            />
          )}
        />
        {errors.imagePathBack && (
          <p className="text-red-500 text-sm mt-1">
            {errors.imagePathBack.message}
          </p>
        )}
      </div>

      <div className="text-center">
        <button
          type="submit"
          className={`w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-4 rounded-lg ${
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

export default AddOptionForm;
