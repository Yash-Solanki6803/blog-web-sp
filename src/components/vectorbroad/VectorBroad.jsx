import Image from "next/image";
import Vector from "../../../public/assets/Vector2.svg";
import classNames from "classnames";

const VectorComponent = ({ size = 1, className = "" }) => {
  return (
    <div
      className={classNames(
        "absolute -z-10",
        // `transform rotate-${rotation}`,
        {
          "w-[150px] h-[150px]": size === 1,
          "w-[300px] h-[300px]": size === 2,
          "w-[450px] h-[450px]": size === 3,
          "w-[600px] h-[600px]": size === 4,
          "w-[750px] h-[750px]": size === 5,
          "w-[900px] h-[900px]": size === 6,
          "w-[1050px] h-[1050px]": size === 7,
          "w-[1200px] h-[1200px]": size === 8,
          "w-[1350px] h-[1350px]": size === 9,
        },
        className
      )}
    >
      <Image
        priority
        src={Vector}
        className="w-full"
        alt="Vector for decoration"
        width="100%"
        height="auto"
      />
    </div>
  );
};

export default VectorComponent;
