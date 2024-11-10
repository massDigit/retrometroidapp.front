"use client";


import React, { useState } from "react";
import { useRouter } from "next/navigation";
import OptionSelector from "@/app/components/option/OptionSelector"; 
import { log } from "console";

interface FormValues {
  itemName: string;
  type:string;
  description: string;
  price: number;
  quantityStock: number;
  category: string;
  coqueName: string;
  coqueColor:string;
  buttonName: string;
  buttonColor:String;
  padsName: string;
  padsColor:String;
  laniereName: string ;
  laniereColor:string;
  stickersName: string;
  stickersColor:string;
  batterieName: string ;
  batterieColor:string;
  screenName: string ;
  screenColor:string;
  sacoche:string;
  screen_shield:string;
  silicone_shield:string;
}

interface FormErrors {
  itemName?: string;
  type?:string;
  description?: string;
  price?: string;
  quantityStock?: string;
  category?: string;
  coqueName?: string;
  coqueColor?:string;
  buttonName?: string;
  buttonColor?:String;
  padsName?: string;
  padsColor?:String;
  laniereName?: string ;
  laniereColor?:string;
  stickersName?: string;
  stickersColor?:string;
  batterieName?: string ;
  batterieColor?:string;
  screenName?: string ;
  screenColor?:string;
  sacoche?:string;
  screen_shield?:string;
  silicone_shield?:string;
}

const AddProductForm: React.FC = () => {
  const router = useRouter();


  const [formData, setFormData] = useState<FormValues>({
    itemName: "",
    type:"",
    description: "",
    price: 0,
    quantityStock: 0,
    category: "",
    coqueName: "",
    coqueColor:"",
    buttonName: "",
    buttonColor:"",
    padsName: "",
    padsColor:"",
    laniereName: "",
    laniereColor:"",
    stickersName: "",
    stickersColor:"",
    batterieName: "",
    batterieColor:"",
    screenName: "",
    screenColor:"",
    sacoche:"",
    screen_shield:"",
    silicone_shield:"",
   
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.itemName || formData.itemName.length < 3) {
      newErrors.itemName =
        "Le nom du produit doit comporter au moins 3 caractères";
    }
    if (!formData.description || formData.description.length < 10) {
      newErrors.description =
        "La description doit comporter au moins 10 caractères";
    }
    if (formData.price <= 0) {
      newErrors.price = "Le prix doit être supérieur à 0";
    }
    if (formData.quantityStock <= 0) {
      newErrors.quantityStock = "La quantité de stock doit être supérieure à 0";
    }
    if (!formData.category || formData.category.length < 3) {
      newErrors.category = "La catégorie doit comporter au moins 3 caractères";
    }
    if (!formData.coqueName ) {
      newErrors.coqueName = "Le nom de l'option doit etre spécifier";

    }if (!formData.coqueColor ) {
      newErrors.coqueColor = "La couleur de l option doit etre specifier";
    }
    if (!formData.buttonName ) {
      newErrors. buttonName = "Le nom de l'option doit etre spécifier";

    }if (!formData.buttonColor ) {
      newErrors.buttonColor = "La couleur de l option doit etre specifier";
    }
    if (!formData.padsName) {
      newErrors.padsName = "Le nom de l'option doit etre spécifier";

    }if (!formData.padsColor ) {
      newErrors.padsColor= "La couleur de l option doit etre specifier";

    }if (!formData.laniereName ) {
      newErrors.laniereName = "Le nom de l'option doit etre spécifier";

    }if (!formData.laniereColor ) {
      newErrors.laniereColor = "La couleur de l option doit etre specifier";
    }
    if (!formData.stickersName ) {
      newErrors.stickersName = "Le nom de l'option doit etre spécifier";

    }if (!formData.stickersColor ) {
      newErrors.stickersColor= "La couleur de l option doit etre specifier";
    }
    if (!formData.batterieName ) {
      newErrors.batterieName = "Le nom de l'option doit etre spécifier";

    }
    if (!formData.batterieColor ) {
      newErrors.batterieColor = "La couleur de l option doit etre specifier";
    }
    if (!formData.screenName ) {
      newErrors.screenName = "Le nom de l'option doit etre spécifier";

    }if (!formData.screenColor ) {
      newErrors.screenColor = "La couleur de l option doit etre specifier";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      setSubmitting(true);


      let productId = null
      let cartUrl = null;

      // Requête API pour ajouter le produit
      try {
        // Préparation des données en JSON
        const bodyData = {
          name: formData.itemName,
          type: formData.type, 
          description: formData.description,
          price: formData.price,
          stockQuantity: formData.quantityStock,
          category: formData.category,
          coqueName: formData.coqueName,
          coqueColor: formData.coqueColor,
          buttonName: formData.buttonName,
          buttonColor: formData.buttonColor,
          padsName: formData.padsName,
          padsColor: formData.padsColor,
          laniereName: formData.laniereName,
          laniereColor: formData.laniereColor,
          stickersName: formData.stickersName,
          stickersColor: formData.stickersColor,
          batterieName: formData.batterieName,
          batterieColor: formData.batterieColor,
          screenName: formData.screenName,
          screenColor: formData.screenColor,
          sacoche: Array.isArray(formData.sacoche) ? formData.sacoche : [formData.sacoche],
          screen_shield: Array.isArray(formData.screen_shield) ? formData.screen_shield : [formData.screen_shield],
          silicone_shield: Array.isArray(formData.silicone_shield) ? formData.silicone_shield : [formData.silicone_shield],
        };
      
        console.log(bodyData);
        
        const response = await fetch("http://localhost:3000/products/addProduct/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bodyData), // Conversion des données en JSON
          
        });
        console.log(response.body);
        
        if (!response.ok) {
          throw new Error("Erreur lors de l'ajout du produit");
        }

        const data = await response.json();
        
        productId = data.product._id;

        cartUrl = `https://api-retrometroid.devprod.fr/panier/${productId}`;
        

      } catch (error) {
        console.error("Erreur lors de l'ajout du produit:", error);
      } finally {
        if (cartUrl) {
          router.push(cartUrl);
        }
        setSubmitting(false);
      
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="itemName"
          className="block text-gray-700 font-semibold mb-2"
        >
          Nom du produit
        </label>
        <input
          id="itemName"
          name="itemName"
          type="text"
          value={formData.itemName}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
        />
        {errors.itemName && (
          <div className="text-red-500 text-sm mt-1">{errors.itemName}</div>
        )}
      </div>

      <div>
        <label
          htmlFor="description"
          className="block text-gray-700 font-semibold mb-2"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
        />
        {errors.description && (
          <div className="text-red-500 text-sm mt-1">{errors.description}</div>
        )}
      </div>

      <div>
        <label
          htmlFor="type"
          className="block text-gray-700 font-semibold mb-2"
        >
          Type
        </label>
        <textarea
          id="type"
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
        />
        {errors.type && (
          <div className="text-red-500 text-sm mt-1">{errors.type}</div>
        )}
      </div>

      <div>
        <label
          htmlFor="price"
          className="block text-gray-700 font-semibold mb-2"
        >
          Prix (€)
        </label>
        <input
          id="price"
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
        />
        {errors.price && (
          <div className="text-red-500 text-sm mt-1">{errors.price}</div>
        )}
      </div>
      <div>
        <label
          htmlFor="price"
          className="block text-gray-700 font-semibold mb-2"
        >
          Stock
        </label>
        <input
          id="quantityStock"
          name="quantityStock"
          type="number"
          value={formData.quantityStock}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
        />
        {errors.quantityStock && (
          <div className="text-red-500 text-sm mt-1">{errors.quantityStock}</div>
        )}
      </div>
      <div>
        <label
          htmlFor="category"
          className="block text-gray-700 font-semibold mb-2"
        >
         Category
        </label>
        <input
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
        />
        {errors.category && (
          <div className="text-red-500 text-sm mt-1">{errors.category}</div>
        )}
      </div>
      <OptionSelector
        optionLabel="Coque"
        optionName="coqueName"
        colorName="coqueColor"
        formData={formData}
        setFormData={setFormData}
      />
      <OptionSelector
        optionLabel="Bouton"
        optionName="buttonName"
        colorName="buttonColor"
        formData={formData}
        setFormData={setFormData}
      />
      <OptionSelector
        optionLabel="Pad"
        optionName="padsName"
        colorName="padsColor"
        formData={formData}
        setFormData={setFormData}
      />
      <OptionSelector
        optionLabel="Lanière"
        optionName="laniereName"
        colorName="laniereColor"
        formData={formData}
        setFormData={setFormData}
      />
      <OptionSelector
        optionLabel="stickers"
        optionName="stickersName"
        colorName="stickersColor"
        formData={formData}
        setFormData={setFormData}
      />
      <OptionSelector
        optionLabel="batterie"
        optionName="batterieName"
        colorName="batterieColor"
        formData={formData}
        setFormData={setFormData}
      />
      <OptionSelector
        optionLabel="Écran"
        optionName="screenName"
        colorName="screenColor"
        formData={formData}
        setFormData={setFormData}
      />
      <div>
        <label htmlFor="sacoche" className="block text-gray-700 font-semibold mb-2">
          Sacoche
        </label>
        <input
          id="sacoche"
          name="sacoche"
          type="text"
          value={formData.sacoche}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
        />
        {errors.sacoche && <div className="text-red-500 text-sm mt-1">{errors.sacoche}</div>}
      </div>

      <div>
        <label htmlFor="screen_shield" className="block text-gray-700 font-semibold mb-2">
          Protection d'écran
        </label>
        <input
          id="screen_shield"
          name="screen_shield"
          type="text"
          value={formData.screen_shield}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
        />
        {errors.screen_shield && (
          <div className="text-red-500 text-sm mt-1">{errors.screen_shield}</div>
        )}
      </div>

      <div>
        <label htmlFor="silicone_shield" className="block text-gray-700 font-semibold mb-2">
          Protection en silicone
        </label>
        <input
          id="silicone_shield"
          name="silicone_shield"
          type="text"
          value={formData.silicone_shield}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
        />
        {errors.silicone_shield && (
          <div className="text-red-500 text-sm mt-1">{errors.silicone_shield}</div>
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
