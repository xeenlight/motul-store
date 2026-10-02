import { NavLink } from 'react-router-dom'
import { X, ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'

import styles from './BurgerMenu.module.css'

function BurgerMenu({
  isOpen,
  onClose,
  navigation,
}) {
  const { t } = useTranslation()

  return (
    <>
      {/* Overlay */}
      <div
        className={`
          ${styles.overlay}
          ${isOpen ? styles.overlayOpen : ''}
        `}
        onClick={onClose}
      />

      {/* Drawer */}
      <aside
        className={`
          ${styles.drawer}
          ${isOpen ? styles.drawerOpen : ''}
        `}
      >

        {/* HEADER */}
        <div className={styles.drawerHeader}>

          <div className={styles.drawerLogo}>
            <span className={styles.drawerLogoName}>
              MOTUL
            </span>

            <span className={styles.drawerLogoSub}>
              Motor Oils
            </span>
          </div>

          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className={styles.closeButton}
          >
            <X size={20} />
          </button>

        </div>

        {/* CONTENT */}
        <div className={styles.content}>

          <p className={styles.sectionLabel}>
            Navigation
          </p>

          <nav className={styles.navigation}>

            {navigation.map((item, index) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={({ isActive }) => `
                  ${styles.navLink}
                  ${isActive ? styles.navLinkActive : ''}
                `}
              >
                {({ isActive }) => (
                  <>
                    <div className={styles.navLeft}>

                      <span className={styles.number}>
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <span className={styles.navLabel}>
                        {item.label}
                      </span>

                    </div>

                    <ArrowRight
                      size={17}
                      className={styles.arrow}
                    />
                  </>
                )}
              </NavLink>
            ))}

          </nav>

          {/* LANGUAGE */}
          <div className={styles.languageSection}>

            <p className={styles.sectionLabel}>
              {t('common.language')}
            </p>

            <LanguageSwitcher />

          </div>

        </div>

        {/* FOOTER */}
        <div className={styles.drawerFooter}>
          <p className={styles.footerText}>
            Оригинальные моторные масла
            и автохимия MOTUL.
          </p>
        </div>

      </aside>
    </>
  )
}

export default BurgerMenu