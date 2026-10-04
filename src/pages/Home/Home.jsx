import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Check,
  ChevronRight,
  ShieldCheck,
  Truck,
  Wrench,
  ShoppingBag,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { products } from '../../data/products'
import ProductCard from '../../components/ProductCard/ProductCard'

import styles from './Home.module.css'

function Home() {
  const { t } = useTranslation()

  const popularProducts = products.slice(0, 4)

  const benefits = [
    {
      icon: ShieldCheck,
      title: t('home.benefits.original.title'),
      text: t('home.benefits.original.text'),
    },
    {
      icon: Wrench,
      title: t('home.benefits.selection.title'),
      text: t('home.benefits.selection.text'),
    },
    {
      icon: ShoppingBag,
      title: t('home.benefits.easy.title'),
      text: t('home.benefits.easy.text'),
    },
    {
      icon: Truck,
      title: t('home.benefits.delivery.title'),
      text: t('home.benefits.delivery.text'),
    },
  ]

  return (
    <main className={styles.home}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />

        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              {t('home.hero.eyebrow')}
            </div>

            <h1 className={styles.heroTitle}>
              {t('home.hero.title')}
            </h1>

            <p className={styles.heroDescription}>
              {t('home.hero.description')}
            </p>

            <div className={styles.heroActions}>
              <Link
                to="/catalog"
                className={styles.primaryButton}
              >
                {t('home.hero.catalogButton')}

                <ArrowRight size={18} />
              </Link>

              <Link
                to="/contacts"
                className={styles.secondaryButton}
              >
                {t('home.hero.selectionButton')}
              </Link>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.heroVisualGlow} />

            <div className={styles.heroOilCard}>
              <div className={styles.oilCardTop}>
                <span>MOTUL</span>
                <span>01</span>
              </div>

              <div className={styles.oilBottle}>
                <div className={styles.oilBottleCap} />

                <div className={styles.oilBottleBody}>
                  <span className={styles.oilBrand}>
                    MOTUL
                  </span>

                  <span className={styles.oilSeries}>
                    8100
                  </span>

                  <span className={styles.oilType}>
                    X-CESS
                  </span>

                  <span className={styles.oilViscosity}>
                    5W-40
                  </span>
                </div>
              </div>

              <div className={styles.oilCardBottom}>
                <span>100% SYNTHETIC</span>
                <span>4L</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className={styles.benefits}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <span className={styles.sectionEyebrow}>
              MOTOR OIL
            </span>

            <h2>{t('home.benefits.title')}</h2>
          </div>

          <div className={styles.benefitGrid}>
            {benefits.map((benefit) => {
              const Icon = benefit.icon

              return (
                <article
                  key={benefit.title}
                  className={styles.benefitCard}
                >
                  <div className={styles.benefitIcon}>
                    <Icon size={21} />
                  </div>

                  <div>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.text}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* POPULAR PRODUCTS */}
      <section className={styles.popular}>
        <div className={styles.container}>
          <div className={styles.sectionTop}>
            <div>
              <span className={styles.sectionEyebrow}>
                {t('home.popular.eyebrow')}
              </span>

              <h2>{t('home.popular.title')}</h2>

              <p>{t('home.popular.description')}</p>
            </div>

            <Link
              to="/catalog"
              className={styles.textLink}
            >
              {t('home.popular.button')}

              <ChevronRight size={18} />
            </Link>
          </div>

          <div className={styles.productsGrid}>
            {popularProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </div>
      </section>

      {/* OIL SELECTION */}
      <section className={styles.selection}>
        <div className={styles.container}>
          <div className={styles.selectionCard}>
            <div className={styles.selectionGlow} />

            <div className={styles.selectionContent}>
              <span className={styles.sectionEyebrow}>
                {t('home.selection.eyebrow')}
              </span>

              <h2>{t('home.selection.title')}</h2>

              <p>{t('home.selection.description')}</p>

              <Link
                to="/contacts"
                className={styles.primaryButton}
              >
                {t('home.selection.button')}

                <ArrowRight size={18} />
              </Link>
            </div>

            <div className={styles.selectionMark}>
              <Check size={120} strokeWidth={1} />
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.finalCta}>
        <div className={styles.container}>
          <div className={styles.finalCtaContent}>
            <span className={styles.sectionEyebrow}>
              MOTUL
            </span>

            <h2>{t('home.cta.title')}</h2>

            <p>{t('home.cta.description')}</p>

            <Link
              to="/catalog"
              className={styles.primaryButton}
            >
              {t('home.cta.button')}

              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home