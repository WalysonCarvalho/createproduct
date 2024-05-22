"use client";

import { Product } from "@/app/page";
import axios from "axios";
import { Body, Footer, Div, Products, Span, Strong } from "@/styles/home";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useState } from "react";
import Image from "next/image";
export default function ProductPage({ params }: { params: { slug: string } }) {
  const [product, setProduct] = useState<Product>({} as Product);
  useEffect(() => {
    getProductById();
  }, []);

  async function getProductById() {
    try {
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/${params.slug}`
      );

      setProduct(data);
    } catch (error) {
      console.log(error);
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
      <Products className="keen-slider__slide">
        <Image src={product.image} width={420} height={380} alt="" />
        <Footer>
          <Strong>{product.title} </Strong>
          <Span>R${product.price}</Span>
        </Footer>
        <Div>{product.description}</Div>
      </Products>
      
    </Body>
    
  );
}
