import { useState, useEffect, useContext } from 'react';
import { ProductInterface } from './ProductInterface';
import { CartContext } from './../../contexts/CartContext';
import {
  AddCartButton,
  ProducListTitle,
  ProductList,
  ProductPrice,
} from './ProductStyle';

import { IoMdAdd } from 'react-icons/io';
import { useModal } from '../../hooks/useModal';
import { Modal } from '../Modal/Modal';
import { ProductDetail } from './ProductDetail';

export const Product = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { isOpen, toggle } = useModal();

  const [selectId, setSelectId] = useState('');

  const { handleAddItemToCart } = useContext(CartContext);

  const toggleHandler = (id: string) => {
    setSelectId(id);
    toggle();
  };

  useEffect(() => {
    fetch('http://localhost:5000/products', { method: 'GET' })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {
        setData(actualData);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setData([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <ProductList>
      <ProducListTitle>
        <h2>Produtos</h2>
      </ProducListTitle>

      {loading && <div>Um momentinho, por favor</div>}
      {error && (
        <div>{`Ops, ocorreu um problema na leitura dos produtos. ${error}`}</div>
      )}

      {data &&
        data.map((product: ProductInterface) => {
          return (
            <ul key={product.id}>
              <li>
                <button
                  onClick={() => {
                    toggleHandler(product.id);
                  }}
                >
                  <img src={product.image} alt={product.description} />
                </button>
              </li>
              <li>{product.name}</li>
              <ProductPrice>
                {product.price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </ProductPrice>
              <AddCartButton>
                <button onClick={() => handleAddItemToCart(product)}>
                  Adicionar ao carrinho <IoMdAdd />
                </button>
              </AddCartButton>
            </ul>
          );
        })}
      <Modal isOpen={isOpen} toggle={toggle}>
        <ProductDetail id={selectId}></ProductDetail>
      </Modal>
    </ProductList>
  );
};
