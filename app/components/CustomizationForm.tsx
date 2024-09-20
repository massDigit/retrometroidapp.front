import React, { useState, useEffect } from "react";

interface CustomizationFormProps {
  onPriceUpdate: (newPrice: number) => void;
  onAddToCart: (item: any) => void;
}

const CustomizationForm: React.FC<CustomizationFormProps> = ({
  onPriceUpdate,
  onAddToCart,
}) => {
  const [formData, setFormData] = useState({
    baseConsole: "Je fournis la console",
    shell: "Coque avant et arrière",
    screen: "Écran IPS rétroéclairé",
    buttons: "Boutons standard",
    pads: "Pads standard",
    accessories: "Lanière incluse",
  });
  const [price, setPrice] = useState(149);

  useEffect(() => {
    let newPrice = 149;

    if (formData.baseConsole === "Je n'ai pas de console à fournir") {
      newPrice += 40;
    }

    if (formData.shell !== "Coque avant et arrière") {
      newPrice += 20;
    }

    if (formData.screen === "Écran IPS rétroéclairé") {
      newPrice += 30;
    }

    setPrice(newPrice);
    onPriceUpdate(newPrice);
  }, [formData, onPriceUpdate]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const customItem = {
      ...formData,
      price,
    };

    onAddToCart(customItem);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="baseConsole"
          className="block text-gray-700 font-semibold mb-2"
        >
          Base Console
        </label>
        <select
          id="baseConsole"
          name="baseConsole"
          value={formData.baseConsole}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-900"
        >
          <option value="Je fournis la console">Je fournis la console</option>
          <option value="Je n'ai pas de console à fournir">
            Je n'ai pas de console à fournir (+40€)
          </option>
        </select>
      </div>

      <div>
        <label
          htmlFor="shell"
          className="block text-gray-700 font-semibold mb-2"
        >
          Coque
        </label>
        <select
          id="shell"
          name="shell"
          value={formData.shell}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-900"
        >
          <option value="Coque avant et arrière">Coque avant et arrière</option>
          <option value="Coque personnalisée">
            Coque personnalisée (+20€)
          </option>
        </select>
      </div>

      <div>
        <label
          htmlFor="screen"
          className="block text-gray-700 font-semibold mb-2"
        >
          Écran
        </label>
        <select
          id="screen"
          name="screen"
          value={formData.screen}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-900"
        >
          <option value="Écran IPS rétroéclairé">
            Écran IPS rétroéclairé (+30€)
          </option>
          <option value="Écran standard">Écran standard</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="buttons"
          className="block text-gray-700 font-semibold mb-2"
        >
          Boutons
        </label>
        <select
          id="buttons"
          name="buttons"
          value={formData.buttons}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-900"
        >
          <option value="Boutons standard">Boutons standard</option>
          <option value="Boutons personnalisés">
            Boutons personnalisés (+10€)
          </option>
        </select>
      </div>

      <div>
        <label
          htmlFor="pads"
          className="block text-gray-700 font-semibold mb-2"
        >
          Pads
        </label>
        <select
          id="pads"
          name="pads"
          value={formData.pads}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-900"
        >
          <option value="Pads standard">Pads standard</option>
          <option value="Pads personnalisés">Pads personnalisés (+5€)</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="accessories"
          className="block text-gray-700 font-semibold mb-2"
        >
          Accessoires
        </label>
        <select
          id="accessories"
          name="accessories"
          value={formData.accessories}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-900"
        >
          <option value="Lanière incluse">Lanière incluse</option>
          <option value="Pas de lanière">Pas de lanière</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg"
      >
        Ajouter au panier
      </button>
    </form>
  );
};

export default CustomizationForm;
