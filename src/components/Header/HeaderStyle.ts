import styled from 'styled-components';

export const Logo = styled.div`
  width: 100%;
  background-color: #0d0d0d;
  h1 {
    color: #f25e7a;
    padding: 20px;
    margin: 0;
    font-size: 40px;
  }
  span {
    color: #f2f2f2;
    font-size: 45px;
    border-bottom: 1px solid #f25e7a;
  }
`;

export const NavHeader = styled.div`
  padding: 0 30px;
  background-color: #0d0d0d;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 40px;

  ul {
    padding: 0;
    margin: 0;
  }

  ul li {
    display: inline-block;
    margin-left: 24px;
    transition: 0.3s ease-in-out;
    color: #f2f2f2;
  }
  a {
    color: #f2f2f2;
    text-decoration: none;
    transition: 0.3s ease-in-out;
  }
  a:hover {
    color: #f25e7a;
    transition: 0.3s ease-in-out;
  }
  svg {
    margin: 0 10px;
  }
`;
