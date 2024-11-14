"use client";

import React, { useState } from 'react';
import OptionsList from '../components/option/OptionList';

const CustomisationPage: React.FC = () => {
  const [selectedCoque, setSelectedCoque] = useState<any>(null);
  const [selectedLaniere, setSelectedLaniere] = useState<any>(null);
  const [selectedButton, setSelectedButton] = useState<any>(null);
  const [selectedPad, setSelectedPad] = useState<any>(null);
  const [selectedSticker, setSelectedSticker] = useState<any>(null);
  const [selectedBatterie, setSelectedBatterie] = useState<any>(null);
  const [selectedScreen, setSelectedScreen] = useState<any>(null);

  return (
    <div className="flex">
      {/* Aperçu du produit à gauche */}
      <div className="w-1/2 p-4">
        <h2>Aperçu du produit</h2>
        <div className="relative w-64 h-64 mb-8">
          {/* Afficher les options sélectionnées en fonction de la vue */}
          {selectedCoque && (
            <img
              src={`http://localhost:3000${selectedCoque.optionImgFront}`}
              alt={selectedCoque.name}
              className="absolute w-full h-auto object-contain"
            />
          )}
          {selectedLaniere && (
            <img
              src={`http://localhost:3000${selectedLaniere.optionImgFront}`}
              alt={selectedLaniere.name}
              className="absolute w-full h-auto object-contain"
            />
          )}
          {selectedButton && (
            <img
              src={`http://localhost:3000${selectedButton.optionImgFront}`}
              alt={selectedButton.name}
              className="absolute w-full h-auto object-contain"
            />
          )}
          {selectedPad && (
            <img
              src={`http://localhost:3000${selectedPad.optionImgFront}`}
              alt={selectedPad.name}
              className="absolute w-full h-auto object-contain"
            />
          )}
          {selectedSticker && (
            <img
              src={`http://localhost:3000${selectedSticker.optionImgBack}`}
              alt={selectedSticker.name}
              className="absolute w-full h-auto object-contain"
            />
          )}
          {selectedBatterie && (
            <img
              src={`http://localhost:3000${selectedBatterie.optionImgFront}`}
              alt={selectedBatterie.name}
              className="absolute w-full h-auto object-contain"
            />
          )}
          {selectedScreen && (
            <img
              src={`http://localhost:3000${selectedScreen.optionImgFront}`}
              alt={selectedScreen.name}
              className="absolute w-full h-auto object-contain"
            />
          )}
        </div>
      </div>

      {/* Section de personnalisation à droite */}
      <div className="w-1/2 p-4">
        <h2>Personnalisation</h2>
        <h3>Choisir une Coque</h3>
        <OptionsList type="coque" consoleType="GBA" onSelectOption={setSelectedCoque} />

        <h3>Choisir une Lanière</h3>
        <OptionsList type="lanière" consoleType="GBA" onSelectOption={setSelectedLaniere} />

        <h3>Choisir des Boutons</h3>
        <OptionsList type="button" consoleType="GBA" onSelectOption={setSelectedButton} />

        <h3>Choisir un Pad</h3>
        <OptionsList type="pad" consoleType="GBA" onSelectOption={setSelectedPad} />

        <h3>Choisir des Stickers</h3>
        <OptionsList type="stickers" consoleType="GBA" onSelectOption={setSelectedSticker} />

        <h3>Choisir une Batterie</h3>
        <OptionsList type="batterie" consoleType="GBA" onSelectOption={setSelectedBatterie} />

        <h3>Choisir un Écran</h3>
        <OptionsList type="screen" consoleType="GBA" onSelectOption={setSelectedScreen} />
      </div>
    </div>
  );
};

export default CustomisationPage;
