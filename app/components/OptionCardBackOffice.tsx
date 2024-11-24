interface OptionCardProps {
  option: {
    name: string;
    price?: number;
    optionImgFront?: string;
  };
}

const OptionCard: React.FC<OptionCardProps> = ({ option }) => {
  return (
    <div className="bg-blue-900 text-white border-4 border-yellow-500 shadow-lg p-4 rounded-lg w-64 transition-transform transform hover:scale-105">
      <img
        src={option.optionImgFront || "/images/placeholder.jpg"}
        alt={option.name}
        className="w-full h-40 object-cover mb-4 border-4 border-pink-500"
      />
      <h3 className="text-xl font-bold mb-2">{option.name}</h3>
      {option.price && (
        <p className="text-yellow-300 font-semibold">Prix : {option.price} €</p>
      )}
    </div>
  );
};

export default OptionCard;
