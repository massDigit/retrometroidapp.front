import "../globals.css";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  itemName: string;
  description: string;
  category: string;
  price: number;
  image: FileList;
}

const AddCustomizationItemForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();


  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log("Nouvel accessoire ajouté :", data);
  };

  return (
    <div className="form-container">
      <h2>Ajouter un nouvel élément de personnalisation</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="customization-form">
        <div className="form-group">
          <label htmlFor="itemName">Nom</label>
          <input
            type="text"
            id="itemName"
            placeholder="Nom de l'accessoire"
            {...register("itemName", { required: "Le nom de l'accessoire est obligatoire" })}
          />
          {errors.itemName && <span className="error-message">{errors.itemName.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            placeholder="Description de l'accessoire"
            {...register("description", { required: "Une description est obligatoire" })}
          />
          {errors.description && <span className="error-message">{errors.description.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="category">Catégorie</label>
          <select id="category" {...register("category", { required: "La catégorie est obligatoire" })}>
            <option value="Coque">Coque</option>
            <option value="Boutons">Boutons</option>
            <option value="Écran">Écran</option>
            <option value="Autre">Autre</option>
          </select>
          {errors.category && <span className="error-message">{errors.category.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="price">Prix (€)</label>
          <input
            type="number"
            id="price"
            placeholder="Prix de l'accessoire"
            {...register("price", { required: "Le prix est obligatoire", min: 1 })}
          />
          {errors.price && <span className="error-message">{errors.price.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            {...register("image", { required: "Une image est obligatoire" })}
          />
          {errors.image && <span className="error-message">{errors.image.message}</span>}
        </div>

        <button type="submit" className="submit-btn">Ajouter l'élément</button>
      </form>
    </div>
  );
};

export default AddCustomizationItemForm;

