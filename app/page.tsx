import React from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Charger react-slick dynamiquement pour éviter les problèmes SSR
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans">
      <header className="row-start-1 text-center sm:text-left">
        <h1 className="text-4xl font-bold">Bienvenue chez RetroMetroid</h1>
        <p className="text-lg">
          Votre boutique en ligne pour les consoles rétro
        </p>
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <section className="w-full">
          <Slider {...settings}>
            <div>
              <img
                src="/assets/image1.jpg"
                alt="Image 1"
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <img
                src="/assets/image2.jpg"
                alt="Image 2"
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <img
                src="/assets/image3.jpg"
                alt="Image 3"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Ajoutez d'autres images ici */}
          </Slider>
        </section>
        <section className="text-center sm:text-left">
          <h2 className="text-2xl font-semibold">Nos Consoles</h2>
          <p>
            Découvrez notre collection de consoles rétro, soigneusement
            sélectionnées pour les amateurs de jeux vidéo classiques.
          </p>
        </section>
        <section className="text-center sm:text-left">
          <h2 className="text-2xl font-semibold">Produits en Vedette</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Exemple de produit */}
            <div className="border p-4 rounded-lg">
              <h3 className="text-xl font-bold">Super Nintendo</h3>
              <p>
                Revivez les classiques avec la Super Nintendo, disponible
                maintenant.
              </p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
                Acheter
              </button>
            </div>
            {/* Ajoutez d'autres produits ici */}
          </div>
        </section>
        <section className="text-center sm:text-left">
          <h2 className="text-2xl font-semibold">Témoignages</h2>
          <div className="space-y-4">
            {/* Exemple de témoignage */}
            <blockquote className="border-l-4 border-blue-500 pl-4">
              <p>
                "Une expérience incroyable ! Les consoles sont en parfait état
                et le service client est exceptionnel."
              </p>
              <cite>- Jean Dupont</cite>
            </blockquote>
            {/* Ajoutez d'autres témoignages ici */}
          </div>
        </section>
      </main>
      <footer className="row-start-3 text-center">
        <p>Contactez-nous : contact@retrometroid.com</p>
        <p>&copy; 2023 RetroMetroid. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default Home;
