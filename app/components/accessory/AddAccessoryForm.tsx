import React, { useState } from "react";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";

interface FormValues {
  name: string;
  description: string;
  price: number;
}

const schema = yup.object().shape({
  name: yup.string().required("Nom de l'accessoire est requis"),
  description: yup.string().required("Description est requise"),
  price: yup
    .number()
    .required("Prix est requis")
    .positive("Le prix doit être positif"),
});

const AccessoryForm: React.FC = () => {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormValues) => {
    setSubmitting(true);

    try {
      const bodyData = {
        name: data.name,
        description: data.description,
        price: data.price,
      };
      console.log("Données envoyées:", bodyData);

      const response = await fetch(
        "http://localhost:3000/accessories/addAccessorie",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bodyData), // Conversion des données en JSON
        }
      );

      if (!response.ok) {
        throw new Error("Erreur lors de l'ajout du produit");
      }
    } catch (error) {
      console.error("Erreur lors de l'ajout du produit:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 bg-gray-900 p-6 rounded-lg shadow-lg"
    >
      <div className="mb-6">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-blue-400"
        >
          Nom de l'accessoire
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
          className="block text-sm font-medium text-blue-400"
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
          htmlFor="price"
          className="block text-sm font-medium text-blue-400"
        >
          Prix
        </label>
        <Controller
          name="price"
          control={control}
          defaultValue={0}
          render={({ field }) => (
            <input
              type="number"
              id="price"
              {...field}
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
      <div className="text-center">
        <button
          type="submit"
          className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg ${
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
