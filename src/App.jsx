import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import Home from './pages/Home/Home'
import Layout from './layouts/Layout'
import Catalog from './pages/Catalog/Catalog'
import Product from './pages/Product/Product'
import About from './pages/About/About'
import Delivery from './pages/Delivery/Delivery'
import Contacts from './pages/Contacts/Contacts'
import { CartProvider } from './context/CartContext'
import Cart from './pages/Cart/Cart'
function PlaceholderPage({ title }) {
  return (
    <section
      style={{
        minHeight: '70vh',
        padding: '80px 24px',
        maxWidth: '1440px',
        margin: '0 auto',
      }}
    >
      <h1
        style={{
          margin: 0,
          fontSize: '42px',
          fontWeight: 800,
        }}
      >
        {title}
      </h1>
    </section>
  )
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>

          <Route element={<Layout />}>

            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/catalog"
              element={<Catalog />}
            />

            <Route
              path="/about"
              element={<About />}
              
            />

            <Route
              path="/delivery"
              element={<Delivery />}
            />

            <Route
              path="/contacts"
              element={<Contacts />}
            />

            <Route path="/cart" element={<Cart />} />

            <Route
              path="/product/:id"
              element={<Product />}
            />

          </Route>

        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App