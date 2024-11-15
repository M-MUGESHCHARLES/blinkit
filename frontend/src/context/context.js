import React , {createContext, useContext, useEffect, useState } from "react";
import png1 from '../assets/Png/banner-png.png';
import Product from '../assets/Product-sample/Product-1.jpg';

const DataContext = createContext();

export const DataProvider = ({children}) => {

  const [cart, setCart] = useState([]);

  const BannerData = [
    {
      img: png1,
      head: "Pet Care Supplies in Minutes",
      description: "Food, treats, toys & more",
      button: "Order Now",
      backgroundColor: "#EAFFD0",
      buttonColor: "white",
      buttonTextColor: "black",
    },
    {
      img: png1,
      head: "Pet Care Supplies in Minutes",
      description: "Food, treats, toys & more",
      button: "Order Now",
      backgroundColor: "#71C9CE",
      buttonColor: "black",
      buttonTextColor: "white",
    },
    {
      img: png1,
      head: "Pet Care Supplies in Minutes",
      description: "Food, treats, toys & more",
      button: "Order Now",
      backgroundColor: "#CBF1F5",
      buttonColor: "white",
      buttonTextColor: "black",
    },
  ];

  const ProductData = [
    {
      img: Product,
      name: "1 Amul",
      duration: 8,
      weight: "1L",
      price: 71,
      mrp: 74,
      description: "Inclusive of all taxes",
      brand: "Amul",
      category: "Milk",
      offers: [
        {
          icon: "🚀",
          title: "Superfast Delivery",
          description:
            "Get your order delivered to your doorstep at the earliest from dark stores near you.",
        },
        {
          icon: "💸",
          title: "Best Prices & Offers",
          description:
            "Best price destination with offers directly from the manufacturers.",
        },
        {
          icon: "📦",
          title: "Wide Assortment",
          description:
            "Choose from 5000+ products across food, personal care, household & other categories.",
        },
      ],
    },
    {
      img: Product,
      name: "2 Taaza",
      duration: 8,
      weight: "1L",
      price: 71,
      mrp: 74,
      description: "Inclusive of all taxes",
      brand: "Amul",
      category: "Milk",
      offers: [
        {
          icon: "🚀",
          title: "Superfast Delivery",
          description:
            "Get your order delivered to your doorstep at the earliest from dark stores near you.",
        },
        {
          icon: "💸",
          title: "Best Prices & Offers",
          description:
            "Best price destination with offers directly from the manufacturers.",
        },
        {
          icon: "📦",
          title: "Wide Assortment",
          description:
            "Choose from 5000+ products across food, personal care, household & other categories.",
        },
      ],
    },
    {
      img: Product,
      name: "3 Amul Taaza",
      duration: 8,
      weight: "1L",
      price: 71,
      mrp: 74,
      description: "Inclusive of all taxes",
      brand: "Amul",
      category: "Milk",
      offers: [
        {
          icon: "🚀",
          title: "Superfast Delivery",
          description:
            "Get your order delivered to your doorstep at the earliest from dark stores near you.",
        },
        {
          icon: "💸",
          title: "Best Prices & Offers",
          description:
            "Best price destination with offers directly from the manufacturers.",
        },
        {
          icon: "📦",
          title: "Wide Assortment",
          description:
            "Choose from 5000+ products across food, personal care, household & other categories.",
        },
      ],
    },
    {
      img: Product,
      name: "4 Amul Panner butter masala",
      duration: 8,
      weight: "1L",
      price: 71,
      mrp: 74,
      description: "Inclusive of all taxes",
      brand: "Amul",
      category: "Milk",
      offers: [
        {
          icon: "🚀",
          title: "Superfast Delivery",
          description:
            "Get your order delivered to your doorstep at the earliest from dark stores near you.",
        },
        {
          icon: "💸",
          title: "Best Prices & Offers",
          description:
            "Best price destination with offers directly from the manufacturers.",
        },
        {
          icon: "📦",
          title: "Wide Assortment",
          description:
            "Choose from 5000+ products across food, personal care, household & other categories.",
        },
      ],
    },
    {
      img: Product,
      name: "5 Amul Taaza",
      duration: 8,
      weight: "1L",
      price: 71,
      mrp: 74,
      description: "Inclusive of all taxes",
      brand: "Amul",
      category: "Milk",
      offers: [
        {
          icon: "🚀",
          title: "Superfast Delivery",
          description:
            "Get your order delivered to your doorstep at the earliest from dark stores near you.",
        },
        {
          icon: "💸",
          title: "Best Prices & Offers",
          description:
            "Best price destination with offers directly from the manufacturers.",
        },
        {
          icon: "📦",
          title: "Wide Assortment",
          description:
            "Choose from 5000+ products across food, personal care, household & other categories.",
        },
      ],
    },
    {
      img: Product,
      name: "6 Amul Taaza",
      duration: 8,
      weight: "1L",
      price: 71,
      mrp: 74,
      description: "Inclusive of all taxes",
      brand: "Amul",
      category: "Milk",
      offers: [
        {
          icon: "🚀",
          title: "Superfast Delivery",
          description:
            "Get your order delivered to your doorstep at the earliest from dark stores near you.",
        },
        {
          icon: "💸",
          title: "Best Prices & Offers",
          description:
            "Best price destination with offers directly from the manufacturers.",
        },
        {
          icon: "📦",
          title: "Wide Assortment",
          description:
            "Choose from 5000+ products across food, personal care, household & other categories.",
        },
      ],
    },
  ];

  
  

  const contextValue = {
    ProductData,
    BannerData,
    setCart,
    cart,
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

export const useDataContext = () => {
    return useContext(DataContext);
};