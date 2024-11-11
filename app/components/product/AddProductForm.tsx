"use client";
import * as yup from "yup";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormValues {
  itemName: string;
  description: string;
  price: number;
  image: File | any;
  accessories: string;
  options: string;
}

const schema = yup.object().shape({
  itemName: yup.string().required("Item name is required"),
  description: yup.string().required("Description is required"),
  price: yup
    .number()
    .required("Price is required")
    .positive("Price must be positive"),
  image: yup.mixed().required("Image is required"),
  accessories: yup.string().required("Accessories are required"),
  options: yup.string().required("Options are required"),
});

const AddProductForm: React.FC = () => {
  const router = useRouter();
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
      // Requête API pour ajouter le produit
      setTimeout(() => {
        router.push("/products");
      }, 1000);
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Nom du produit
        </label>
        <input
          type="text"
          {...register("itemName")}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {errors.itemName && (
          <p className="mt-2 text-sm text-red-600">{errors.itemName.message}</p>
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
        <label className="block text-sm font-medium text-gray-700">Image</label>
        <input
          type="file"
          {...register("image")}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {errors.image?.message && (
          <p className="mt-2 text-sm text-red-600">
            {String(errors.image.message)}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Accessories
        </label>
        <input
          type="text"
          {...register("accessories")}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {errors.accessories && (
          <p className="mt-2 text-sm text-red-600">
            {errors.accessories.message}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Options
        </label>
        <input
          type="text"
          {...register("options")}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {errors.options && (
          <p className="mt-2 text-sm text-red-600">{errors.options.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className={`w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg ${
          submitting ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {submitting ? "Ajout en cours..." : "Ajouter le produit"}
      </button>
    </form>
  );
};

export default AddProductForm;
