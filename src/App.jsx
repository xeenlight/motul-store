import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import Layout from './layouts/Layout'
import Catalog from './pages/Catalog/Catalog'
import Product from './pages/Product/Product'
import { CartProvider } from './context/CartContext'

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
              element={
                <PlaceholderPage title="Главная" />
              }
            />

            <Route
              path="/catalog"
              element={<Catalog />}
            />

            <Route
              path="/about"
              element={
                <PlaceholderPage title="О нас" />
              }
            />

            <Route
              path="/delivery"
              element={
                <PlaceholderPage title="Доставка и оплата" />
              }
            />

            <Route
              path="/contacts"
              element={
                <PlaceholderPage title="Контакты" />
              }
            />

            <Route
              path="/cart"
              element={
                <PlaceholderPage title="Корзина" />
              }
            />

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