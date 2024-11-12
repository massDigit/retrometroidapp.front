"use client";

import * as yup from "yup";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
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

interface Option {
  id: number;
  name: string;
}

interface Accessory {
  id: number;
  name: string;
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
  const [options, setOptions] = useState<Option[]>([]);
  const [accessories, setAccessories] = useState<Accessory[]>([]);
  const [optionsError, setOptionsError] = useState<string | null>(null);
  const [accessoriesError, setAccessoriesError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await fetch("/api/options");
        if (!response.ok) {
          throw new Error("Failed to fetch options");
        }
        const data = await response.json();
        setOptions(data);
      } catch (error) {
        setOptionsError("Failed to fetch options");
        console.error(error);
      }
    };

    const fetchAccessories = async () => {
      try {
        const response = await fetch("/api/accessories");
        if (!response.ok) {
          throw new Error("Failed to fetch accessories");
        }
        const data = await response.json();
        setAccessories(data);
      } catch (error) {
        setAccessoriesError("Failed to fetch accessories");
        console.error(error);
      }
    };

    fetchOptions();
    fetchAccessories();
  }, []);

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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 bg-black p-6 rounded-lg shadow-lg"
    >
      <div>
        <label className="block text-sm font-medium text-green-400">
          Nom du produit
        </label>
        <input
          type="text"
          {...register("itemName")}
          className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm bg-gray-800 text-white"
        />
        {errors.itemName && (
          <p className="mt-2 text-sm text-red-600">{errors.itemName.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-green-400">
          Description
        </label>
        <textarea
          {...register("description")}
          className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm bg-gray-800 text-white"
        />
        {errors.description && (
          <p className="mt-2 text-sm text-red-600">
            {errors.description.message}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-green-400">Prix</label>
        <input
          type="number"
          {...register("price")}
          className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm bg-gray-800 text-white"
        />
        {errors.price && (
          <p className="mt-2 text-sm text-red-600">{errors.price.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-green-400">
          Image
        </label>
        <input
          type="file"
          {...register("image")}
          className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm bg-gray-800 text-white"
        />
        {errors.image?.message && (
          <p className="mt-2 text-sm text-red-600">
            {String(errors.image.message)}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-green-400">
          Accessoires
        </label>
        <select
          {...register("accessories")}
          className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm bg-gray-800 text-white"
        >
          {accessories.length > 0 ? (
            accessories.map((accessory) => (
              <option key={accessory.id} value={accessory.name}>
                {accessory.name}
              </option>
            ))
          ) : (
            <option value="">No accessories available</option>
          )}
        </select>
        {accessoriesError && (
          <p className="mt-2 text-sm text-red-600">{accessoriesError}</p>
        )}
        {errors.accessories && (
          <p className="mt-2 text-sm text-red-600">
            {errors.accessories.message}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-green-400">
          Options
        </label>
        <select
          {...register("options")}
          className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm bg-gray-800 text-white"
        >
          {options.length > 0 ? (
            options.map((option) => (
              <option key={option.id} value={option.name}>
                {option.name}
              </option>
            ))
          ) : (
            <option value="">No options available</option>
          )}
        </select>
        {optionsError && (
          <p className="mt-2 text-sm text-red-600">{optionsError}</p>
        )}
        {errors.options && (
          <p className="mt-2 text-sm text-red-600">{errors.options.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className={`w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg ${
          submitting ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {submitting ? "Ajout en cours..." : "Ajouter le produit"}
      </button>
    </form>
  );
};

export default AddProductForm;
