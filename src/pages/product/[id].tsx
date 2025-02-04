import { ImageContainer, ProductContainer, ProductDetails } from "@/src/styles/pages/product";
import { useRouter } from "next/router";

export default function Product() {
  const { query } = useRouter();

  const { id } = query;

  return (
    <ProductContainer>
      <ImageContainer>

      </ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 70,90</span>

        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, perspiciatis in totam tenetur voluptate nisi quasi? Consequatur harum doloribus fugit voluptatem ipsa blanditiis totam quis amet non, saepe praesentium quo!</p>

        <button>
          Comprar agora
        </button>
      </ProductDetails>
    </ProductContainer>
  );
}
