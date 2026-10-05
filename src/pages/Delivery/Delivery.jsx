import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  ArrowRight,
  Check,
  ChevronDown,
  Clock3,
  CreditCard,
  Home,
  MapPin,
  Package,
  PackageCheck,
  Phone,
  Route,
  ShieldCheck,
  ShoppingBag,
  Store,
  Truck,
  MapPinned,
  Zap,
} from 'lucide-react'

import styles from './Delivery.module.css'

function Delivery() {
  const { t } = useTranslation()

  const [activeZone, setActiveZone] = useState('tashkent')
  const [openFaq, setOpenFaq] = useState(0)

  const steps = [
    {
      number: '01',
      icon: ShoppingBag,
      title: t('delivery.steps.order.title'),
      text: t('delivery.steps.order.text'),
    },
    {
      number: '02',
      icon: Phone,
      title: t('delivery.steps.confirm.title'),
      text: t('delivery.steps.confirm.text'),
    },
    {
      number: '03',
      icon: PackageCheck,
      title: t('delivery.steps.pack.title'),
      text: t('delivery.steps.pack.text'),
    },
    {
      number: '04',
      icon: Truck,
      title: t('delivery.steps.delivery.title'),
      text: t('delivery.steps.delivery.text'),
    },
  ]

  const deliveryOptions = [
    {
      icon: Zap,
      label: t('delivery.options.express.label'),
      title: t('delivery.options.express.title'),
      text: t('delivery.options.express.text'),
      accent: true,
    },
    {
      icon: Truck,
      label: t('delivery.options.standard.label'),
      title: t('delivery.options.standard.title'),
      text: t('delivery.options.standard.text'),
    },
    {
      icon: Store,
      label: t('delivery.options.pickup.label'),
      title: t('delivery.options.pickup.title'),
      text: t('delivery.options.pickup.text'),
    },
  ]

  const zones = [
    {
      id: 'tashkent',
      title: t('delivery.zones.tashkent.title'),
      text: t('delivery.zones.tashkent.text'),
      icon: Home,
    },
    {
      id: 'regions',
      title: t('delivery.zones.regions.title'),
      text: t('delivery.zones.regions.text'),
      icon: Route,
    },
  ]

  const faqs = [
    {
      question: t('delivery.faq.0.question'),
      answer: t('delivery.faq.0.answer'),
    },
    {
      question: t('delivery.faq.1.question'),
      answer: t('delivery.faq.1.answer'),
    },
    {
      question: t('delivery.faq.2.question'),
      answer: t('delivery.faq.2.answer'),
    },
    {
      question: t('delivery.faq.3.question'),
      answer: t('delivery.faq.3.answer'),
    },
    {
      question: t('delivery.faq.4.question'),
      answer: t('delivery.faq.4.answer'),
    },
  ]

  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroPattern} />

        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <div className={styles.eyebrow}>
                <span className={styles.eyebrowDot} />
                {t('delivery.hero.eyebrow')}
              </div>

              <h1>
                {t('delivery.hero.title')}
                <span>{t('delivery.hero.titleAccent')}</span>
              </h1>

              <p>{t('delivery.hero.text')}</p>

              <div className={styles.heroActions}>
                <Link to="/catalog" className={styles.primaryButton}>
                  {t('delivery.hero.catalog')}
                  <ArrowRight size={18} />
                </Link>

                <Link to="/contacts" className={styles.secondaryButton}>
                  {t('delivery.hero.contact')}
                </Link>
              </div>

              <div className={styles.heroMeta}>
                <div>
                  <Check size={15} />
                  <span>{t('delivery.hero.meta1')}</span>
                </div>

                <div>
                  <Check size={15} />
                  <span>{t('delivery.hero.meta2')}</span>
                </div>

                <div>
                  <Check size={15} />
                  <span>{t('delivery.hero.meta3')}</span>
                </div>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.heroMap}>
                <div className={styles.mapGrid} />
                <div className={`${styles.mapRoad} ${styles.mapRoad1}`} />
                <div className={`${styles.mapRoad} ${styles.mapRoad2}`} />
                <div className={`${styles.mapRoad} ${styles.mapRoad3}`} />
                <div className={`${styles.mapRoad} ${styles.mapRoad4}`} />

                <div className={`${styles.mapArea} ${styles.area1}`} />
                <div className={`${styles.mapArea} ${styles.area2}`} />
                <div className={`${styles.mapArea} ${styles.area3}`} />

                <div className={`${styles.mapPin} ${styles.pin1}`}>
                  <span />
                </div>

                <div className={`${styles.mapPin} ${styles.pin2}`}>
                  <span />
                </div>

                <div className={`${styles.mapPin} ${styles.pin3}`}>
                  <span />
                </div>

                <div className={styles.mapCenter}>
                  <div className={styles.centerPulse} />
                  <MapPin size={22} />
                </div>

                <div className={styles.mapLabel}>
                  <span>{t('delivery.hero.mapLabel')}</span>
                  <strong>{t('delivery.hero.mapTitle')}</strong>
                </div>

                <div className={styles.mapStatus}>
                  <span className={styles.statusDot} />
                  {t('delivery.hero.mapStatus')}
                </div>
              </div>

              <div className={styles.mapFloatingCard}>
                <Truck size={19} />

                <div>
                  <strong>{t('delivery.hero.floatingTitle')}</strong>
                  <span>{t('delivery.hero.floatingText')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ZONES */}
      <section className={styles.coverage}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div>
              <div className={styles.sectionEyebrow}>
                {t('delivery.coverage.eyebrow')}
              </div>

              <h2>
                {t('delivery.coverage.title')}
                <span>{t('delivery.coverage.titleAccent')}</span>
              </h2>
            </div>

            <p>{t('delivery.coverage.text')}</p>
          </div>

          <div className={styles.coverageLayout}>
            <div className={styles.zoneControls}>
              {zones.map((zone) => {
                const Icon = zone.icon
                const active = activeZone === zone.id

                return (
                  <button
                    key={zone.id}
                    type="button"
                    className={`${styles.zoneButton} ${
                      active ? styles.zoneButtonActive : ''
                    }`}
                    onClick={() => setActiveZone(zone.id)}
                  >
                    <span className={styles.zoneIcon}>
                      <Icon size={20} />
                    </span>

                    <span className={styles.zoneContent}>
                      <strong>{zone.title}</strong>
                      <small>{zone.text}</small>
                    </span>

                    <ArrowRight size={17} />
                  </button>
                )
              })}

              <div className={styles.coverageInfo}>
                <ShieldCheck size={19} />

                <div>
                  <strong>{t('delivery.coverage.infoTitle')}</strong>
                  <span>{t('delivery.coverage.infoText')}</span>
                </div>
              </div>
            </div>

            <div className={styles.interactiveMap}>
              <div className={styles.mapToolbar}>
                <div className={styles.mapToolbarTitle}>
                  <MapPinned size={16} />
                  <span>
                    {activeZone === 'tashkent'
                      ? t('delivery.coverage.tashkentMap')
                      : t('delivery.coverage.regionMap')}
                  </span>
                </div>

                <div className={styles.mapControls}>
                  <button type="button">+</button>
                  <button type="button">−</button>
                </div>
              </div>

              <div className={styles.tashkentMap}>
                <div className={styles.realMapGrid} />

                <div className={`${styles.district} ${styles.district1}`}>
                  <span>Yunusobod</span>
                </div>

                <div className={`${styles.district} ${styles.district2}`}>
                  <span>Mirzo Ulug‘bek</span>
                </div>

                <div className={`${styles.district} ${styles.district3}`}>
                  <span>Chilonzor</span>
                </div>

                <div className={`${styles.district} ${styles.district4}`}>
                  <span>Shayxontohur</span>
                </div>

                <div className={`${styles.district} ${styles.district5}`}>
                  <span>Yakkasaroy</span>
                </div>

                <div className={`${styles.district} ${styles.district6}`}>
                  <span>Olmazor</span>
                </div>

                <div className={styles.mapRoute} />

                <div className={`${styles.deliveryMarker} ${styles.markerMain}`}>
                  <div className={styles.markerPulse} />
                  <Truck size={18} />
                </div>

                <div className={`${styles.deliveryMarker} ${styles.markerTwo}`}>
                  <MapPin size={17} />
                </div>

                <div className={`${styles.deliveryMarker} ${styles.markerThree}`}>
                  <MapPin size={17} />
                </div>

                <div className={styles.currentLocation}>
                  <span />
                  {t('delivery.coverage.currentZone')}
                </div>

                <div className={styles.mapBottomCard}>
                  <div className={styles.mapBottomIcon}>
                    <Truck size={20} />
                  </div>

                  <div>
                    <span>{t('delivery.coverage.deliveryZone')}</span>
                    <strong>
                      {activeZone === 'tashkent'
                        ? t('delivery.coverage.tashkent')
                        : t('delivery.coverage.uzbekistan')}
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className={styles.process}>
        <div className={styles.container}>
          <div className={styles.processHeader}>
            <div>
              <div className={styles.sectionEyebrow}>
                {t('delivery.process.eyebrow')}
              </div>

              <h2>
                {t('delivery.process.title')}
                <span>{t('delivery.process.titleAccent')}</span>
              </h2>
            </div>

            <div className={styles.processBadge}>
              <Clock3 size={16} />
              {t('delivery.process.badge')}
            </div>
          </div>

          <div className={styles.steps}>
            {steps.map((step, index) => {
              const Icon = step.icon

              return (
                <article className={styles.step} key={step.number}>
                  <div className={styles.stepNumber}>{step.number}</div>

                  <div className={styles.stepIcon}>
                    <Icon size={21} />
                  </div>

                  <h3>{step.title}</h3>

                  <p>{step.text}</p>

                  {index !== steps.length - 1 && (
                    <div className={styles.stepConnector}>
                      <ArrowRight size={16} />
                    </div>
                  )}
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* DELIVERY OPTIONS */}
      <section className={styles.options}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div>
              <div className={styles.sectionEyebrow}>
                {t('delivery.options.eyebrow')}
              </div>

              <h2>
                {t('delivery.options.title')}
                <span>{t('delivery.options.titleAccent')}</span>
              </h2>
            </div>

            <p>{t('delivery.options.headerText')}</p>
          </div>

          <div className={styles.optionsGrid}>
            {deliveryOptions.map((option) => {
              const Icon = option.icon

              return (
                <article
                  key={option.title}
                  className={`${styles.optionCard} ${
                    option.accent ? styles.optionCardAccent : ''
                  }`}
                >
                  {option.accent && (
                    <div className={styles.popularBadge}>
                      {t('delivery.options.popular')}
                    </div>
                  )}

                  <div className={styles.optionIcon}>
                    <Icon size={22} />
                  </div>

                  <span className={styles.optionLabel}>{option.label}</span>

                  <h3>{option.title}</h3>

                  <p>{option.text}</p>

                  <div className={styles.optionBottom}>
                    <span>
                      <Check size={15} />
                      {t('delivery.options.available')}
                    </span>

                    <ArrowRight size={17} />
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* INFORMATION */}
      <section className={styles.infoSection}>
        <div className={styles.container}>
          <div className={styles.infoGrid}>
            <div className={styles.infoMain}>
              <div className={styles.sectionEyebrow}>
                {t('delivery.info.eyebrow')}
              </div>

              <h2>
                {t('delivery.info.title')}
                <span>{t('delivery.info.titleAccent')}</span>
              </h2>

              <p>{t('delivery.info.text')}</p>

              <div className={styles.infoList}>
                <div>
                  <span>01</span>
                  <div>
                    <strong>{t('delivery.info.item1.title')}</strong>
                    <p>{t('delivery.info.item1.text')}</p>
                  </div>
                </div>

                <div>
                  <span>02</span>
                  <div>
                    <strong>{t('delivery.info.item2.title')}</strong>
                    <p>{t('delivery.info.item2.text')}</p>
                  </div>
                </div>

                <div>
                  <span>03</span>
                  <div>
                    <strong>{t('delivery.info.item3.title')}</strong>
                    <p>{t('delivery.info.item3.text')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.paymentCard}>
              <div className={styles.paymentTop}>
                <div className={styles.paymentIcon}>
                  <CreditCard size={21} />
                </div>

                <span>{t('delivery.payment.label')}</span>
              </div>

              <h3>{t('delivery.payment.title')}</h3>

              <p>{t('delivery.payment.text')}</p>

              <div className={styles.paymentMethods}>
                <div>
                  <span>01</span>
                  <strong>{t('delivery.payment.method1')}</strong>
                </div>

                <div>
                  <span>02</span>
                  <strong>{t('delivery.payment.method2')}</strong>
                </div>

                <div>
                  <span>03</span>
                  <strong>{t('delivery.payment.method3')}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faq}>
        <div className={styles.container}>
          <div className={styles.faqGrid}>
            <div>
              <div className={styles.sectionEyebrow}>FAQ</div>

              <h2>
                {t('delivery.faqTitle')}
                <span>{t('delivery.faqTitleAccent')}</span>
              </h2>

              <p>{t('delivery.faqText')}</p>

              <Link to="/contacts" className={styles.secondaryButton}>
                {t('delivery.faqButton')}
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className={styles.faqList}>
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index

                return (
                  <div
                    key={faq.question}
                    className={`${styles.faqItem} ${
                      isOpen ? styles.faqItemOpen : ''
                    }`}
                  >
                    <button
                      type="button"
                      className={styles.faqQuestion}
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    >
                      <span>{faq.question}</span>

                      <span className={styles.faqIcon}>
                        <ChevronDown size={18} />
                      </span>
                    </button>

                    <div className={styles.faqAnswer}>
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.finalCta}>
        <div className={styles.container}>
          <div className={styles.finalCtaInner}>
            <div className={styles.ctaIcon}>
              <Package size={24} />
            </div>

            <div>
              <span>{t('delivery.cta.eyebrow')}</span>

              <h2>
                {t('delivery.cta.title')}
                <span>{t('delivery.cta.titleAccent')}</span>
              </h2>
            </div>

            <Link to="/catalog" className={styles.primaryButton}>
              {t('delivery.cta.button')}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Delivery