import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  MapPin,
  Phone,
  Send,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'

import styles from './Footer.module.css'

function Footer() {
  const { t } = useTranslation()

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

  return (
    <footer className={styles.footer}>

      <div className={styles.container}>

        {/* TOP */}
        <div className={styles.top}>

          {/* BRAND */}
          <div className={styles.brandColumn}>

            <Link
              to="/"
              className={styles.logo}
            >
              <span className={styles.logoMark}>
                M
              </span>

              <span className={styles.logoName}>
                MOTUL
              </span>
            </Link>

            <p className={styles.description}>
              Оригинальные моторные масла
              и автохимия для автомобилей
              и мототехники.
            </p>

            <Link
              to="/catalog"
              className={styles.catalogLink}
            >
              Перейти в каталог

              <ArrowUpRight size={15} />
            </Link>

          </div>

          {/* NAVIGATION */}
          <div className={styles.column}>

            <h3 className={styles.title}>
              Навигация
            </h3>

            <nav className={styles.links}>
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={styles.link}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

          </div>

          {/* CONTACTS */}
          <div className={styles.column}>

            <h3 className={styles.title}>
              Контакты
            </h3>

            <div className={styles.contactList}>

              <a
                href="tel:+998901234567"
                className={styles.contact}
              >
                <span className={styles.contactIcon}>
                  <Phone size={16} />
                </span>

                <span>
                  +998 90 123 45 67
                </span>
              </a>

              <a
                href="https://t.me/"
                target="_blank"
                rel="noreferrer"
                className={styles.contact}
              >
                <span className={styles.contactIcon}>
                  <Send size={16} />
                </span>

                <span>
                  Telegram
                </span>
              </a>

              <div className={styles.contact}>
                <span className={styles.contactIcon}>
                  <MapPin size={16} />
                </span>

                <span>
                  Ташкент, Узбекистан
                </span>
              </div>

            </div>

          </div>

          {/* WORKING HOURS */}
          <div className={styles.column}>

            <h3 className={styles.title}>
              Режим работы
            </h3>

            <div className={styles.hours}>
              <div>
                <span>
                  Пн — Сб
                </span>

                <strong>
                  09:00 — 20:00
                </strong>
              </div>

              <div>
                <span>
                  Вс
                </span>

                <strong>
                  10:00 — 18:00
                </strong>
              </div>
            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className={styles.bottom}>

          <span>
            © {new Date().getFullYear()} MOTUL Store.
            Все права защищены.
          </span>

          <div className={styles.bottomLinks}>
            <Link to="/delivery">
              Доставка и оплата
            </Link>

            <Link to="/contacts">
              Контакты
            </Link>
          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer