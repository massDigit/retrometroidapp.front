// CustomisationPage.tsx
"use client";

import React, { useState, useEffect, useCallback } from 'react';
import OptionsList from '../components/option/OptionList';
import AccessoryList from '../components/accessory/AccessoryList'; // Import du composant AccessoryList
import Header from '../components/Header';
import OrderButton from '../components/OrderButton';

import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

const CustomisationPage: React.FC = () => {
  // États pour les options sélectionnées (option et couleur)
  const [selectedCoque, setSelectedCoque] = useState<{ option: any | null; color: any | null } | null>(null);
  const [selectedLaniere, setSelectedLaniere] = useState<{ option: any | null; color: any | null } | null>(null);
  const [selectedButton, setSelectedButton] = useState<{ option: any | null; color: any | null } | null>(null);
  const [selectedPad, setSelectedPad] = useState<{ option: any | null; color: any | null } | null>(null);
  const [selectedUsbC, setSelectedUsbC] = useState<{ option: any | null; color: any | null } | null>(null);
  const [selectedSticker, setSelectedSticker] = useState<{ option: any | null; color: any | null } | null>(null);
  const [selectedUpdatedBatterie, setSelectedUpdatedBatterie] = useState<{ option: any | null; color: any | null } | null>(null);
  const [selectedScreen, setSelectedScreen] = useState<{ option: any | null; color: any | null } | null>(null);
  const [selectedLed, setSelectedLed] = useState<{ option: any | null; color: any | null } | null>(null);
  const [selectedBackCoque, setSelectedBackCoque] = useState<{ option: any | null; color: any | null } | null>(null);




  // État pour les accessoires sélectionnés
  const [selectedAccessories, setSelectedAccessories] = useState<any[]>([]);

  // États pour contrôler l'expansion des sections
  const [isCoqueExpanded, setIsCoqueExpanded] = useState(false); // Par défaut fermer
  const [isLaniereExpanded, setIsLaniereExpanded] = useState(false);
  const [isUsbCExpanded, setIsUsbCExpanded] = useState(true);
  const [isButtonExpanded, setIsButtonExpanded] = useState(false);
  const [isPadExpanded, setIsPadExpanded] = useState(false);
  const [isStickerExpanded, setIsStickerExpanded] = useState(false);
  const [isBatterieExpanded, setIsBatterieExpanded] = useState(false);
  const [isScreenExpanded, setIsScreenExpanded] = useState(false);
  const [isLedExpanded, setIsLedExpanded] = useState(false);
  const [isBackCoqueExpanded, setIsBackCoqueExpanded] = useState(false);





  const [viewType, setViewType] = useState('side');

  const [consoleSource, setConsoleSource] = useState<'client' | 'company'>('client');

  const BASE_PRICE = 149;
  const COMPANY_CONSOLE_FEE = 40;

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
  const handleSelectBackCoque = useCallback(
    (option: any, color: any) => {
      // Révoquer les URLs blob de l'option précédente
      if (selectedBackCoque && selectedBackCoque.option) {
        const prevOption = selectedBackCoque.option;
        if (prevOption.imageDataFront) URL.revokeObjectURL(prevOption.imageDataFront);
        if (prevOption.imageDataBack) URL.revokeObjectURL(prevOption.imageDataBack);
        if (prevOption.imageDataSide) URL.revokeObjectURL(prevOption.imageDataSide);
      }

      // Mettre à jour l'option sélectionnée
      setSelectedBackCoque({ option, color });
    },
    [selectedBackCoque]
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
    (option: any|null, color: any|null) => {
      if (selectedUpdatedBatterie && selectedUpdatedBatterie?.option) {
        const prevOption = selectedUpdatedBatterie.option;
        if (prevOption.imageDataFront) URL.revokeObjectURL(prevOption.imageDataFront);
        if (prevOption.imageDataBack) URL.revokeObjectURL(prevOption.imageDataBack);
        if (prevOption.imageDataSide) URL.revokeObjectURL(prevOption.imageDataSide);
      }
      setSelectedUpdatedBatterie({ option, color });
    },
    [selectedUpdatedBatterie]
  );

  const handleSelectUsbC = useCallback(
    (option: any, color: any) => {
      if (selectedUsbC && selectedUsbC?.option) {
        const prevOption = selectedUsbC.option;
        if (prevOption.imageDataFront) URL.revokeObjectURL(prevOption.imageDataFront);
        if (prevOption.imageDataBack) URL.revokeObjectURL(prevOption.imageDataBack);
        if (prevOption.imageDataSide) URL.revokeObjectURL(prevOption.imageDataSide);
      }
      setSelectedUsbC({ option, color });
      
    },
    [selectedUsbC]
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

  const handleSelectLed = useCallback(
    (option: any, color: any) => {
      if (selectedLed && selectedLed?.option) {
        const prevOption = selectedLed.option;
        if (prevOption.imageDataFront) URL.revokeObjectURL(prevOption.imageDataFront);
        if (prevOption.imageDataBack) URL.revokeObjectURL(prevOption.imageDataBack);
        if (prevOption.imageDataSide) URL.revokeObjectURL(prevOption.imageDataSide);
      }
      setSelectedLed({ option, color });
    },
    [selectedLed]
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
    if (!selectedOption || !selectedOption.option) return ''; // Vérifie si l'option existe

    const option = selectedOption.option;
  
    if (viewType === 'front') {
      return option.imageDataFront || ''; // Retourne une chaîne vide si imageDataFront est undefined
    } else if (viewType === 'side') {
      return option.imageDataSide || ''; // Retourne une chaîne vide si imageDataSide est undefined
    } else if (viewType === 'back') {
      return option.imageDataBack || ''; // Retourne une chaîne vide si imageDataBack est undefined
    }
  
    return '';
  };

  

  const calculateTotalPrice = () => {
    let total = BASE_PRICE;

    if (consoleSource === 'company') {
      total += COMPANY_CONSOLE_FEE;
    }
  
    const options = [
      selectedCoque,
      selectedBackCoque,
      selectedLaniere,
      selectedButton,
      selectedPad,
      selectedSticker,
      selectedUsbC,
      selectedUpdatedBatterie,
      selectedScreen,
      selectedLed,
    ];
  
    options.forEach((selectedOption) => {
      if (
        selectedOption &&
        selectedOption.option &&
        selectedOption.option.price &&
        selectedOption.option.price > 0
      ) {
        total += selectedOption.option.price;
      }
    });
  
    selectedAccessories.forEach((accessory) => {
      if (accessory.price && accessory.price > 0) {
        total += accessory.price;
      }
    });
  
    return total;
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
      revokeOptionImages(selectedUpdatedBatterie);
      revokeOptionImages(selectedScreen);
      revokeOptionImages(selectedUsbC);
      revokeOptionImages(selectedLed);
      revokeOptionImages(selectedBackCoque)
    };
  }, []); // Dépendances vides pour n'exécuter qu'au démontage

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className='flex justify-center items-center w-full h-full'>
      <div className="flex mt-4 flex-col md:w-4/6 md:flex-row justify-center">
        {/* Section de gauche - Aperçu */}
        <div className="flex w-full md:w-4/6 border-4 justify-center ">
          <div className="w-full p-4 flex flex-col items-center">
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
                {selectedBackCoque && getImageData(selectedBackCoque) && (
                  <img
                    src={getImageData(selectedBackCoque)}
                    alt={selectedBackCoque.option.name}
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
                {selectedUsbC && getImageData(selectedUsbC) && (
                  <img
                  src={getImageData(selectedUsbC)}
                  alt={selectedUsbC.option.name}
                  className='absolute w-full h-full object-contain'
                  />
                )}
                {selectedLed && getImageData(selectedLed) && (
                  <img
                  src={getImageData(selectedLed)}
                  alt={selectedLed.option.name}
                  className='absolute w-full h-full object-contain'
                  />
                )}
                {selectedUpdatedBatterie && getImageData(selectedUpdatedBatterie) && (
                  <img
                    src={getImageData(selectedUpdatedBatterie)}
                    alt={selectedUpdatedBatterie.option.name}
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
        <div className="w-full md:w-2/5 p-4 flex flex-col h-[70vh] md:h-[600px]">
        <h2 className="text-lg font-semibold text-left mb-4">Configuration</h2>
        <div className="flex-1 overflow-y-auto">
          <div className="space-y-4">
            <div className="mt-4">
                <h3 className="font-medium mb-2">Sélection de la console</h3>
                <div className="flex flex-col">
                  <label className="flex items-center mb-2">
                    <input
                      type="radio"
                      value="client"
                      checked={consoleSource === 'client'}
                      onChange={() => setConsoleSource('client')}
                      className="mr-2"
                    />
                    Console du client
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="company"
                      checked={consoleSource === 'company'}
                      onChange={() => setConsoleSource('company')}
                      className="mr-2"
                    />
                    Console de l'entreprise (+40€)
                  </label>
                </div>
              </div>
              {/* Section Coque */}
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <h3 className="font-medium mr-2">Coque</h3>
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
                  consoleType="GBA-SP"
                  onSelectOption={handleSelectCoque}
                  selectDefaultOption={true}
                  isExpanded={isCoqueExpanded}
                />
              </div>

              {/* Section Coque arriere */}
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <h3 className="font-medium mr-2">Coque Arrière</h3>
                    {selectedBackCoque && (
                      <span
                        className="w-4 h-4 rounded-full border border-gray-300"
                        style={{ backgroundColor: selectedBackCoque.color.name }}
                      />
                    )}
                  </div>
                  <button onClick={() => setIsBackCoqueExpanded(!isBackCoqueExpanded)}>
                    {isBackCoqueExpanded ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </button>
                </div>
                <OptionsList
                  type="coque arrière"
                  consoleType="GBA-SP"
                  onSelectOption={handleSelectBackCoque}
                  selectDefaultOption={true}
                  isExpanded={isBackCoqueExpanded}
                />
              </div>

              {/* Section Lanière */}
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <h3 className="font-medium mr-2">Lanière</h3>
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
                  consoleType="GBA-SP"
                  onSelectOption={handleSelectLaniere}
                  selectDefaultOption={true}
                  isExpanded={isLaniereExpanded}
                />
              </div>

              {/* Section Boutons */}
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <h3 className="font-medium mr-2">Boutons</h3>
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
                  consoleType="GBA-SP"
                  onSelectOption={handleSelectButton}
                  selectDefaultOption={true}
                  isExpanded={isButtonExpanded}
                />
              </div>

              {/* Section Pad */}
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <h3 className="font-medium mr-2">Pad</h3>
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
                  consoleType="GBA-SP"
                  onSelectOption={handleSelectPad}
                  selectDefaultOption={true}
                  isExpanded={isPadExpanded}
                />
              </div>

              {/* Section Stickers */}
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <h3 className="font-medium mr-2">Stickers</h3>
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
                  consoleType="GBA-SP"
                  onSelectOption={handleSelectSticker}
                  selectDefaultOption={false}
                  isExpanded={isStickerExpanded}
                />
              </div>

              {/* Section Usb_C */}
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <h3 className="font-medium mr-2">Usb-c</h3>
                    {selectedUsbC?.option?.price && (
                      <span>(+{selectedUsbC.option.price}€)</span>
                      
                    )}
                  </div>
                  <button onClick={() => setIsUsbCExpanded(!isUsbCExpanded)}>
                    {isUsbCExpanded ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </button>
                </div>
                <OptionsList
                  type="usb-c"
                  consoleType="GBA-SP"
                  onSelectOption={handleSelectUsbC}
                  selectDefaultOption={false}
                  isExpanded={isUsbCExpanded }
                />
              </div>

              {/* Section led */}
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <h3 className="font-medium mr-2">LED RGBD</h3>
                    {selectedLed?.option?.price && (
                      <span>(+{selectedLed?.option?.price}€)</span>
                      
                    )}
                  </div>
                  <button onClick={() => setIsLedExpanded(!isLedExpanded)}>
                    {isLedExpanded ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </button>
                </div>
                <OptionsList
                  type="LED RGB"
                  consoleType="GBA-SP"
                  onSelectOption={handleSelectLed}
                  selectDefaultOption={false}
                  isExpanded={isLedExpanded }
                />
              </div>

              {/* Section Batterie */}
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <h3 className="font-medium mr-2">Upgrade batterie</h3>
                    {selectedUpdatedBatterie?.option?.price && (
                      <span>(+{selectedUpdatedBatterie.option.price}€)</span>
                    )}
                  </div>
                  <button onClick={() => setIsBatterieExpanded(!isBatterieExpanded)}>
                    {isBatterieExpanded ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </button>
                </div>
                <OptionsList
                  type="upgraded batterie"
                  consoleType="GBA-SP"
                  onSelectOption={handleSelectBatterie}
                  selectDefaultOption={false}
                  isExpanded={isBatterieExpanded}
                />
              </div>

              {/* Section Écran */}
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <h3 className="font-medium mr-2">Écran</h3>
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
                  consoleType="GBA-SP"
                  onSelectOption={handleSelectScreen}
                  selectDefaultOption={true}
                  isExpanded={isScreenExpanded}
                />
              </div>

              {/* Section Accessoires */}
              <AccessoryList onSelectAccessory={handleSelectAccessory} />
            </div>
          </div>
          <div>
              {/* Affichage du prix total */}
          <div className="mt-4">
                <h3 className="text-xl font-semibold">
                  Prix Total : {calculateTotalPrice().toFixed(2)} €
                </h3>
          </div>
          {/* Section pour passer la commande */}
          <div className="mt-8">
            <OrderButton
              selectedOptions={{
                selectedCoque,
                selectedLaniere,
                selectedButton,
                selectedPad,
                selectedSticker,
                selectedUpdatedBatterie,
                selectedScreen,
              }}
              selectedAccessories={selectedAccessories}
              consoleSource={consoleSource}
              totalPrice={calculateTotalPrice()}
            />
          </div>
          </div>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default CustomisationPage;
