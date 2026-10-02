import { useTranslation } from 'react-i18next'

import styles from './LanguageSwitcher.module.css'

const languages = [
  {
    code: 'ru',
    label: 'RU',
  },
  {
    code: 'uz',
    label: 'UZ',
  },
]

function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const currentLanguage = i18n.language?.split('-')[0]

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
  }

  return (
    <div className={styles.wrapper}>
      {languages.map((language) => {
        const isActive =
          currentLanguage === language.code

        return (
          <button
            key={language.code}
            type="button"
            onClick={() =>
              changeLanguage(language.code)
            }
            className={`
              ${styles.button}
              ${isActive ? styles.active : ''}
            `}
          >
            {language.label}
          </button>
        )
      })}
    </div>
  )
}

export default LanguageSwitcher