import * as yup from "yup";
import React, { useState } from "react";
<<<<<<< HEAD
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
=======
import { useRouter } from "next/navigation";




>>>>>>> devv

interface FormValues {
  name: string;
  description: string;
  price: number;
<<<<<<< HEAD
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
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

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

=======
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

>>>>>>> devv
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 bg-gray-900 p-6 rounded-lg shadow-lg"
    >
      <div>
        <label className="block text-sm font-medium text-blue-400">
          Nom de l'accessoire
        </label>
        <input
          type="text"
<<<<<<< HEAD
          {...register("name")}
          className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-800 text-white"
=======
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
          placeholder="Nom de l'accessoire"
>>>>>>> devv
        />
        {errors.name && (
          <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-blue-400">
          Description
        </label>
        <textarea
<<<<<<< HEAD
          {...register("description")}
          className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-800 text-white"
=======
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
          placeholder="Description de l'accessoire"
>>>>>>> devv
        />
        {errors.description && (
          <p className="mt-2 text-sm text-red-600">
            {errors.description.message}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-blue-400">Prix</label>
        <input
          type="number"
<<<<<<< HEAD
          {...register("price")}
          className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-800 text-white"
=======
          id="price"
          name="price"
          value={formData.price === 0 ? '' : formData.price} 
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
          placeholder="Prix de l'accessoire"
          step="any"
>>>>>>> devv
        />
        {errors.price && (
          <p className="mt-2 text-sm text-red-600">{errors.price.message}</p>
        )}
      </div>
<<<<<<< HEAD

      <div>
        <label className="block text-sm font-medium text-blue-400">
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
        className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg ${
          submitting ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {submitting ? "Ajout en cours..." : "Ajouter l'accessoire"}
      </button>
=======
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
>>>>>>> devv
    </form>
  );
};

export default AccessoryForm;
