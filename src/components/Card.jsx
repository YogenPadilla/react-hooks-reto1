import Image from "next/image";
import Button from "./Button";

const Card = ({ image, title, description, onClick, id}) => {
  return (
    <div className="flex items-start justify-center rounded-[24px] p-[24px] gap-[24px] bg-gray-400">
      <div className="w-[200px] h-[200px]  ">
        <Image src={image} width={200} height={200} alt="" />
      </div>
      <div className="flex flex-col items-start justify-center p-[16px] gap-[16px] ">
        <h1 className="text-black text-[32px] text-center "> {title} </h1>
        <p className="text-black text-lg"> {description} </p>
      </div>
      <div className="flex flex-col p-[40px] gap-[24px] ml-[96px] ">
        <Button
        label={"Delete"}
          onClick={() => {
            onClick(id);
          }}
        />
      </div>
    </div>
  );
};

export default Card;
