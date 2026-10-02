import { Outlet } from 'react-router-dom'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

function Layout() {
  return (
    <div className="app">
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default Layout