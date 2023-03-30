import styled from 'styled-components';
export const ProductDetailList = styled.div`
  padding-top: 20px;
  transition-duration: 5s;
  transition-delay: 2s;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  h3 {
    font-size: 20px;
    text-transform: uppercase;
    font-weight: lighter;
    padding-bottom: 10px;
    border-bottom: 1px solid #f23207;
  }
  p {
    text-align: center;
    margin-bottom: 20px;
  }
  h4 {
    font-weight: lighter;
    font-size: 30px;
    color: #f23207;
  }
  img {
    width: 400px;
    border-radius: 50%;
    transition: transform 1s;
    margin: 20px auto;
  }
  img:hover {
    transform: rotateY(180deg);
    transition: transform 1s;
  }
`;

export const AddCartButtonDetail = styled.button`
  border: solid 2px #f23207;
  padding: 10px;
  border-radius: 15px;
  color: #f23207;
  font-weight: bold;
  margin: 20px auto;
  font-size: 15px;
  transition: 0.3s ease-in-out;
  display: block;
  :hover {
    transition: 0.3s ease-in-out;
    transform: scale(1.1);
  }
`;
