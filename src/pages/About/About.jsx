import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BadgeCheck,
  Car,
  Check,
  ChevronDown,
  Clock3,
  Droplets,
  Factory,
  Gauge,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Truck,
  Wrench,
} from 'lucide-react'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import styles from './About.module.css'

function About() {
  const { t } = useTranslation()
  const [openFaq, setOpenFaq] = useState(0)

  const advantages = [
    {
      icon: ShieldCheck,
      title: t('about.advantages.original.title'),
      text: t('about.advantages.original.text'),
    },
    {
      icon: Gauge,
      title: t('about.advantages.selection.title'),
      text: t('about.advantages.selection.text'),
    },
    {
      icon: Truck,
      title: t('about.advantages.delivery.title'),
      text: t('about.advantages.delivery.text'),
    },
    {
      icon: BadgeCheck,
      title: t('about.advantages.quality.title'),
      text: t('about.advantages.quality.text'),
    },
    {
      icon: Wrench,
      title: t('about.advantages.expert.title'),
      text: t('about.advantages.expert.text'),
    },
    {
      icon: Clock3,
      title: t('about.advantages.contact.title'),
      text: t('about.advantages.contact.text'),
    },
  ]

  const steps = [
    {
      number: '01',
      title: t('about.steps.task.title'),
      text: t('about.steps.task.text'),
    },
    {
      number: '02',
      title: t('about.steps.product.title'),
      text: t('about.steps.product.text'),
    },
    {
      number: '03',
      title: t('about.steps.order.title'),
      text: t('about.steps.order.text'),
    },
    {
      number: '04',
      title: t('about.steps.delivery.title'),
      text: t('about.steps.delivery.text'),
    },
  ]

  const categories = [
    {
      icon: Car,
      number: '01',
      title: t('about.categories.cars.title'),
      text: t('about.categories.cars.text'),
    },
    {
      icon: Factory,
      number: '02',
      title: t('about.categories.commercial.title'),
      text: t('about.categories.commercial.text'),
    },
    {
      icon: Droplets,
      number: '03',
      title: t('about.categories.motorcycles.title'),
      text: t('about.categories.motorcycles.text'),
    },
  ]

  const faqs = [
    {
      question: t('about.faq.choose.question'),
      answer: t('about.faq.choose.answer'),
    },
    {
      question: t('about.faq.original.question'),
      answer: t('about.faq.original.answer'),
    },
    {
      question: t('about.faq.delivery.question'),
      answer: t('about.faq.delivery.answer'),
    },
    {
      question: t('about.faq.consultation.question'),
      answer: t('about.faq.consultation.answer'),
    },
  ]

  return (
    <main className={styles.page}>
      {/* HERO */}

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <div className={styles.eyebrow}>
                <span className={styles.eyebrowDot} />
                {t('about.hero.eyebrow')}
              </div>

              <h1 className={styles.heroTitle}>
                {t('about.hero.title')}
                <span>{t('about.hero.titleAccent')}</span>
              </h1>

              <p className={styles.heroText}>
                {t('about.hero.description')}
              </p>

              <div className={styles.heroActions}>
                <Link to="/catalog" className={styles.primaryButton}>
                  {t('about.hero.catalog')}
                  <ArrowRight size={18} />
                </Link>

                <Link to="/contacts" className={styles.secondaryButton}>
                  {t('about.hero.contact')}
                </Link>
              </div>

              <div className={styles.heroTrust}>
                <div className={styles.trustItem}>
                  <Check size={15} />
                  <span>{t('about.hero.trust.brands')}</span>
                </div>

                <div className={styles.trustItem}>
                  <Check size={15} />
                  <span>{t('about.hero.trust.selection')}</span>
                </div>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.visualGlow} />

              <div className={styles.visualCard}>
                <div className={styles.visualTop}>
                  <span>QUALITY</span>

                  <BadgeCheck size={22} />
                </div>

                <div className={styles.visualImage}>
                  <img
                    src="/images/products/motul-8100-x-cess-5w40.png"
                    alt="Motor oil"
                  />
                </div>

                <div className={styles.visualBottom}>
                  <div>
                    <span className={styles.visualLabel}>
                      {t('about.hero.recommended')}
                    </span>

                    <strong>MOTUL 8100</strong>
                  </div>

                  <div className={styles.visualBadge}>
                    5W-40
                  </div>
                </div>
              </div>

              <div className={`${styles.floatingCard} ${styles.floatingTop}`}>
                <ShieldCheck size={18} />

                <div>
                  <strong>100%</strong>
                  <span>{t('about.hero.quality')}</span>
                </div>
              </div>

              <div
                className={`${styles.floatingCard} ${styles.floatingBottom}`}
              >
                <Truck size={18} />

                <div>
                  <strong>Fast</strong>
                  <span>{t('about.hero.delivery')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}

      <section className={styles.aboutSection}>
        <div className={styles.container}>
          <div className={styles.aboutGrid}>
            <div>
              <div className={styles.sectionEyebrow}>
                {t('about.about.eyebrow')}
              </div>

              <h2 className={styles.sectionTitle}>
                {t('about.about.title')}
                <span>{t('about.about.titleAccent')}</span>
              </h2>
            </div>

            <div className={styles.aboutText}>
              <p>{t('about.about.text1')}</p>

              <p>{t('about.about.text2')}</p>

              <Link to="/contacts" className={styles.inlineLink}>
                {t('about.about.consultation')}
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>

          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>
                {t('about.stats.quality')}
              </span>
            </div>

            <div className={styles.statCard}>
              <span className={styles.statNumber}>24/7</span>
              <span className={styles.statLabel}>
                {t('about.stats.catalog')}
              </span>
            </div>

            <div className={styles.statCard}>
              <span className={styles.statNumber}>1:1</span>
              <span className={styles.statLabel}>
                {t('about.stats.selection')}
              </span>
            </div>

            <div className={styles.statCard}>
              <span className={styles.statNumber}>UZ</span>
              <span className={styles.statLabel}>
                {t('about.stats.uzbekistan')}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}

      <section className={styles.advantages}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div>
              <div className={styles.sectionEyebrow}>
                {t('about.advantagesSection.eyebrow')}
              </div>

              <h2 className={styles.sectionTitle}>
                {t('about.advantagesSection.title')}
                <span>{t('about.advantagesSection.titleAccent')}</span>
              </h2>
            </div>

            <p>{t('about.advantagesSection.description')}</p>
          </div>

          <div className={styles.advantagesGrid}>
            {advantages.map((item, index) => {
              const Icon = item.icon

              return (
                <article
                  className={styles.advantageCard}
                  key={item.title}
                >
                  <div className={styles.advantageIcon}>
                    <Icon size={21} />
                  </div>

                  <div className={styles.cardNumber}>
                    0{index + 1}
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                  <div className={styles.cardArrow}>
                    <ArrowRight size={17} />
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}

      <section className={styles.process}>
        <div className={styles.container}>
          <div className={styles.processHeader}>
            <div>
              <div className={styles.sectionEyebrow}>
                {t('about.process.eyebrow')}
              </div>

              <h2 className={styles.sectionTitle}>
                {t('about.process.title')}
                <span>{t('about.process.titleAccent')}</span>
              </h2>
            </div>

            <div className={styles.processBadge}>
              <Sparkles size={16} />
              <span>{t('about.process.badge')}</span>
            </div>
          </div>

          <div className={styles.timeline}>
            {steps.map((step, index) => (
              <div className={styles.step} key={step.number}>
                <div className={styles.stepTop}>
                  <span>{step.number}</span>

                  {index !== steps.length - 1 && (
                    <div className={styles.stepLine} />
                  )}
                </div>

                <div className={styles.stepContent}>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}

      <section className={styles.categories}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div>
              <div className={styles.sectionEyebrow}>
                {t('about.categoriesSection.eyebrow')}
              </div>

              <h2 className={styles.sectionTitle}>
                {t('about.categoriesSection.title')}
                <span>
                  {t('about.categoriesSection.titleAccent')}
                </span>
              </h2>
            </div>

            <Link to="/catalog" className={styles.inlineLink}>
              {t('about.categoriesSection.catalog')}
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className={styles.categoriesGrid}>
            {categories.map((category) => {
              const Icon = category.icon

              return (
                <Link
                  to="/catalog"
                  className={styles.categoryCard}
                  key={category.number}
                >
                  <div className={styles.categoryTop}>
                    <div className={styles.categoryIcon}>
                      <Icon size={24} />
                    </div>

                    <span>{category.number}</span>
                  </div>

                  <div>
                    <h3>{category.title}</h3>
                    <p>{category.text}</p>
                  </div>

                  <div className={styles.categoryArrow}>
                    <ArrowRight size={18} />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* TRUST */}

      <section className={styles.trustSection}>
        <div className={styles.container}>
          <div className={styles.trustBox}>
            <div className={styles.trustContent}>
              <div className={styles.sectionEyebrow}>
                {t('about.trust.eyebrow')}
              </div>

              <h2>
                {t('about.trust.title')}
                <span>{t('about.trust.titleAccent')}</span>
              </h2>

              <p>{t('about.trust.description')}</p>

              <div className={styles.trustPoints}>
                <div>
                  <Check size={17} />
                  <span>{t('about.trust.points.selection')}</span>
                </div>

                <div>
                  <Check size={17} />
                  <span>{t('about.trust.points.products')}</span>
                </div>

                <div>
                  <Check size={17} />
                  <span>{t('about.trust.points.delivery')}</span>
                </div>
              </div>
            </div>

            <div className={styles.trustVisual}>
              <div className={styles.bigPercent}>
                100<span>%</span>
              </div>

              <p>{t('about.trust.focus')}</p>

              <div className={styles.circle}>
                <ShieldCheck size={42} />
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
              <div className={styles.sectionEyebrow}>
                FAQ
              </div>

              <h2 className={styles.sectionTitle}>
                {t('about.faqSection.title')}
                <span>{t('about.faqSection.titleAccent')}</span>
              </h2>

              <p className={styles.faqIntro}>
                {t('about.faqSection.intro')}
              </p>

              <Link
                to="/contacts"
                className={styles.secondaryButton}
              >
                {t('about.faqSection.ask')}
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className={styles.faqList}>
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index

                return (
                  <div
                    className={`${styles.faqItem} ${
                      isOpen ? styles.faqItemOpen : ''
                    }`}
                    key={faq.question}
                  >
                    <button
                      type="button"
                      className={styles.faqQuestion}
                      onClick={() =>
                        setOpenFaq(isOpen ? -1 : index)
                      }
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
              <PackageCheck size={24} />
            </div>

            <div>
              <span>{t('about.finalCta.eyebrow')}</span>

              <h2>
                {t('about.finalCta.title')}
                <span>{t('about.finalCta.titleAccent')}</span>
              </h2>
            </div>

            <Link
              to="/catalog"
              className={styles.primaryButton}
            >
              {t('about.finalCta.button')}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About