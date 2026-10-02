import { Search, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import styles from './SearchBar.module.css'

function SearchBar({
  value,
  onChange,
  onClear,
}) {
  const { t } = useTranslation()

  return (
    <div className={styles.wrapper}>
      <Search
        size={18}
        className={styles.icon}
      />

      <input
        type="text"
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
        placeholder={t('catalog.searchPlaceholder')}
        className={styles.input}
        aria-label={t('common.search')}
      />

      {value && (
        <button
          type="button"
          onClick={onClear}
          className={styles.clearButton}
          aria-label={t('catalog.clearSearch')}
        >
          <X size={16} />
        </button>
      )}
    </div>
  )
}

export default SearchBar