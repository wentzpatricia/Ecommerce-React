import { Header } from './components/Header/Header';
import { Product } from './components/Product/Product';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductDetail } from './components/Product/ProductDetail';
import CartContextProvider from './contexts/CartContext';

function App() {
  return (
    <div className="App">
      <Router>
        <CartContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Product />} />
            <Route path="/products" element={<Product />} />
            <Route path="/products/:id" element={<ProductDetail />} />
          </Routes>
        </CartContextProvider>
      </Router>
    </div>
  );
}

export default App;
