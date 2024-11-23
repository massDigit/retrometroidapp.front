import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ColorsList from "../color/ColorsList";

interface FormValues {
  name: string;
  description: string;
  type: string;
  consoleType: string;
  price: number;
  color: string;
  imagePathFront: string;
  imagePathSide: string;
  imagePathBack: string;
}

// Validation Schema using Yup
const schema = yup.object().shape({
  name: yup.string().required("Nom de l'option est requis"),
  description: yup.string().required("Description est requise"),
  type: yup.string().required("Type est requis"),
  price: yup
    .number()
    .typeError("Le prix doit être un nombre")
    .min(0, "Le prix ne peut pas être négatif")
    .required("Le prix est requis"),
  consoleType: yup.string().required("Type de console est requis"),
  color: yup.string().required("Couleur est requise"),
  imagePathFront: yup.string(),
  imagePathSide: yup.string(),
  imagePathBack: yup.string(),
});

const AddOptionForm: React.FC = () => {
  const [submitting, setSubmitting] = useState(false);

  const {
    handleSubmit,
    control,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      description: "",
      type: "",
      consoleType: "",
      price: 0,
      color: "",
      imagePathFront: "",
      imagePathSide: "",
      imagePathBack: "",
    },
  });

  const consoleTypeOptions = ["GBA-SP", "GBA", "GB", "GBC"];

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof FormValues
  ) => {
    const file = e.target.files ? e.target.files[0] : null;

    if (!file) {
      setValue(field, ""); // Réinitialise le champ si aucun fichier sélectionné
      return;
    }

    const fileName = file.name;
    const consoleType = getValues("consoleType");

    if (!consoleType) {
      alert("Veuillez d'abord sélectionner un type de console.");
      return;
    }

    // Détermine le répertoire en fonction du champ
    const directory =
      field === "imagePathFront"
        ? "FRONT"
        : field === "imagePathSide"
        ? "SIDE"
        : "BACK";

    const fullPath = `${consoleType}/${directory}/${fileName}`;
    setValue(field, fullPath); // Met à jour le champ d'image
  };

  const onSubmit = async (data: FormValues) => {
    setSubmitting(true);

    try {
      console.log("Données envoyées à l'API:", data);

      const response = await fetch("http://localhost:3000/options/addOptions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      console.log("Réponse API:", responseData);

      if (!response.ok) {
        throw new Error(responseData.error || "Erreur lors de l'ajout de l'option");
      }

      alert("Option ajoutée avec succès !");
    } catch (error) {
      console.error("Erreur:", error);
      alert("Erreur lors de l'ajout de l'option.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 bg-black p-6 rounded-lg shadow-lg"
    >
      {/* Nom de l'option */}
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
          render={({ field }) => (
            <input
              {...field}
              id="name"
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

      {/* Description */}
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
          render={({ field }) => (
            <textarea
              {...field}
              id="description"
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

      {/* Type */}
      <div className="mb-6">
        <label
          htmlFor="type"
          className="block text-sm font-medium text-yellow-400"
        >
          Type
        </label>
        <Controller
          name="type"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              id="type"
              className={`mt-1 block w-full ${
                errors.type ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm`}
            />
          )}
        />
        {errors.type && (
          <p className="text-red-500 text-sm mt-1">{errors.type.message}</p>
        )}
      </div>

      {/* Type de Console */}
      <div className="mb-6">
        <label
          htmlFor="consoleType"
          className="block text-sm font-medium text-yellow-400"
        >
          Type de console
        </label>
        <Controller
          name="consoleType"
          control={control}
          render={({ field }) => (
            <select
              {...field}
              id="consoleType"
              className={`mt-1 block w-full ${
                errors.consoleType ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm`}
            >
              <option value="" disabled>
                Sélectionnez un type de console
              </option>
              {consoleTypeOptions.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          )}
        />
        {errors.consoleType && (
          <p className="text-red-500 text-sm mt-1">
            {errors.consoleType.message}
          </p>
        )}
      </div>

      {/* Prix */}
      <div className="mb-6">
        <label
          htmlFor="price"
          className="block text-sm font-medium text-yellow-400"
        >
          Prix (€)
        </label>
        <Controller
          name="price"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="number"
              id="price"
              min="0"
              step="0.01"
              className={`mt-1 block w-full ${
                errors.price ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm`}
            />
          )}
        />
        {errors.price && (
          <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
        )}
      </div>

      {/* Couleur */}
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
          render={({ field }) => (
            <>
              <ColorsList
                onSelectColor={(color) => field.onChange(color)}
                selectedColor={field.value}
              />
              <input type="hidden" {...field} />
            </>
          )}
        />
        {errors.color && (
          <p className="text-red-500 text-sm mt-1">{errors.color.message}</p>
        )}
      </div>

      {/* Champs Images */}
      {["imagePathFront", "imagePathSide", "imagePathBack"].map((field) => (
        <div key={field} className="mb-6">
          <label
            htmlFor={field}
            className="block text-sm font-medium text-yellow-400"
          >
            Image{" "}
            {field === "imagePathFront"
              ? "avant"
              : field === "imagePathSide"
              ? "côté"
              : "arrière"}
          </label>
          <Controller
            name={field as keyof FormValues}
            control={control}
            render={({ field: controllerField }) => (
              <input
                type="file"
                id={field}
                onChange={(e) => handleImageChange(e, field as keyof FormValues)}
                className={`mt-1 block w-full text-white ${
                  errors[field as keyof FormValues]
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-md shadow-sm`}
              />
            )}
          />
          {errors[field as keyof FormValues] && (
            <p className="text-red-500 text-sm mt-1">
              {
                (
                  errors[field as keyof FormValues] as { message: string }
                ).message
              }
            </p>
          )}
        </div>
      ))}

      {/* Bouton de soumission */}
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
