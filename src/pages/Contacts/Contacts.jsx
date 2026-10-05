import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  ArrowRight,
  Check,
  ChevronDown,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Store,
} from 'lucide-react'

import styles from './Contacts.module.css'

function Contacts() {
  const { t } = useTranslation()

  const [form, setForm] = useState({
    name: '',
    phone: '',
    topic: 'order',
    message: '',
  })
  const [sent, setSent] = useState(false)
  const [openHours, setOpenHours] = useState(true)

  const topics = [
    { value: 'order', label: t('contacts.form.topics.order') },
    { value: 'delivery', label: t('contacts.form.topics.delivery') },
    { value: 'wholesale', label: t('contacts.form.topics.wholesale') },
    { value: 'other', label: t('contacts.form.topics.other') },
  ]

  const channels = [
    {
      id: 'phone',
      icon: Phone,
      label: t('contacts.channels.phone.label'),
      value: t('contacts.channels.phone.value'),
      href: 'tel:+998901234567',
      hint: t('contacts.channels.phone.hint'),
    },
    {
      id: 'telegram',
      icon: Send,
      label: t('contacts.channels.telegram.label'),
      value: t('contacts.channels.telegram.value'),
      href: 'https://t.me/',
      hint: t('contacts.channels.telegram.hint'),
    },
    {
      id: 'email',
      icon: Mail,
      label: t('contacts.channels.email.label'),
      value: t('contacts.channels.email.value'),
      href: 'mailto:info@example.uz',
      hint: t('contacts.channels.email.hint'),
    },
    {
      id: 'address',
      icon: MapPin,
      label: t('contacts.channels.address.label'),
      value: t('contacts.channels.address.value'),
      href: '#map',
      hint: t('contacts.channels.address.hint'),
    },
  ]

  const schedule = [
    { day: t('contacts.hours.monFri'), time: '09:00 – 20:00', open: true },
    { day: t('contacts.hours.sat'), time: '10:00 – 18:00', open: true },
    { day: t('contacts.hours.sun'), time: t('contacts.hours.closed'), open: false },
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    // Здесь можно подключить API / email
  }

  return (
    <main className={styles.page}>
      {/* HERO + FORM */}
      <section className={styles.hero}>
        <div className={styles.heroPattern} />

        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <div className={styles.eyebrow}>
                <span className={styles.eyebrowDot} />
                {t('contacts.hero.eyebrow')}
              </div>

              <h1>
                {t('contacts.hero.title')}
                <span>{t('contacts.hero.titleAccent')}</span>
              </h1>

              <p>{t('contacts.hero.text')}</p>

              <div className={styles.heroMeta}>
                <div>
                  <Check size={15} />
                  <span>{t('contacts.hero.meta1')}</span>
                </div>
                <div>
                  <Check size={15} />
                  <span>{t('contacts.hero.meta2')}</span>
                </div>
                <div>
                  <Check size={15} />
                  <span>{t('contacts.hero.meta3')}</span>
                </div>
              </div>

              {/* Каналы — горизонтальная лента, не сетка карточек */}
              <div className={styles.channelStrip}>
                {channels.map((ch) => {
                  const Icon = ch.icon
                  return (
                    <a
                      key={ch.id}
                      href={ch.href}
                      className={styles.channelItem}
                      target={ch.id === 'telegram' ? '_blank' : undefined}
                      rel={ch.id === 'telegram' ? 'noreferrer' : undefined}
                    >
                      <span className={styles.channelIcon}>
                        <Icon size={16} />
                      </span>
                      <span className={styles.channelText}>
                        <small>{ch.label}</small>
                        <strong>{ch.value}</strong>
                      </span>
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Форма */}
            <div className={styles.formPanel}>
              <div className={styles.formHeader}>
                <div className={styles.formStatus}>
                  <span className={styles.statusDot} />
                  {t('contacts.form.status')}
                </div>
                <h2>{t('contacts.form.title')}</h2>
                <p>{t('contacts.form.subtitle')}</p>
              </div>

              {sent ? (
                <div className={styles.formSuccess}>
                  <div className={styles.successIcon}>
                    <Check size={22} />
                  </div>
                  <strong>{t('contacts.form.successTitle')}</strong>
                  <span>{t('contacts.form.successText')}</span>
                  <button
                    type="button"
                    className={styles.secondaryButton}
                    onClick={() => {
                      setSent(false)
                      setForm({ name: '', phone: '', topic: 'order', message: '' })
                    }}
                  >
                    {t('contacts.form.again')}
                  </button>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.formRow}>
                    <label className={styles.field}>
                      <span>{t('contacts.form.name')}</span>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder={t('contacts.form.namePlaceholder')}
                        required
                      />
                    </label>

                    <label className={styles.field}>
                      <span>{t('contacts.form.phone')}</span>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+998 __ ___ __ __"
                        required
                      />
                    </label>
                  </div>

                  <div className={styles.topicRow}>
                    <span className={styles.topicLabel}>
                      {t('contacts.form.topic')}
                    </span>
                    <div className={styles.topicPills}>
                      {topics.map((topic) => (
                        <button
                          key={topic.value}
                          type="button"
                          className={`${styles.topicPill} ${
                            form.topic === topic.value ? styles.topicPillActive : ''
                          }`}
                          onClick={() =>
                            setForm((prev) => ({ ...prev, topic: topic.value }))
                          }
                        >
                          {topic.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <label className={styles.field}>
                    <span>{t('contacts.form.message')}</span>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder={t('contacts.form.messagePlaceholder')}
                      rows={4}
                      required
                    />
                  </label>

                  <button type="submit" className={styles.primaryButton}>
                    {t('contacts.form.submit')}
                    <ArrowRight size={16} />
                  </button>

                  <p className={styles.formNote}>{t('contacts.form.note')}</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* MAP + HOURS */}
      <section className={styles.mapSection} id="map">
        <div className={styles.container}>
          <div className={styles.mapLayout}>
            <div className={styles.mapBlock}>
              <div className={styles.mapToolbar}>
                <div className={styles.mapToolbarTitle}>
                  <MapPin size={15} />
                  <span>{t('contacts.map.title')}</span>
                </div>
                <a
                  href="https://yandex.ru/maps/"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.mapLink}
                >
                  {t('contacts.map.open')}
                  <ArrowRight size={14} />
                </a>
              </div>

              <div className={styles.mapCanvas}>
                <div className={styles.mapGrid} />

                {/* Декоративная «карта» — можно заменить на iframe */}
                <div className={`${styles.mapRoad} ${styles.mapRoadH}`} />
                <div className={`${styles.mapRoad} ${styles.mapRoadV}`} />
                <div className={`${styles.mapBlockShape} ${styles.block1}`} />
                <div className={`${styles.mapBlockShape} ${styles.block2}`} />
                <div className={`${styles.mapBlockShape} ${styles.block3}`} />

                <div className={styles.mapPinMain}>
                  <div className={styles.pinPulse} />
                  <Store size={18} />
                </div>

                <div className={styles.mapLabel}>
                  <span>{t('contacts.map.label')}</span>
                  <strong>{t('contacts.map.place')}</strong>
                </div>

                <div className={styles.mapFloating}>
                  <MapPin size={16} />
                  <div>
                    <strong>{t('contacts.map.floatingTitle')}</strong>
                    <span>{t('contacts.map.floatingText')}</span>
                  </div>
                </div>
              </div>
            </div>

            <aside className={styles.sidePanel}>
              <button
                type="button"
                className={styles.hoursToggle}
                onClick={() => setOpenHours((v) => !v)}
              >
                <div className={styles.hoursToggleLeft}>
                  <Clock3 size={18} />
                  <div>
                    <strong>{t('contacts.hours.title')}</strong>
                    <span>{t('contacts.hours.now')}</span>
                  </div>
                </div>
                <span
                  className={`${styles.hoursChevron} ${
                    openHours ? styles.hoursChevronOpen : ''
                  }`}
                >
                  <ChevronDown size={18} />
                </span>
              </button>

              <div
                className={`${styles.hoursBody} ${
                  openHours ? styles.hoursBodyOpen : ''
                }`}
              >
                <ul className={styles.hoursList}>
                  {schedule.map((row) => (
                    <li key={row.day} className={styles.hoursRow}>
                      <span className={styles.hoursDay}>{row.day}</span>
                      <span className={styles.hoursLine} />
                      <span
                        className={`${styles.hoursTime} ${
                          !row.open ? styles.hoursClosed : ''
                        }`}
                      >
                        {row.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.quickActions}>
                <a href="tel:+998901234567" className={styles.quickCall}>
                  <Phone size={18} />
                  <div>
                    <strong>{t('contacts.quick.call')}</strong>
                    <span>{t('contacts.channels.phone.value')}</span>
                  </div>
                </a>

                <a
                  href="https://t.me/"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.quickMsg}
                >
                  <MessageCircle size={18} />
                  <div>
                    <strong>{t('contacts.quick.chat')}</strong>
                    <span>{t('contacts.quick.chatHint')}</span>
                  </div>
                </a>
              </div>

              <div className={styles.sideNote}>
                <span className={styles.sideNoteDot} />
                {t('contacts.sideNote')}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.finalCta}>
        <div className={styles.container}>
          <div className={styles.finalCtaInner}>
            <div className={styles.ctaIcon}>
              <MessageCircle size={22} />
            </div>

            <div>
              <span>{t('contacts.cta.eyebrow')}</span>
              <h2>
                {t('contacts.cta.title')}
                <span>{t('contacts.cta.titleAccent')}</span>
              </h2>
            </div>

            <Link to="/catalog" className={styles.primaryButton}>
              {t('contacts.cta.button')}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contacts