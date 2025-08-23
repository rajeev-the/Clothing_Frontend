import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function Rating() {
  const [rating, setRating] = useState(4);

  return (
    <div className="flex space-x-2">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <FaStar
            key={index}
            size={28}
            onClick={() => setRating(starValue)}
            className={`cursor-pointer transition-colors duration-200 ${
              starValue <= rating ? "text-[#E5C870]" : "text-gray-300"
            }`}
          />
        );
      })}
    </div>
  );
}
