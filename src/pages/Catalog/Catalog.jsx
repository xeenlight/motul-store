import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import {
  SlidersHorizontal,
  Package,
} from 'lucide-react'

import { products } from '../../data/products'
import ProductCard from '../../components/ProductCard/ProductCard'

import styles from './Catalog.module.css'

function Catalog() {
  const { t } = useTranslation()

  /*
   * Пока просто берём все товары.
   * На Шаге 4 здесь появятся:
   *
   * search
   * viscosity
   * type
   * volume
   * application
   * brand
   */
  const visibleProducts = useMemo(
    () => products,
    [],
  )

  return (
    <main className={styles.page}>

      {/* HERO */}
      <section className={styles.hero}>

        <div className={styles.heroContent}>

          <div className={styles.eyebrow}>
            <Package size={14} />

<span>
  {t('catalog.label')}
</span>
          </div>

          <h1 className={styles.title}>
            {t('common.catalog')}
          </h1>

<p className={styles.subtitle}>
  {t('catalog.description')}
</p>

        </div>

      </section>

      {/* CATALOG */}
      <section className={styles.catalogSection}>

        {/* TOP BAR */}
        <div className={styles.topBar}>

          <div>
            <span className={styles.productCount}>
              {visibleProducts.length}
            </span>

<span className={styles.productCountLabel}>
  {t('catalog.products')}
</span>
          </div>

          <button
            type="button"
            className={styles.filterButton}
          >
            <SlidersHorizontal size={16} />

            {t('catalog.filters')}
          </button>

        </div>

        {/* GRID */}
        <div className={styles.grid}>

          {visibleProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </section>

    </main>
  )
}

export default Catalog