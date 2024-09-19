'use client'
import React, { useState } from 'react';

interface FormValues {
  itemName: string;
  description: string;
  price: number;
  image: File | null;
  accessories: string;
  options: string;
}

// Interface pour les erreurs (chaque champ peut avoir une erreur de type string)
interface FormErrors {
  itemName?: string;
  description?: string;
  price?: string;
  image?: string;
  accessories?: string;
  options?: string;
}

const AddProductForm: React.FC = () => {
  const [formData, setFormData] = useState<FormValues>({
    itemName: '',
    description: '',
    price: 0,
    image: null,
    accessories: '',
    options: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFormData((prev) => ({
      ...prev,
      image: file,
    }));
  };

  // Validation manuelle du formulaire
  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.itemName || formData.itemName.length < 3) {
      newErrors.itemName = 'Le nom du produit doit comporter au moins 3 caractères';
    }
    if (!formData.description || formData.description.length < 10) {
      newErrors.description = 'La description doit comporter au moins 10 caractères';
    }
    if (formData.price <= 0) {
      newErrors.price = 'Le prix doit être supérieur à 0';
    }
    if (!formData.image) {
      newErrors.image = 'Une image est requise';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Fonction de soumission du formulaire
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      setSubmitting(true);
      console.log('Formulaire valide, données soumises :', formData);
      // Envoyer les données à une API ou effectuer un traitement ici

      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg mx-auto">
      {/* Nom du produit */}
      <div>
        <label htmlFor="itemName" className="block text-white font-semibold mb-2">Nom du produit</label>
        <input
          id="itemName"
          name="itemName"
          type="text"
          value={formData.itemName}
          onChange={handleChange}
          className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-indigo-500"
        />
        {errors.itemName && <div className="text-red-500 text-sm mt-1">{errors.itemName}</div>}
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className="block text-white font-semibold mb-2">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-indigo-500"
        />
        {errors.description && <div className="text-red-500 text-sm mt-1">{errors.description}</div>}
      </div>

      {/* Prix */}
      <div>
        <label htmlFor="price" className="block text-white font-semibold mb-2">Prix (€)</label>
        <input
          id="price"
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
          className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-indigo-500"
        />
        {errors.price && <div className="text-red-500 text-sm mt-1">{errors.price}</div>}
      </div>

      {/* Image */}
      <div>
        <label htmlFor="image" className="block text-white font-semibold mb-2">Image</label>
        <input
          id="image"
          name="image"
          type="file"
          onChange={handleImageChange}
          className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-indigo-500"
        />
        {errors.image && <div className="text-red-500 text-sm mt-1">{errors.image}</div>}
      </div>

      {/* Accessoires */}
      <div>
        <label htmlFor="accessories" className="block text-white font-semibold mb-2">Accessoires</label>
        <textarea
          id="accessories"
          name="accessories"
          value={formData.accessories}
          onChange={handleChange}
          className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-indigo-500"
        />
        {errors.accessories && <div className="text-red-500 text-sm mt-1">{errors.accessories}</div>}
      </div>

      {/* Options */}
      <div>
        <label htmlFor="options" className="block text-white font-semibold mb-2">Options</label>
        <textarea
          id="options"
          name="options"
          value={formData.options}
          onChange={handleChange}
          className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-indigo-500"
        />
        {errors.options && <div className="text-red-500 text-sm mt-1">{errors.options}</div>}
      </div>

      {/* Bouton de soumission */}
      <button
        type="submit"
        disabled={submitting}
        className={`w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-4 rounded-lg ${submitting ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        {submitting ? "Ajout en cours..." : "Ajouter le produit"}
      </button>
    </form>
  );
};

export default AddProductForm;
