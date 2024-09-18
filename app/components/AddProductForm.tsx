import "../globals.css";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";


interface IFormInput {
  itemName: string;
  description: string;
  price: number;
  image: FileList;
}

const AddProductForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log("Nouvel élément de personnalisation ajouté :", data);
  };

  return (
    <div className="form-container">
      <h2>Ajouter un nouvel élément de personnalisation</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="customization-form">
        <div className="form-group">
          <label htmlFor="itemName">Nom du produit</label>
          <input
            type="text"
            id="itemName"
            placeholder="Nom du produit"
            {...register("itemName", { required: "Le nom du produit est obligatoire" })}
          />
          {errors.itemName && <span className="error-message">{errors.itemName.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            placeholder="Description"
            {...register("description", { required: "Une description est obligatoire" })}
          />
          {errors.description && <span className="error-message">{errors.description.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="price">Prix (€)</label>
          <input
            type="number"
            id="price"
            placeholder="Prix"
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

export default AddProductForm;

