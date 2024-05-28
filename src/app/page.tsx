"use client";
import { GlobalStyle } from "@/styles/global";
import {
  Body,Div,Footer,HomeContainer, Products, Span, Strong,} from "@/styles/home";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import "keen-slider/keen-slider.min.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export type Product = {
  id: number;
  description: string;
  image: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  };
  title: string;
};
export default function Home() {
  const [products, setProducts] = useState <Product[]>([]);
  useEffect(() => {
    getAllProducts();
  }, []);

  async function getAllProducts() {
    try {
      const { data } = await axios.get("https://fakestoreapi.com/products/");

      setProducts(data);
    } catch (error) {
      console.log(error )
      
    }
  }
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });


  return (
    <Body>
      <GlobalStyle />
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.length > 0 && (
          <>
            {products.map((product) => (
              <Link href={`/product/${product.id}`}>
                <Products className="keen-slider__slide">
                  <Image src={product.image} width={520} height={480} alt="" />
                  
                  <Footer>
                    <Strong>{product.title} </Strong>
                    <Span>R${product.price}</Span>
                    
                  </Footer>
                  
                </Products>
              </Link>
            ))}
          </>
        )}

        
      </HomeContainer>
    </Body>

    
  );
}
