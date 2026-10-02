
import { Link } from 'react-router-dom'
import {
  ShoppingCart,
  ArrowUpRight,
  Tag,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useCart } from '../../context/CartContext'
import QuantityCounter from '../QuantityCounter/QuantityCounter'
import styles from './ProductCard.module.css'

function ProductCard({ product }) {
  const { i18n, t } = useTranslation()

  const {
    items,
    addToCart,
    updateQuantity,
  } = useCart()

  const cartItem = items.find(
    (item) =>
      String(item.product.id) === String(product.id)
  )

  const isInCart = Boolean(cartItem)
  const quantity = cartItem?.quantity ?? 1

  const language = i18n.language?.startsWith('uz')
    ? 'uz'
    : 'ru'

  const productName = product.name[language]

  const productDescription =
    product.description[language]

  const formattedPrice = new Intl.NumberFormat(
    'ru-RU',
  ).format(product.price)

  const formattedOldPrice = product.oldPrice
    ? new Intl.NumberFormat('ru-RU').format(
        product.oldPrice,
      )
    : null

  return (
    <article className={styles.card}>

      {/* IMAGE */}
      <Link
        to={`/product/${product.id}`}
        className={styles.imageLink}
      >
        <div className={styles.imageWrapper}>

          {product.oldPrice && (
            <span className={styles.saleBadge}>
              SALE
            </span>
          )}

          <img
            src={product.image}
            alt={productName}
            className={styles.image}
          />

          <div className={styles.imageOverlay}>
            <span>
              {t('catalog.details')}
            </span>

            <ArrowUpRight size={15} />
          </div>

        </div>
      </Link>

      {/* CONTENT */}
      <div className={styles.content}>

        {/* META */}
        <div className={styles.meta}>

          <span className={styles.brand}>
            {product.brand}
          </span>

          <span className={styles.application}>
            {product.volume}
          </span>

        </div>

        {/* TITLE */}
        <Link
          to={`/product/${product.id}`}
          className={styles.title}
        >
          {productName}
        </Link>

        {/* DESCRIPTION */}
        <p className={styles.description}>
          {productDescription}
        </p>

        {/* TAGS */}
        <div className={styles.tags}>

          <span className={styles.tag}>
            {product.viscosity}
          </span>

          <span className={styles.tag}>
            <Tag size={12} />

            {product.type === 'synthetic'
              ? t('catalog.synthetic')
              : product.type === 'semi-synthetic'
                ? t('catalog.semiSynthetic')
                : t('catalog.mineral')}
          </span>

        </div>

        {/* FOOTER */}
        <div className={styles.cardFooter}>

          <div className={styles.priceBlock}>

            {formattedOldPrice && (
              <span className={styles.oldPrice}>
                {formattedOldPrice} UZS
              </span>
            )}

            <span className={styles.price}>
              {formattedPrice}
              <small> UZS</small>
            </span>

          </div>

          <Link
            to={`/product/${product.id}`}
            className={styles.cartButton}
            aria-label={`${t(
              'common.buy',
            )}: ${productName}`}
          >
            <ShoppingCart size={17} />
          </Link>

        </div>

      </div>

    </article>
  )
}

export default ProductCard
