import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  Check,
  ChevronRight,
  ShoppingCart,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { products } from '../../data/products'

import QuantityCounter from '../../components/QuantityCounter/QuantityCounter'

import styles from './Product.module.css'

function Product() {
  const { id } = useParams()
  const { t, i18n } = useTranslation()

  const [quantity, setQuantity] = useState(1)

  const product = products.find(
    (item) => String(item.id) === String(id),
  )

  /*
   * PRODUCT NOT FOUND
   */

  if (!product) {
    return (
      <main className={styles.page}>
        <section className={styles.notFound}>
          <div className={styles.notFoundIcon}>
            <ShoppingCart size={28} />
          </div>

          <h1>
            {t('product.notFound')}
          </h1>

          <p>
            {t('product.notFoundDescription')}
          </p>

          <Link
            to="/catalog"
            className={styles.backButton}
          >
            <ArrowLeft size={16} />

            {t('product.backToCatalog')}
          </Link>
        </section>
      </main>
    )
  }

  /*
   * LANGUAGE
   */

  const language =
    i18n.language === 'uz'
      ? 'uz'
      : 'ru'

  const productName =
    product.name?.[language] ||
    product.name?.ru ||
    product.name

  const productDescription =
    product.description?.[language] ||
    product.description?.ru ||
    ''

  /*
   * PRICE
   */

  const hasOldPrice =
    product.oldPrice &&
    product.oldPrice > product.price

  const discount =
    hasOldPrice
      ? Math.round(
          ((product.oldPrice -
            product.price) /
            product.oldPrice) *
            100,
        )
      : 0

  /*
   * APPLICATION
   */

  const applications =
    product.application || []

  /*
   * ADD TO CART
   */

  const handleAddToCart = () => {
    /*
     * В ШАГЕ 6 здесь появится:
     *
     * addToCart(product, quantity)
     *
     * Пока просто демонстрация.
     */

    console.log(
      'Add to cart:',
      product,
      quantity,
    )
  }

  return (
    <main className={styles.page}>

      {/* =========================
          BREADCRUMBS
      ========================= */}

      <div className={styles.container}>
        <div className={styles.breadcrumbs}>

          <Link to="/">
            {t('common.home')}
          </Link>

          <ChevronRight size={13} />

          <Link to="/catalog">
            {t('common.catalog')}
          </Link>

          <ChevronRight size={13} />

          <span>
            {productName}
          </span>

        </div>
      </div>

      {/* =========================
          PRODUCT
      ========================= */}

      <section className={styles.productSection}>
        <div className={styles.container}>

          <div className={styles.productLayout}>

            {/* =====================
                IMAGE
            ===================== */}

            <div className={styles.visual}>

              {discount > 0 && (
                <div className={styles.discount}>
                  -{discount}%
                </div>
              )}

              <div className={styles.imageWrapper}>

                <img
                  src={product.image}
                  alt={productName}
                  className={styles.image}
                />

              </div>

            </div>

            {/* =====================
                INFO
            ===================== */}

            <div className={styles.info}>

              {/* BRAND */}

              <div className={styles.brand}>
                {product.brand || 'MOTUL'}
              </div>

              {/* TITLE */}

              <h1 className={styles.title}>
                {productName}
              </h1>

              {/* SKU */}

              <div className={styles.sku}>
                {t('product.article')}: #{product.id}
              </div>

              {/* PRICE */}

              <div className={styles.priceBlock}>

                <div className={styles.price}>
                  {product.price.toLocaleString(
                    'ru-RU',
                  )}
                  <span>
                    {t('common.currency')}
                  </span>
                </div>

                {hasOldPrice && (
                  <div
                    className={
                      styles.oldPrice
                    }
                  >
                    {product.oldPrice.toLocaleString(
                      'ru-RU',
                    )}
                    <span>
                      {t('common.currency')}
                    </span>
                  </div>
                )}

              </div>

              {/* AVAILABILITY */}

              <div className={styles.available}>
                <Check size={15} />

                <span>
                  {t(
                    'product.inStock',
                  )}
                </span>
              </div>

              {/* DESCRIPTION */}

              <div
                className={
                  styles.description
                }
              >
                <h2>
                  {t(
                    'product.description',
                  )}
                </h2>

                <p>
                  {productDescription}
                </p>
              </div>

              {/* =====================
                  CHARACTERISTICS
              ===================== */}

              <div
                className={
                  styles.characteristics
                }
              >

                <h2>
                  {t(
                    'product.characteristics',
                  )}
                </h2>

                <div
                  className={
                    styles.specs
                  }
                >

                  <div
                    className={
                      styles.specRow
                    }
                  >
                    <span>
                      {t(
                        'catalog.viscosity',
                      )}
                    </span>

                    <strong>
                      {product.viscosity ||
                        '—'}
                    </strong>
                  </div>

                  <div
                    className={
                      styles.specRow
                    }
                  >
                    <span>
                      {t(
                        'catalog.type',
                      )}
                    </span>

                    <strong>
                      {product.type
                        ? t(
                            `catalog.${product.type === 'semi-synthetic'
                              ? 'semiSynthetic'
                              : product.type}`,
                            {
                              defaultValue:
                                product.type,
                            },
                          )
                        : '—'}
                    </strong>
                  </div>

                  <div
                    className={
                      styles.specRow
                    }
                  >
                    <span>
                      {t(
                        'catalog.volume',
                      )}
                    </span>

                    <strong>
                      {product.volume ||
                        '—'}
                    </strong>
                  </div>

                  <div
                    className={
                      styles.specRow
                    }
                  >
                    <span>
                      {t(
                        'catalog.brand',
                      )}
                    </span>

                    <strong>
                      {product.brand ||
                        'MOTUL'}
                    </strong>
                  </div>

                  <div
                    className={
                      styles.specRow
                    }
                  >
                    <span>
                      {t(
                        'catalog.application',
                      )}
                    </span>

                    <strong>
                      {applications
                        .map(
                          (application) =>
                            t(
                              `catalog.applications.${application}`,
                              {
                                defaultValue:
                                  application,
                              },
                            ),
                        )
                        .join(', ') ||
                        '—'}
                    </strong>
                  </div>

                </div>
              </div>

              {/* =====================
                  QUANTITY + CART
              ===================== */}

              <div className={styles.purchase}>

                <div
                  className={
                    styles.quantityBlock
                  }
                >
                  <span>
                    {t(
                      'product.quantity',
                    )}
                  </span>

                  <QuantityCounter
                    value={quantity}
                    onChange={
                      setQuantity
                    }
                  />
                </div>

                <button
                  type="button"
                  className={
                    styles.addButton
                  }
                  onClick={
                    handleAddToCart
                  }
                >
                  <ShoppingCart
                    size={18}
                  />

                  {t(
                    'product.addToCart',
                  )}
                </button>

              </div>

              {/* TOTAL */}

              <div className={styles.total}>
                <span>
                  {t(
                    'product.total',
                  )}
                </span>

                <strong>
                  {(
                    product.price *
                    quantity
                  ).toLocaleString(
                    'ru-RU',
                  )}{' '}
                  {t(
                    'common.currency',
                  )}
                </strong>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =========================
          BACK TO CATALOG
      ========================= */}

      <section
        className={
          styles.bottomNavigation
        }
      >
        <div className={styles.container}>

          <Link
            to="/catalog"
            className={
              styles.catalogLink
            }
          >
            <ArrowLeft size={16} />

            {t(
              'product.backToCatalog',
            )}
          </Link>

        </div>
      </section>

    </main>
  )
}

export default Product