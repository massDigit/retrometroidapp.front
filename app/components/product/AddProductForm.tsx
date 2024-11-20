"use client";

import * as yup from "yup";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import OptionSelector from "@/app/components/option/OptionSelector";

interface FormValues {
  itemName: string;
  type: string;
  description: string;
  price: number;
  quantityStock: number;
  category: string;
  coqueName: string;
  coqueColor: string;
  buttonName: string;
  buttonColor: string;
  padsName: string;
  padsColor: string;
  laniereName: string;
  laniereColor: string;
  stickersName: string;
  stickersColor: string;
  batterieName: string;
  batterieColor: string;
  screenName: string;
  screenColor: string;
  sacoche: string;
  screen_shield: string;
  silicone_shield: string;
}

const schema = yup.object().shape({
  itemName: yup
    .string()
    .min(3, "Le nom doit avoir au moins 3 caractères")
    .required("Nom requis"),
  type: yup.string().required("Type requis"),
  description: yup.string().required("Description requise"),
  price: yup
    .number()
    .required("Prix requis")
    .positive("Le prix doit être positif"),
  quantityStock: yup
    .number()
    .required("Quantité en stock requise")
    .min(0, "La quantité doit être au moins 0"),
  category: yup.string().required("Catégorie requise"),
  coqueName: yup.string().required("Nom de la coque requis"),
  coqueColor: yup.string().required("Couleur de la coque requise"),
  buttonName: yup.string().required("Nom du bouton requis"),
  buttonColor: yup.string().required("Couleur du bouton requise"),
  padsName: yup.string().required("Nom des pads requis"),
  padsColor: yup.string().required("Couleur des pads requise"),
  laniereName: yup.string().required("Nom de la lanière requis"),
  laniereColor: yup.string().required("Couleur de la lanière requise"),
  stickersName: yup.string().required("Nom des stickers requis"),
  stickersColor: yup.string().required("Couleur des stickers requise"),
  batterieName: yup.string().required("Nom de la batterie requis"),
  batterieColor: yup.string().required("Couleur de la batterie requise"),
  screenName: yup.string().required("Nom de l'écran requis"),
  screenColor: yup.string().required("Couleur de l'écran requise"),
  sacoche: yup.string().required("Sacoche requise"),
  screen_shield: yup.string().required("Protection d'écran requise"),
  silicone_shield: yup.string().required("Protection en silicone requise"),
});

const AddProductForm: React.FC = () => {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      itemName: "",
      type: "",
      description: "",
      price: 0,
      quantityStock: 0,
      category: "",
      coqueName: "",
      coqueColor: "",
      buttonName: "",
      buttonColor: "",
      padsName: "",
      padsColor: "",
      laniereName: "",
      laniereColor: "",
      stickersName: "",
      stickersColor: "",
      batterieName: "",
      batterieColor: "",
      screenName: "",
      screenColor: "",
      sacoche: "",
      screen_shield: "",
      silicone_shield: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    let productId = null;
    let cartUrl = null;

    // Requête API pour ajouter le produit
    try {
      // Préparation des données en JSON
      const bodyData = {
        name: data.itemName,
        type: data.type,
        description: data.description,
        price: data.price,
        stockQuantity: data.quantityStock,
        category: data.category,
        coqueName: data.coqueName,
        coqueColor: data.coqueColor,
        buttonName: data.buttonName,
        buttonColor: data.buttonColor,
        padsName: data.padsName,
        padsColor: data.padsColor,
        laniereName: data.laniereName,
        laniereColor: data.laniereColor,
        stickersName: data.stickersName,
        stickersColor: data.stickersColor,
        batterieName: data.batterieName,
        batterieColor: data.batterieColor,
        screenName: data.screenName,
        screenColor: data.screenColor,
        sacoche: Array.isArray(data.sacoche) ? data.sacoche : [data.sacoche],
        screen_shield: Array.isArray(data.screen_shield)
          ? data.screen_shield
          : [data.screen_shield],
        silicone_shield: Array.isArray(data.silicone_shield)
          ? data.silicone_shield
          : [data.silicone_shield],
      };

      console.log(bodyData);

      const response: Response = await fetch(
        "http://localhost:3000/products/addProduct/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bodyData), // Conversion des données en JSON
        }
      );
      console.log(response.body);

      if (!response.ok) {
        throw new Error("Erreur lors de l'ajout du produit");
      }

      const responseData = await response.json();

      productId = responseData.product._id;

      cartUrl = `https://api-retrometroid.devprod.fr/panier/${productId}`;
    } catch (error) {
      console.error("Erreur lors de l'ajout du produit:", error);
    } finally {
      if (cartUrl) {
        router.push(cartUrl);
      }
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 bg-gray-900 p-6 rounded-lg shadow-lg"
    >
      <div>
        <label className="block text-sm font-medium text-green-400">
          Nom du produit
        </label>
        <input
          {...register("itemName")}
          className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm bg-gray-800 text-white"
        />
        {errors.itemName && <p>{errors.itemName.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-green-400">Type</label>
        <input
          {...register("type")}
          className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm bg-gray-800 text-white"
        />
        {errors.type && <p>{errors.type.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-green-400">
          Description
        </label>
        <input
          {...register("description")}
          className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm bg-gray-800 text-white"
        />
        {errors.description && <p>{errors.description.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-green-400">Prix</label>
        <input
          type="number"
          {...register("price")}
          className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm bg-gray-800 text-white"
        />
        {errors.price && <p>{errors.price.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-green-400">
          Quantité/Stock
        </label>
        <input
          type="number"
          {...register("quantityStock")}
          className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm bg-gray-800 text-white"
        />
        {errors.quantityStock && <p>{errors.quantityStock.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-green-400">
          Categorie
        </label>
        <input
          {...register("category")}
          className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm bg-gray-800 text-white"
        />
        {errors.category && <p>{errors.category.message}</p>}
      </div>
      <Controller
        name="coqueName"
        control={control}
        render={({ field }) => (
          <OptionSelector
            optionLabel="Coque"
            optionName="coqueName"
            colorName="coqueColor"
            formData={field.value || {}}
            setFormData={field.onChange}
          />
        )}
      />
      {errors.coqueName && <p>{errors.coqueName.message}</p>}
      {errors.coqueColor && <p>{errors.coqueColor.message}</p>}
      <Controller
        name="buttonName"
        control={control}
        render={({ field }) => (
          <OptionSelector
            optionLabel="Bouton"
            optionName="buttonName"
            colorName="buttonColor"
            formData={field.value || {}}
            setFormData={field.onChange}
          />
        )}
      />
      {errors.buttonName && <p>{errors.buttonName.message}</p>}
      {errors.buttonColor && <p>{errors.buttonColor.message}</p>}
      <Controller
        name="padsName"
        control={control}
        render={({ field }) => (
          <OptionSelector
            optionLabel="Pads"
            optionName="padsName"
            colorName="padsColor"
            formData={field.value || {}}
            setFormData={field.onChange}
          />
        )}
      />
      {errors.padsName && <p>{errors.padsName.message}</p>}
      {errors.padsColor && <p>{errors.padsColor.message}</p>}
      <Controller
        name="laniereName"
        control={control}
        render={({ field }) => (
          <OptionSelector
            optionLabel="Lanière"
            optionName="laniereName"
            colorName="laniereColor"
            formData={field.value || {}}
            setFormData={field.onChange}
          />
        )}
      />
      {errors.laniereName && <p>{errors.laniereName.message}</p>}
      {errors.laniereColor && <p>{errors.laniereColor.message}</p>}
      <Controller
        name="stickersName"
        control={control}
        render={({ field }) => (
          <OptionSelector
            optionLabel="Stickers"
            optionName="stickersName"
            colorName="stickersColor"
            formData={field.value || {}}
            setFormData={field.onChange}
          />
        )}
      />
      {errors.stickersName && <p>{errors.stickersName.message}</p>}
      {errors.stickersColor && <p>{errors.stickersColor.message}</p>}
      <Controller
        name="batterieName"
        control={control}
        render={({ field }) => (
          <OptionSelector
            optionLabel="Batterie"
            optionName="batterieName"
            colorName="batterieColor"
            formData={field.value || {}}
            setFormData={field.onChange}
          />
        )}
      />
      {errors.batterieName && <p>{errors.batterieName.message}</p>}
      {errors.batterieColor && <p>{errors.batterieColor.message}</p>}
      <Controller
        name="screenName"
        control={control}
        render={({ field }) => (
          <OptionSelector
            optionLabel="Écran"
            optionName="screenName"
            colorName="screenColor"
            formData={field.value || {}}
            setFormData={field.onChange}
          />
        )}
      />
      {errors.screenName && <p>{errors.screenName.message}</p>}
      {errors.screenColor && <p>{errors.screenColor.message}</p>}
      <div>
        <label className="block text-sm font-medium text-green-400">
          Sacoche
        </label>
        <input
          {...register("sacoche")}
          className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm bg-gray-800 text-white"
        />
        {errors.sacoche && <p>{errors.sacoche.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-green-400">
          Protection d'écran
        </label>
        <input
          {...register("screen_shield")}
          className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm bg-gray-800 text-white"
        />
        {errors.screen_shield && <p>{errors.screen_shield.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-green-400">
          Protection en silicone
        </label>
        <input
          {...register("silicone_shield")}
          className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm bg-gray-800 text-white"
        />
        {errors.silicone_shield && <p>{errors.silicone_shield.message}</p>}
      </div>
      <button
        type="submit"
        className="mt-4 w-full px-3 py-2 bg-green-500 text-white font-semibold rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      >
        Submit
      </button>
    </form>
  );
};

export default AddProductForm;
