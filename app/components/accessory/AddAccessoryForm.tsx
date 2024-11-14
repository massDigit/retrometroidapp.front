import React, { useState } from "react";
import { useRouter } from "next/navigation";





interface FormValues {
  name: string;
  description: string;
  price: number;
}

interface FormErrors {
  name?: string;
  description?: string;
  price?: string;
}

const AccessoryForm: React.FC = () => {

  const router = useRouter();

  const [formData, setFormData] = useState<FormValues>({
    name: "",
    description: "",
    price: 0,
  });
 
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === 'price') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: parseFloat(value) || 0, // Conversion en nombre
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };


  

  const validateForm = () => {
    let isValid = true;
    const newErrors: FormErrors = {};

    if (!formData.name) {
      newErrors.name = "Le nom est requis";
      isValid = false;
    }
    if (!formData.description) {
      newErrors.description = "La description est requise";
      isValid = false;
    }
    if (!formData.price || isNaN(Number(formData.price))) {
      newErrors.price = "Le prix doit être un nombre valide";
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
          name: formData.name,
          description: formData.description,
          price: formData.price,
        };
        console.log("Données envoyées:", bodyData); 

        const response = await fetch("http://localhost:3000/accessories/addAccessorie", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bodyData), // Conversion des données en JSON
        });

        if (!response.ok) {
          throw new Error("Erreur lors de l'ajout du produit");
        }

      }catch(error) {
        console.error("Erreur lors de l'ajout du produit:", error);
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
          Nom de l'accessoire
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
          placeholder="Nom de l'accessoire"
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
          value={formData.description}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
          placeholder="Description de l'accessoire"
        />
        {errors.description && (
          <p className="text-red-500 text-sm mt-1">{errors.description}</p>
        )}
      </div>

      <div className="mb-6">
        <label
          htmlFor="price"
          className="block text-gray-700 font-semibold mb-2"
        >
          Prix (€)
        </label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price === 0 ? '' : formData.price} 
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
          placeholder="Prix de l'accessoire"
          step="any"
        />
        {errors.price && (
          <p className="text-red-500 text-sm mt-1">{errors.price}</p>
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
          {submitting ? "Ajout en cours..." : "Ajouter l'accessoire"}
        </button>
      </div>
    </form>
  );
};

export default AccessoryForm;
