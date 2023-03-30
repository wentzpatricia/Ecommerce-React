import { Logo, NavHeader } from './HeaderStyle';
import { Dropdown, Badge } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { useContext } from 'react';
import { CartContext } from './../../contexts/CartContext';
import { Cart } from './../Cart/Cart';
export const Header = () => {
  const { productsCart } = useContext(CartContext);

  return (
    <header>
      <Logo>
        <h1>
          E<span>commerce</span>
        </h1>
      </Logo>
      <NavHeader>
        <nav>
          <ul>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#">Avaliações</a>
            </li>
            <li>
              <a href="#">Nosso Produto</a>
            </li>
            <li>
              <Dropdown>
                <Dropdown.Toggle variant="dark">
                  <FaShoppingCart color="#f25e7a" fontSize="25px" />
                  <Badge bg="light" text="dark">
                    {productsCart.length}
                  </Badge>
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ minWidth: 370 }}>
                  <Cart />
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
        </nav>
      </NavHeader>
    </header>
  );
};
