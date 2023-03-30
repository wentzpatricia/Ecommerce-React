import styled from 'styled-components';

export const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  img {
    width: 300px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    padding: 0;
    margin: 25px;
  }

  ul li {
    margin-bottom: 15px;
  }

  ul li button {
    transition: 0.3s ease-in-out;
    border: 1px solid #fff;
  }

  ul li button:hover {
    border: 1px solid #f25e7a;
    transition: 0.3s ease-in-out;
    transform: scale(1.1);
  }
`;

export const ProducListTitle = styled.div`
  width: 100%;
  display: block;
  text-align: center;
  h2 {
    font-weight: lighter;
    font-size: 50px;
    color: #0d0d0d;
    border-bottom: 2px solid #f25e7a;
    padding-bottom: 20px;
    width: 35%;
    margin: 25px auto;
  }
`;

export const ProductPrice = styled.li`
  font-size: 25px;
  border: 1px solid #f23207;
  padding: 10px;
  margin-bottom: 0;
`;

export const AddCartButton = styled.li`
  button {
    align-items: center;
    background-color: #f25e7a;
    color: #f2f2f2;
    border-style: none;
    border-radius: 10px;
    font-size: 14px;
    padding: 7px;
  }

  button:hover {
    background-color: #f2f2f2;
    color: #f25e7a;
  }
`;
