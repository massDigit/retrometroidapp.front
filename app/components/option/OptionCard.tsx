"use client";
import React, { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

interface Option {
  _id: string;
  name: string;
  description: string;
  optionImgFront?: string;
  optionImgBack?: string;
  optionImgSide?: string;
  price?: number;
}

interface OptionCardProps {
  options: Option[];
  viewType?: "front" | "side" | "back";
  single?: boolean;
}

const OptionCard: React.FC<OptionCardProps> = ({ options, viewType = "front", single = false }) => {
  const baseUrl = 'http://localhost:3000';
  const [currentView, setCurrentView] = useState<"front" | "side" | "back">("front");

  const handleNextView = () => {
    setCurrentView((prevView) =>
      prevView === "front" ? "side" : prevView === "side" ? "back" : "front"
    );
  };

  const handlePreviousView = () => {
    setCurrentView((prevView) =>
      prevView === "back" ? "side" : prevView === "side" ? "front" : "back"
    );
  };

  if (single) {
    return (
      <div className="bg-white shadow-md rounded-lg p-4 
      w-full sm:w-60 md:w-64 lg:w-72 xl:w-80 mb-8 
      flex flex-col justify-center items-center">
        {options.map((option) => (
          <div key={option._id}>
            <h3 className="text-lg font-bold mb-2">{option.name}</h3>
            <div className="bg-white shadow-md rounded-lg p-4 mb-8 flex-shrink-0" style={{ minWidth: '20rem', maxWidth: '20rem' }}>
              {currentView === "front" && option.optionImgFront && (
                <img
                  src={`${baseUrl}${option.optionImgFront}`}
                  alt={`${option.name} - Vue avant`}
                  className="w-full object-contain mt-4"
                />
              )}
              {currentView === "side" && option.optionImgSide && (
                <img
                  src={`${baseUrl}${option.optionImgSide}`}
                  alt={`${option.name} - Vue latérale`}
                  className="w-full object-contain mt-4"
                />
              )}
              {currentView === "back" && option.optionImgBack && (
                <img
                  src={`${baseUrl}${option.optionImgBack}`}
                  alt={`${option.name} - Vue arrière`}
                  className="w-full object-contain mt-4"
                />
              )}
            </div>
            <div className="flex justify-between mt-4">
              <button onClick={handlePreviousView} className="text-sm text-blue-500">
              <FiArrowLeft size={24} />
              </button>
              <button onClick={handleNextView} className="text-sm text-blue-500">
              <FiArrowRight size={24} />
              </button>
            </div>
            {option.price && (
              <p className="text-gray-900 font-bold mt-4">Prix : {option.price} €</p>
            )}
          </div>
        ))}
      </div>
    );
  }

  // Affichage des options superposées lorsque `single` est faux
  return (
    <div className="relative w-64 h-64 mb-8">
      {options.map((option, index) => {
        const imageUrl =
          viewType === "front"
            ? option.optionImgFront
            : viewType === "side"
            ? option.optionImgSide
            : option.optionImgBack;

        return (
          imageUrl && (
            <img
              key={option._id}
              src={`${baseUrl}${imageUrl}`}
              alt={`${option.name} - Vue ${viewType}`}
              className="absolute top-0 left-0 w-full h-full object-contain"
              style={{ zIndex: index }}
            />
          )
        );
      })}
    </div>
  );
};

export default OptionCard;
