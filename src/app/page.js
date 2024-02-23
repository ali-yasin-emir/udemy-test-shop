"use client";

import { useRef, useState } from "react";
import Header from "./components/Header";
import Shop from "./components/Shop";
import CartModal from "./components/CartModal";
import { DUMMY_PRODUCTS } from "@/dummy-products";

const Home = () => {

  const modal = useRef();

  const openCart = () => {
    modal.current.open();
  };

  const [cart, setCart] = useState({
    items: []
  })

  const addToCart = (id) =>{
    setCart((prevCart) => {
      
      const updatedCart = [...prevCart.items]

      const cartItemIndex = updatedCart.findIndex((cartItem) => cartItem.id === id)

      const existingCartItem = updatedCart[cartItemIndex]

      if(existingCartItem){
        const updatedCartItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1
        }

        updatedCart[cartItemIndex] = updatedCartItem
      } else{
        const cartItem = DUMMY_PRODUCTS.find((item) => item.id === id)

        updatedCart.push({
          id: cartItem.id,
          price: cartItem.price,
          name: cartItem.title,
          quantity: 1
        })

      }
      console.log(updatedCart)

      return {
        items: updatedCart
      }
    })
  }

 const handleQuantity = (id, amount) => {

  setCart((prevCart) => {
      
    const updatedCart = [...prevCart.items]

    const cartItemIndex = updatedCart.findIndex((cartItem) => cartItem.id === id)
    
    const existingCartItem = updatedCart[cartItemIndex]
    
    const updatedItem = {
      ...existingCartItem, 
      quantity: existingCartItem.quantity + amount
    }

    // updatedItem.quantity += amount
  
    if (updatedItem.quantity <= 0) {
      updatedCart.splice(cartItemIndex, 1);
    } else {
      updatedCart[cartItemIndex] = updatedItem;
    }

    return {
      items: updatedCart
    }
  })
}
  



  return (
    <div className="flex-col">
      {<CartModal handleQuantity={handleQuantity} {...cart} ref={modal} />}
      <Header {...cart} openCart={openCart} />
      <Shop addToCart={addToCart} />
    </div>
  );
};  

export default Home;
