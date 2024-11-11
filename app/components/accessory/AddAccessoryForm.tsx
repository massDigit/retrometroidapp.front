import * as yup from "yup";
import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormValues {
  name: string;
  description: string;
  price: number;
  category: string;
}

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  description: yup.string().required("Description is required"),
  price: yup
    .number()
    .required("Price is required")
    .positive("Price must be positive"),
  category: yup.string().required("Category is required"),
});

const AccessoryForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });
  const [submitting, setSubmitting] = useState(false);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setSubmitting(true);
    try {
      // API request to add the accessory
      setTimeout(() => {
        alert("Accessory added successfully!");
      }, 1000);
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-8 rounded-lg shadow-md"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Nom de l'accessoire
        </label>
        <input
          type="text"
          {...register("name")}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {errors.name && (
          <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          {...register("description")}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {errors.description && (
          <p className="mt-2 text-sm text-red-600">
            {errors.description.message}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Price</label>
        <input
          type="number"
          {...register("price")}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {errors.price && (
          <p className="mt-2 text-sm text-red-600">{errors.price.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Category
        </label>
        <input
          type="text"
          {...register("category")}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {errors.category && (
          <p className="mt-2 text-sm text-red-600">{errors.category.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className={`w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg ${
          submitting ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {submitting ? "Ajout en cours..." : "Ajouter l'accessoire"}
      </button>
    </form>
  );
};

export default AccessoryForm;
