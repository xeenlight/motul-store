import {
  RotateCcw,
  ChevronDown,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'

import styles from './ProductFilters.module.css'

function FilterSelect({
  label,
  value,
  options,
  onChange,
}) {
  return (
    <label className={styles.field}>
      <span className={styles.label}>
        {label}
      </span>

      <div className={styles.selectWrapper}>
        <select
          value={value}
          onChange={(event) =>
            onChange(event.target.value)
          }
          className={styles.select}
        >
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>

        <ChevronDown
          size={15}
          className={styles.chevron}
        />
      </div>
    </label>
  )
}

function ProductFilters({
  filters,
  onFilterChange,
  onReset,
  options,
}) {
  const { t } = useTranslation()

  const hasActiveFilters =
    filters.viscosity ||
    filters.type ||
    filters.volume ||
    filters.application ||
    filters.brand

  return (
    <div className={styles.container}>

      <div className={styles.header}>

        <div>
          <span className={styles.title}>
            {t('catalog.filters')}
          </span>

          <span className={styles.subtitle}>
            {t('catalog.filterDescription')}
          </span>
        </div>

        {hasActiveFilters && (
          <button
            type="button"
            onClick={onReset}
            className={styles.resetButton}
          >
            <RotateCcw size={14} />

            {t('catalog.resetFilters')}
          </button>
        )}

      </div>

      <div className={styles.fields}>

        <FilterSelect
          label={t('catalog.viscosity')}
          value={filters.viscosity}
          options={options.viscosity}
          onChange={(value) =>
            onFilterChange(
              'viscosity',
              value,
            )
          }
        />

        <FilterSelect
          label={t('catalog.type')}
          value={filters.type}
          options={options.type}
          onChange={(value) =>
            onFilterChange(
              'type',
              value,
            )
          }
        />

        <FilterSelect
          label={t('catalog.volume')}
          value={filters.volume}
          options={options.volume}
          onChange={(value) =>
            onFilterChange(
              'volume',
              value,
            )
          }
        />

        <FilterSelect
          label={t('catalog.application')}
          value={filters.application}
          options={options.application}
          onChange={(value) =>
            onFilterChange(
              'application',
              value,
            )
          }
        />

        <FilterSelect
          label={t('catalog.brand')}
          value={filters.brand}
          options={options.brand}
          onChange={(value) =>
            onFilterChange(
              'brand',
              value,
            )
          }
        />

      </div>
    </div>
  )
}

export default ProductFilters