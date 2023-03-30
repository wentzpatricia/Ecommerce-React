import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductInterface } from './ProductInterface';
import { IoMdAdd } from 'react-icons/io';
import { CartContext } from '../../contexts/CartContext';
import { AddCartButtonDetail, ProductDetailList } from './ProductDetailStyle';

interface ProductDetailProps {
  id?: string;
}

export const ProductDetail: React.FC<ProductDetailProps> = (props) => {
  const [data, setData] = useState<ProductInterface | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const { handleAddItemToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`http://localhost:5000/products/${props.id ? props.id : id}`, {
      method: 'GET',
    })
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
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading && <div>Um momentinho, por favor</div>}
      {error && (
        <div>{`Ops, ocorreu um problema na leitura do produto. ${error}`}</div>
      )}
      {data && (
        <ProductDetailList>
          <h3>{data.name}</h3>
          <p>{data.description}</p>
          <h4>
            {data.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </h4>
          <img src={data.image} alt={data.description} />
          <AddCartButtonDetail onClick={() => handleAddItemToCart(data)}>
            Adicionar ao carrinho <IoMdAdd />
          </AddCartButtonDetail>
        </ProductDetailList>
      )}
    </div>
  );
};
