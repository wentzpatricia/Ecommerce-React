import styled from 'styled-components';

export const ProductCartList = styled.div`
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  margin: 0 10px;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #d3d3d3;
    padding-bottom: 2px;
    padding-top: 10px;
  }

  ul li {
    padding: 0 5px;
    margin: 0;
    color: #0d0d0d;
    margin-bottom: 10px;
    margin-left: 2px;
  }
  ul li:hover {
    transform: scale(1);
    border-bottom: none;
    color: #0d0d0d;
  }
`;

export const CartEmpty = styled.span`
  font-size: 20px;
`;

export const ButtonDeleteItem = styled.button`
  border-style: none;
  background: none;
  color: #f25e7a;
  transition: 0.3s ease-in-out;
  :hover {
    transform: scale(1.3);
  }
`;

export const QuantityItem = styled.li`
  border: 1px solid #f25e7a;
  border-radius: 50px;
`;

export const TotalPrice = styled.div`
  h3 {
    margin-top: 10px;
    font-size: 20px;
  }

  span {
    color: #f25e7a;
    font-weight: bolder;
  }
`;

export const ProductName = styled.li`
  width: 60%;
`;
