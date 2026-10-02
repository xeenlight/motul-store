import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
  Search,
  ShoppingCart,
  Menu,
  ArrowUpRight,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useCart } from '../../context/CartContext'

import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'
import BurgerMenu from '../BurgerMenu/BurgerMenu'

import styles from './Header.module.css'

function Header() {
  const { t } = useTranslation()
  const { totalItems } = useCart()

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    {
      label: t('common.home'),
      path: '/',
    },
    {
      label: t('common.catalog'),
      path: '/catalog',
    },
    {
      label: t('common.about'),
      path: '/about',
    },
    {
      label: t('common.delivery'),
      path: '/delivery',
    },
    {
      label: t('common.contacts'),
      path: '/contacts',
    },
  ]

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <header className={styles.header}>
        <div className={styles.topLine} />

        <div className={styles.headerInner}>
          <div className={styles.container}>

            {/* LOGO */}
            <Link
              to="/"
              onClick={closeMobileMenu}
              className={styles.logo}
            >
              <div className={styles.logoContent}>
                <div className={styles.logoMark}>
                  <span className={styles.logoLetter}>
                    M
                  </span>

                  <span className={styles.logoCircle} />
                </div>

                <div className={styles.logoText}>
                  <span className={styles.logoName}>
                    MOTUL
                  </span>

                  <span className={styles.logoSub}>
                    Motor Oils
                  </span>
                </div>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <nav className={styles.desktopNav}>
              {navigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `${styles.navLink} ${
                      isActive
                        ? styles.navLinkActive
                        : ''
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* ACTIONS */}
            <div className={styles.actions}>

              {/* SEARCH */}
              <Link
                to="/catalog"
                aria-label={t('common.search')}
                className={styles.iconButton}
              >
                <Search
                  size={19}
                  strokeWidth={2}
                />
              </Link>

              {/* LANGUAGE */}
              <LanguageSwitcher />

              {/* CART */}
              <Link
                to="/cart"
                className={styles.cartButton}
                aria-label={`Корзина: ${totalItems} товаров`}
              >
                <ShoppingCart size={22} />

                {totalItems > 0 && (
                  <span className={styles.cartBadge}>
                    {totalItems > 99 ? '99+' : totalItems}
                  </span>
                )}
              </Link>

              {/* CATALOG */}
              <Link
                to="/catalog"
                className={styles.catalogButton}
              >
                {t('common.catalog')}
                <ArrowUpRight size={14} />
              </Link>

              {/* MOBILE MENU */}
              <button
                type="button"
                aria-label="Open menu"
                aria-expanded={mobileMenuOpen}
                onClick={() => setMobileMenuOpen(true)}
                className={styles.menuButton}
              >
                <Menu
                  size={21}
                  strokeWidth={2}
                />
              </button>

            </div>
          </div>
        </div>
      </header>

      <BurgerMenu
        isOpen={mobileMenuOpen}
        onClose={closeMobileMenu}
        navigation={navigation}
      />
    </>
  )
}

export default Header