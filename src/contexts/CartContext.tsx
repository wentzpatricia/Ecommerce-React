import React, { createContext, useState } from 'react';
import { ProductInterface } from '../components/Product/ProductInterface';

type Props = { children: React.ReactNode };
interface ProductCart extends ProductInterface {
  quantity: number;
}

const DEFAULT_VALUE = {
  handleAddItemToCart: (productItemCart: ProductInterface) => {},
  removeItemToCart: (id: string) => {},
  getTotalPrice: () => 1,
  productsCart: [],
};

interface PropsCartContext {
  handleAddItemToCart: (productItemCart: ProductInterface) => void;
  removeItemToCart: (id: string) => void;
  getTotalPrice: () => number;
  productsCart: ProductCart[];
}

export const CartContext = createContext<PropsCartContext>(DEFAULT_VALUE);

const CartContextProvider: React.FC<Props> = ({ children }) => {
  const [productsCart, setProductsCart] = useState<ProductCart[]>([]);

  const handleAddItemToCart = (productItemCart: ProductInterface) => {
    const copyProducts = [...productsCart];
    const item = copyProducts.find(
      (product: ProductCart) => product.id === productItemCart.id
    );
    if (!item) {
      copyProducts.push({
        ...productItemCart,
        quantity: 1,
      });
    } else {
      item.quantity = item.quantity + 1;
    }
    setProductsCart(copyProducts);
  };

  const removeItemToCart = (id: string) => {
    const copyProducts = [...productsCart];
    const item = copyProducts.find((product) => product.id === id);
    if (item === undefined) {
      throw new Error('Product not found');
    } else if (item.quantity > 1) {
      item.quantity = item.quantity - 1;
      setProductsCart(copyProducts);
    } else {
      const arrayFiltered = copyProducts.filter((product) => product.id !== id);
      setProductsCart(arrayFiltered);
    }
  };

  const getTotalPrice = () => {
    let grandTotal = 0;

    productsCart.map((product: ProductCart) => {
      grandTotal += product.price * product.quantity;
    });
    return grandTotal;
  };

  return (
    <CartContext.Provider
      value={{
        productsCart,
        handleAddItemToCart,
        removeItemToCart,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
