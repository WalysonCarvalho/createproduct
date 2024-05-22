"use client";

import { Product } from "@/app/page";
import axios from "axios";
import { Footer, Products, Span, Strong } from "@/styles/home";

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
  return (
    <Products className="keen-slider__slide">
      <Image src={product.image} width={520} height={480} alt="" />
      <Footer>
        <Strong>{product.title} </Strong>
        <Span>R${product.price}</Span>
      </Footer>
    </Products>
  );
}
