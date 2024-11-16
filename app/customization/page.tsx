// CustomisationPage.tsx
"use client";

import React, { useState, useEffect, useCallback } from 'react';
import OptionsList from '../components/option/OptionList';
import AccessoryList from '../components/accessory/AccessoryList'; // Import du composant AccessoryList
import Header from '../components/Header';

import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

const CustomisationPage: React.FC = () => {
  // États pour les options sélectionnées (option et couleur)
  const [selectedCoque, setSelectedCoque] = useState<{ option: any; color: any } | null>(null);
  const [selectedLaniere, setSelectedLaniere] = useState<{ option: any; color: any } | null>(null);
  const [selectedButton, setSelectedButton] = useState<{ option: any; color: any } | null>(null);
  const [selectedPad, setSelectedPad] = useState<{ option: any; color: any } | null>(null);
  const [selectedSticker, setSelectedSticker] = useState<{ option: any; color: any } | null>(null);
  const [selectedBatterie, setSelectedBatterie] = useState<{ option: any; color: any } | null>(null);
  const [selectedScreen, setSelectedScreen] = useState<{ option: any; color: any } | null>(null);

  // État pour les accessoires sélectionnés
  const [selectedAccessories, setSelectedAccessories] = useState<any[]>([]);

  // États pour contrôler l'expansion des sections
  const [isCoqueExpanded, setIsCoqueExpanded] = useState(true); // Par défaut ouvert
  const [isLaniereExpanded, setIsLaniereExpanded] = useState(false);
  const [isButtonExpanded, setIsButtonExpanded] = useState(false);
  const [isPadExpanded, setIsPadExpanded] = useState(false);
  const [isStickerExpanded, setIsStickerExpanded] = useState(false);
  const [isBatterieExpanded, setIsBatterieExpanded] = useState(false);
  const [isScreenExpanded, setIsScreenExpanded] = useState(false);

  const [viewType, setViewType] = useState('side');

  // Fonctions de sélection d'options avec révocation des URLs blob
  const handleSelectCoque = useCallback(
    (option: any, color: any) => {
      // Révoquer les URLs blob de l'option précédente
      if (selectedCoque && selectedCoque.option) {
        const prevOption = selectedCoque.option;
        if (prevOption.imageDataFront) URL.revokeObjectURL(prevOption.imageDataFront);
        if (prevOption.imageDataBack) URL.revokeObjectURL(prevOption.imageDataBack);
        if (prevOption.imageDataSide) URL.revokeObjectURL(prevOption.imageDataSide);
      }

      // Mettre à jour l'option sélectionnée
      setSelectedCoque({ option, color });
    },
    [selectedCoque]
  );

  const handleSelectLaniere = useCallback(
    (option: any, color: any) => {
      if (selectedLaniere && selectedLaniere.option) {
        const prevOption = selectedLaniere.option;
        if (prevOption.imageDataFront) URL.revokeObjectURL(prevOption.imageDataFront);
        if (prevOption.imageDataBack) URL.revokeObjectURL(prevOption.imageDataBack);
        if (prevOption.imageDataSide) URL.revokeObjectURL(prevOption.imageDataSide);
      }
      setSelectedLaniere({ option, color });
    },
    [selectedLaniere]
  );

  const handleSelectButton = useCallback(
    (option: any, color: any) => {
      if (selectedButton && selectedButton.option) {
        const prevOption = selectedButton.option;
        if (prevOption.imageDataFront) URL.revokeObjectURL(prevOption.imageDataFront);
        if (prevOption.imageDataBack) URL.revokeObjectURL(prevOption.imageDataBack);
        if (prevOption.imageDataSide) URL.revokeObjectURL(prevOption.imageDataSide);
      }
      setSelectedButton({ option, color });
    },
    [selectedButton]
  );

  const handleSelectPad = useCallback(
    (option: any, color: any) => {
      if (selectedPad && selectedPad.option) {
        const prevOption = selectedPad.option;
        if (prevOption.imageDataFront) URL.revokeObjectURL(prevOption.imageDataFront);
        if (prevOption.imageDataBack) URL.revokeObjectURL(prevOption.imageDataBack);
        if (prevOption.imageDataSide) URL.revokeObjectURL(prevOption.imageDataSide);
      }
      setSelectedPad({ option, color });
    },
    [selectedPad]
  );

  const handleSelectSticker = useCallback(
    (option: any, color: any) => {
      if (selectedSticker && selectedSticker.option) {
        const prevOption = selectedSticker.option;
        if (prevOption.imageDataFront) URL.revokeObjectURL(prevOption.imageDataFront);
        if (prevOption.imageDataBack) URL.revokeObjectURL(prevOption.imageDataBack);
        if (prevOption.imageDataSide) URL.revokeObjectURL(prevOption.imageDataSide);
      }
      setSelectedSticker({ option, color });
    },
    [selectedSticker]
  );

  const handleSelectBatterie = useCallback(
    (option: any, color: any) => {
      if (selectedBatterie && selectedBatterie.option) {
        const prevOption = selectedBatterie.option;
        if (prevOption.imageDataFront) URL.revokeObjectURL(prevOption.imageDataFront);
        if (prevOption.imageDataBack) URL.revokeObjectURL(prevOption.imageDataBack);
        if (prevOption.imageDataSide) URL.revokeObjectURL(prevOption.imageDataSide);
      }
      setSelectedBatterie({ option, color });
    },
    [selectedBatterie]
  );

  const handleSelectScreen = useCallback(
    (option: any, color: any) => {
      if (selectedScreen && selectedScreen.option) {
        const prevOption = selectedScreen.option;
        if (prevOption.imageDataFront) URL.revokeObjectURL(prevOption.imageDataFront);
        if (prevOption.imageDataBack) URL.revokeObjectURL(prevOption.imageDataBack);
        if (prevOption.imageDataSide) URL.revokeObjectURL(prevOption.imageDataSide);
      }
      setSelectedScreen({ option, color });
    },
    [selectedScreen]
  );

  // Gestion de la sélection des accessoires
  const handleSelectAccessory = useCallback((accessory: any, isSelected: boolean) => {
    if (isSelected) {
      setSelectedAccessories((prev) => [...prev, accessory]);
    } else {
      setSelectedAccessories((prev) => prev.filter((item) => item._id !== accessory._id));
    }
  }, []);

  // Fonction pour obtenir l'image à afficher
  const getImageData = (selectedOption: any) => {
    if (!selectedOption) return '';
    const option = selectedOption.option;
    if (viewType === 'front') {
      return option.imageDataFront;
    } else if (viewType === 'side') {
      return option.imageDataSide;
    } else if (viewType === 'back') {
      return option.imageDataBack;
    }
    return '';
  };

  // Nettoyage lors du démontage du composant
  useEffect(() => {
    return () => {
      // Révoquer les URLs blob des options sélectionnées
      const revokeOptionImages = (selectedOption: any) => {
        if (selectedOption && selectedOption.option) {
          const option = selectedOption.option;
          if (option.imageDataFront) URL.revokeObjectURL(option.imageDataFront);
          if (option.imageDataBack) URL.revokeObjectURL(option.imageDataBack);
          if (option.imageDataSide) URL.revokeObjectURL(option.imageDataSide);
        }
      };

      revokeOptionImages(selectedCoque);
      revokeOptionImages(selectedLaniere);
      revokeOptionImages(selectedButton);
      revokeOptionImages(selectedPad);
      revokeOptionImages(selectedSticker);
      revokeOptionImages(selectedBatterie);
      revokeOptionImages(selectedScreen);
    };
  }, []); // Dépendances vides pour n'exécuter qu'au démontage

  return (
    <div>
      <Header />
      <div className="flex mt-4 flex-col md:flex-row justify-center ">
        {/* Section de gauche - Aperçu */}
        <div className="flex w-full md:w-4/6 border-4 justify-center ">
          <div className="w-full md:w-2/5 p-4 flex flex-col items-center">
            <h2 className="text-center mb-4">Aperçu du produit</h2>
            {selectedCoque ? (
              <div className="relative w-full h-96 flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
                {selectedCoque && getImageData(selectedCoque) && (
                  <img
                    src={getImageData(selectedCoque)}
                    alt={selectedCoque.option.name}
                    className="absolute w-full h-full object-contain"
                  />
                )}
                {selectedLaniere && getImageData(selectedLaniere) && (
                  <img
                    src={getImageData(selectedLaniere)}
                    alt={selectedLaniere.option.name}
                    className="absolute w-full h-full object-contain"
                  />
                )}
                {selectedButton && getImageData(selectedButton) && (
                  <img
                    src={getImageData(selectedButton)}
                    alt={selectedButton.option.name}
                    className="absolute w-full h-full object-contain"
                  />
                )}
                {selectedPad && getImageData(selectedPad) && (
                  <img
                    src={getImageData(selectedPad)}
                    alt={selectedPad.option.name}
                    className="absolute w-full h-full object-contain"
                  />
                )}
                {selectedSticker && getImageData(selectedSticker) && (
                  <img
                    src={getImageData(selectedSticker)}
                    alt={selectedSticker.option.name}
                    className="absolute w-full h-full object-contain"
                  />
                )}
                {selectedBatterie && getImageData(selectedBatterie) && (
                  <img
                    src={getImageData(selectedBatterie)}
                    alt={selectedBatterie.option.name}
                    className="absolute w-full h-full object-contain"
                  />
                )}
                {selectedScreen && getImageData(selectedScreen) && (
                  <img
                    src={getImageData(selectedScreen)}
                    alt={selectedScreen.option.name}
                    className="absolute w-full h-full object-contain"
                  />
                )}
              </div>
            ) : (
              <p>Chargement de l'aperçu...</p>
            )}

            {/* Contrôles pour changer la vue */}
            <div className="flex justify-center mt-4 gap-2">
              {['side', 'front', 'back'].map((view) => (
                <button
                  key={view}
                  onClick={() => setViewType(view)}
                  className={`w-4 h-4 rounded-full bg-black ${
                    viewType === view ? 'opacity-100' : 'opacity-50'
                  }`}
                  aria-label={`Vue ${view}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Section de droite - Personnalisation */}
        <div className="w-full md:w-2/5 p-4 flex flex-col items-center">
          <h2 className="text-lg font-semibold text-left mb-4">Configuration</h2>
          <div className="max-h-screen overflow-y-auto custom-scrollbar w-full">
            <div className="space-y-4">
              {/* Section Coque */}
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <h3 className="font-medium mr-2">Choisir une Coque</h3>
                    {selectedCoque && (
                      <span
                        className="w-4 h-4 rounded-full border border-gray-300"
                        style={{ backgroundColor: selectedCoque.color.name }}
                      />
                    )}
                  </div>
                  <button onClick={() => setIsCoqueExpanded(!isCoqueExpanded)}>
                    {isCoqueExpanded ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </button>
                </div>
                <OptionsList
                  type="coque"
                  consoleType="GBA"
                  onSelectOption={handleSelectCoque}
                  selectDefaultOption={true}
                  isExpanded={isCoqueExpanded}
                />
              </div>

              {/* Section Lanière */}
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <h3 className="font-medium mr-2">Choisir une Lanière</h3>
                    {selectedLaniere && (
                      <span
                        className="w-4 h-4 rounded-full border border-gray-300"
                        style={{ backgroundColor: selectedLaniere.color.name }}
                      />
                    )}
                  </div>
                  <button onClick={() => setIsLaniereExpanded(!isLaniereExpanded)}>
                    {isLaniereExpanded ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </button>
                </div>
                <OptionsList
                  type="lanière"
                  consoleType="GBA"
                  onSelectOption={handleSelectLaniere}
                  selectDefaultOption={true}
                  isExpanded={isLaniereExpanded}
                />
              </div>

              {/* Section Boutons */}
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <h3 className="font-medium mr-2">Choisir des Boutons</h3>
                    {selectedButton && (
                      <span
                        className="w-4 h-4 rounded-full border border-gray-300"
                        style={{ backgroundColor: selectedButton.color.name }}
                      />
                    )}
                  </div>
                  <button onClick={() => setIsButtonExpanded(!isButtonExpanded)}>
                    {isButtonExpanded ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </button>
                </div>
                <OptionsList
                  type="button"
                  consoleType="GBA"
                  onSelectOption={handleSelectButton}
                  selectDefaultOption={true}
                  isExpanded={isButtonExpanded}
                />
              </div>

              {/* Section Pad */}
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <h3 className="font-medium mr-2">Choisir un Pad</h3>
                    {selectedPad && (
                      <span
                        className="w-4 h-4 rounded-full border border-gray-300"
                        style={{ backgroundColor: selectedPad.color.name }}
                      />
                    )}
                  </div>
                  <button onClick={() => setIsPadExpanded(!isPadExpanded)}>
                    {isPadExpanded ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </button>
                </div>
                <OptionsList
                  type="pad"
                  consoleType="GBA"
                  onSelectOption={handleSelectPad}
                  selectDefaultOption={true}
                  isExpanded={isPadExpanded}
                />
              </div>

              {/* Section Stickers */}
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <h3 className="font-medium mr-2">Choisir des Stickers</h3>
                    {selectedSticker && (
                      <span
                        className="w-4 h-4 rounded-full border border-gray-300"
                        style={{ backgroundColor: selectedSticker.color.name }}
                      />
                    )}
                  </div>
                  <button onClick={() => setIsStickerExpanded(!isStickerExpanded)}>
                    {isStickerExpanded ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </button>
                </div>
                <OptionsList
                  type="stickers"
                  consoleType="GBA"
                  onSelectOption={handleSelectSticker}
                  selectDefaultOption={true}
                  isExpanded={isStickerExpanded}
                />
              </div>

              {/* Section Batterie */}
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <h3 className="font-medium mr-2">Choisir une Batterie</h3>
                    {selectedBatterie && (
                      <span
                        className="w-4 h-4 rounded-full border border-gray-300"
                        style={{ backgroundColor: selectedBatterie.color.name }}
                      />
                    )}
                  </div>
                  <button onClick={() => setIsBatterieExpanded(!isBatterieExpanded)}>
                    {isBatterieExpanded ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </button>
                </div>
                <OptionsList
                  type="batterie"
                  consoleType="GBA"
                  onSelectOption={handleSelectBatterie}
                  selectDefaultOption={true}
                  isExpanded={isBatterieExpanded}
                />
              </div>

              {/* Section Écran */}
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <h3 className="font-medium mr-2">Choisir un Écran</h3>
                    {selectedScreen && (
                      <span
                        className="w-4 h-4 rounded-full border border-gray-300"
                        style={{ backgroundColor: selectedScreen.color.name }}
                      />
                    )}
                  </div>
                  <button onClick={() => setIsScreenExpanded(!isScreenExpanded)}>
                    {isScreenExpanded ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </button>
                </div>
                <OptionsList
                  type="screen"
                  consoleType="GBA"
                  onSelectOption={handleSelectScreen}
                  selectDefaultOption={true}
                  isExpanded={isScreenExpanded}
                />
              </div>

              {/* Section Accessoires */}
              <AccessoryList onSelectAccessory={handleSelectAccessory} />

              {/* Vous pouvez également afficher le total du prix ici si vous le souhaitez */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomisationPage;
