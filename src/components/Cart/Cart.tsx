import { useContext } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { CartContext } from '../../contexts/CartContext';
import {
  ProductCartList,
  CartEmpty,
  ButtonDeleteItem,
  QuantityItem,
  TotalPrice,
  ProductName,
} from './CartStyle';
import { ProductCartInterface } from './ProductCartInterface';
import { ImSad } from 'react-icons/im';

export const Cart = () => {
  const { productsCart, removeItemToCart, getTotalPrice } =
    useContext(CartContext);

  return (
    <ProductCartList>
      {productsCart.length === 0 && (
        <CartEmpty style={{ padding: 10 }}>
          Cart is Empty! <ImSad color="#f25e7a" />
        </CartEmpty>
      )}
      {productsCart.map((product: ProductCartInterface) => {
        return (
          <ul key={product.id}>
            <QuantityItem>
              {productsCart.find((item) => item.id === product.id)?.quantity}
            </QuantityItem>
            <ProductName>{product.name}</ProductName>
            <li>
              {product.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </li>
            <li>
              <ButtonDeleteItem
                onClick={() => {
                  removeItemToCart(product.id);
                }}
              >
                <FaTrashAlt />
              </ButtonDeleteItem>
            </li>
          </ul>
        );
      })}
      <TotalPrice>
        {productsCart.length !== 0 && (
          <h3>
            Total da compra:
            <span>
              {getTotalPrice().toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
          </h3>
        )}
      </TotalPrice>
    </ProductCartList>
  );
};
