import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  ShoppingBag,
  Trash2,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { useCart } from '../../context/CartContext'
import QuantityCounter from '../../components/QuantityCounter/QuantityCounter'

import styles from './Cart.module.css'

function Cart() {
  const { t } = useTranslation()

  const {
    items,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalItems,
    totalPrice,
  } = useCart()

  const formatPrice = (price) => {
    return `${price.toLocaleString('ru-RU')} ${t(
      'common.currency'
    )}`
  }

  if (items.length === 0) {
    return (
      <main className={styles.page}>
        <div className={styles.container}>
          <div className={styles.empty}>
            <div className={styles.emptyIcon}>
              <ShoppingBag size={32} />
            </div>

            <h1>{t('cart.emptyTitle')}</h1>

            <p>{t('cart.emptyDescription')}</p>

            <Link
              to="/catalog"
              className={styles.primaryButton}
            >
              {t('cart.goToCatalog')}

              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className={styles.page}>
      <div className={styles.container}>

        {/* HEADER */}
        <div className={styles.pageHeader}>
          <div>
            <Link
              to="/catalog"
              className={styles.backLink}
            >
              <ArrowLeft size={16} />
              {t('cart.backToCatalog')}
            </Link>

            <h1>{t('cart.title')}</h1>

            <p>
              {totalItems}{' '}
              {t('cart.items')}
            </p>
          </div>

          <button
            type="button"
            onClick={clearCart}
            className={styles.clearButton}
          >
            <Trash2 size={16} />

            {t('cart.clear')}
          </button>
        </div>

        {/* CONTENT */}
        <div className={styles.layout}>

          {/* ITEMS */}
          <section className={styles.items}>
            {items.map((item) => {
              const product = item.product

              return (
                <article
                  key={product.id}
                  className={styles.cartItem}
                >
                  {/* IMAGE */}
                  <Link
                    to={`/product/${product.id}`}
                    className={styles.imageWrapper}
                  >
                    <img
                      src={product.image}
                      alt={product.name.ru}
                    />
                  </Link>

                  {/* INFO */}
                  <div className={styles.itemInfo}>

                    <div className={styles.itemTop}>
                      <div>
                        <span className={styles.brand}>
                          {product.brand}
                        </span>

                        <Link
                          to={`/product/${product.id}`}
                          className={styles.productName}
                        >
                          {product.name.ru}
                        </Link>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          removeFromCart(product.id)
                        }
                        className={styles.removeButton}
                        aria-label={t(
                          'cart.remove'
                        )}
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>

                    <div className={styles.itemBottom}>

                      <QuantityCounter
                        value={item.quantity}
                        onChange={(quantity) =>
                          updateQuantity(
                            product.id,
                            quantity
                          )
                        }
                      />

                      <strong className={styles.itemPrice}>
                        {formatPrice(
                          product.price *
                            item.quantity
                        )}
                      </strong>

                    </div>

                  </div>
                </article>
              )
            })}
          </section>

          {/* SUMMARY */}
          <aside className={styles.summary}>

            <div className={styles.summaryHeader}>
              <h2>{t('cart.summary')}</h2>
            </div>

            <div className={styles.summaryRow}>
              <span>
                {t('cart.products')}
              </span>

              <strong>
                {totalItems}
              </strong>
            </div>

            <div className={styles.summaryRow}>
              <span>
                {t('cart.subtotal')}
              </span>

              <strong>
                {formatPrice(totalPrice)}
              </strong>
            </div>

            <div className={styles.divider} />

            <div className={styles.totalRow}>
              <span>
                {t('cart.total')}
              </span>

              <strong>
                {formatPrice(totalPrice)}
              </strong>
            </div>

            <button
              type="button"
              className={styles.checkoutButton}
            >
              {t('cart.checkout')}

              <ArrowRight size={18} />
            </button>

            <p className={styles.checkoutNote}>
              {t('cart.checkoutNote')}
            </p>

          </aside>

        </div>
      </div>
    </main>
  )
}

export default Cart