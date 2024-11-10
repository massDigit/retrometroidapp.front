"use client";

interface OptionCardProps {
  options: Option[];
  viewType: "front" | "side" | "back";
}

const OptionCard: React.FC<OptionCardProps> = ({ options, viewType }) => {
  const baseUrl = 'http://localhost:3000';

  return (
    <div className="relative w-64 h-64 mb-8">
      {/* Superposition des images pour une vue donnée (front, side, back) */}
      {options.map((option, index) => {
        const imageUrl =
        viewType === "front"
        ? option.optionImgFront
        : viewType === "side"
        ? option.optionImgSide
        : viewType === "back"
        ? option.optionImgBack
        : ""; 

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
