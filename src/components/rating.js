import { FaStar } from "react-icons/fa";

export default function Rating() {
  const colors = {
    red: "#FF5A5F",
    yellow: "#FDCC0D",
  };
  const stars = Array(5).fill("");
  return (
    <div id="star">
      {stars.map((rating, index) => {
        return (
          <FaStar
            key={index}
            size={15}
            color={rating > index ? colors.red : colors.yellow}
          />
        );
      })}
    </div>
  );
}
