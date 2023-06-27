import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CheckoutPage from './Components/CheckoutPage';
import Home from './Components/Home';
import LoginPage from './Components/LogInPage';
import MyAccount from './Components/MyAccount';
import ProductsPage from './Components/ProductsPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/myAccount" element={<MyAccount />} />
      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
  </Router>
);

export default App;
