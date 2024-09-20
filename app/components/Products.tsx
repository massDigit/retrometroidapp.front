import React from "react";
import "../styles/globals.css"; // Assurez-vous que le chemin est correct
import Slider from "react-slick";

const products = [
  {
    id: 1,
    name: "Produit 1",
    image: "/assets/a1.jpg",
    description: "Description du produit 1",
  },
  {
    id: 2,
    name: "Produit 2",
    image: "/assets/a2.jpg",
    description: "Description du produit 2",
  },
  {
    id: 3,
    name: "Produit 3",
    image: "/assets/a1.jpg",
    description: "Description du produit 3",
  },
  // Ajoutez plus de produits si nécessaire
];

const Products = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Désactiver les boutons "Next" et "Back"
  };

  return (
    <div>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="product">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Products;
