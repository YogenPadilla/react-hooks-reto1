import { useState } from "react";
import Card from "./Card";
import Button from "./Button";

const products = [
  {
    image: "/assets/card/apple.png",
    title: "Apple",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },

  {
    image: "/assets/card/discord.png",
    title: "Discord",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },

  {
    image: "/assets/card/facebook.png",
    title: "Facebook",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },

  {
    image: "/assets/card/instagram.png",
    title: "Instagram",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },

  {
    image: "/assets/card/pinterest.png",
    title: "Pinterest",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },

  {
    image: "/assets/card/rappi.png",
    title: "Rappi",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },

  {
    image: "/assets/card/spotify.png",
    title: "Spotify",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },

  {
    image: "/assets/card/twitter.png",
    title: "Twitter",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },

  {
    image: "/assets/card/whatsapp.png",
    title: "Whatsapp",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },

  {
    image: "/assets/card/youtube.png",
    title: "Youtube",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Crud = () => {
  
  const [product, setProduct] = useState([products[0]]);

  return (
    <div className="flex flex-col items-center gap-[24px] ">
      {product.map((card, index) => (
        <Card
          id={index}
          image={card.image}
          title={card.title}
          description={card.description}
          onClick={(id) => {
            const tmpProduct = product;
            tmpProduct.splice(id, 1);
            setProduct([...tmpProduct]);
          }}
        />
      ))}
      <div className="w-full flex items-center justify-center mt-[80px]">
        <Button
          label={"Añadir Tarjeta"}
          onClick={() => {
            setProduct([
              ...product,
              products[Math.floor(Math.random() * products.length)],
            ]);
          }}
        />
      </div>
    </div>
  );
};

export default Crud;
