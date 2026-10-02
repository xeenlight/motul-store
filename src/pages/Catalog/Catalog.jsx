import {
  useMemo,
  useState,
} from 'react'

import Fuse from 'fuse.js'

import {
  Package,
  SlidersHorizontal,
  X,
} from 'lucide-react'

import { useTranslation } from 'react-i18next'

import { products } from '../../data/products'

import ProductCard from '../../components/ProductCard/ProductCard'
import SearchBar from '../../components/SearchBar/SearchBar'
import ProductFilters from '../../components/ProductFilters/ProductFilters'

import styles from './Catalog.module.css'

const initialFilters = {
  viscosity: '',
  type: '',
  volume: '',
  application: '',
  brand: '',
}

function getUniqueValues(key) {
  return [
    ...new Set(
      products
        .map((product) => product[key])
        .filter(Boolean),
    ),
  ]
}

function getApplicationValues() {
  return [
    ...new Set(
      products.flatMap(
        (product) =>
          product.application || [],
      ),
    ),
  ]
}

function Catalog() {
  const { t } = useTranslation()

  const [search, setSearch] =
    useState('')

  const [filters, setFilters] =
    useState(initialFilters)

  const [filtersOpen, setFiltersOpen] =
    useState(false)

  /*
   * -----------------------------------------
   * FILTER OPTIONS
   * -----------------------------------------
   */

  const filterOptions = useMemo(() => {
    const viscosity = getUniqueValues(
      'viscosity',
    )

    const type = getUniqueValues(
      'type',
    )

    const volume = getUniqueValues(
      'volume',
    )

    const brand = getUniqueValues(
      'brand',
    )

    const application =
      getApplicationValues()

    return {
      viscosity: [
        {
          value: '',
          label: t(
            'catalog.allViscosities',
          ),
        },
        ...viscosity.map(
          (value) => ({
            value,
            label: value,
          }),
        ),
      ],

      type: [
        {
          value: '',
          label: t(
            'catalog.allTypes',
          ),
        },

        ...type.map((value) => ({
          value,

          label:
            value === 'synthetic'
              ? t(
                  'catalog.synthetic',
                )
              : value ===
                  'semi-synthetic'
                ? t(
                    'catalog.semiSynthetic',
                  )
                : value === 'mineral'
                  ? t(
                      'catalog.mineral',
                    )
                  : value,
        })),
      ],

      volume: [
        {
          value: '',
          label: t(
            'catalog.allVolumes',
          ),
        },

        ...volume.map(
          (value) => ({
            value,
            label: value,
          }),
        ),
      ],

      application: [
        {
          value: '',
          label: t(
            'catalog.allApplications',
          ),
        },

        ...application.map(
          (value) => ({
            value,

            label:
              t(
                `catalog.applications.${value}`,
                {
                  defaultValue: value,
                },
              ),
          }),
        ),
      ],

      brand: [
        {
          value: '',
          label: t(
            'catalog.allBrands',
          ),
        },

        ...brand.map(
          (value) => ({
            value,
            label: value,
          }),
        ),
      ],
    }
  }, [t])

  /*
   * -----------------------------------------
   * FUZZY SEARCH
   * -----------------------------------------
   */

  const fuse = useMemo(() => {
    return new Fuse(products, {
      includeScore: true,

      threshold: 0.4,

      ignoreLocation: true,

      keys: [
        {
          name: 'name.ru',
          weight: 0.5,
        },

        {
          name: 'name.uz',
          weight: 0.5,
        },

        {
          name: 'viscosity',
          weight: 0.35,
        },

        {
          name: 'brand',
          weight: 0.2,
        },

        {
          name: 'type',
          weight: 0.15,
        },
      ],
    })
  }, [])

  /*
   * -----------------------------------------
   * SEARCH + FILTERS
   * -----------------------------------------
   */

  const visibleProducts = useMemo(() => {
    let result = products

    /*
     * FUZZY SEARCH
     */

    if (search.trim()) {
      result = fuse
        .search(search.trim())
        .map(
          (item) => item.item,
        )
    }

    /*
     * VISCOSITY
     */

    if (filters.viscosity) {
      result = result.filter(
        (product) =>
          product.viscosity ===
          filters.viscosity,
      )
    }

    /*
     * TYPE
     */

    if (filters.type) {
      result = result.filter(
        (product) =>
          product.type ===
          filters.type,
      )
    }

    /*
     * VOLUME
     */

    if (filters.volume) {
      result = result.filter(
        (product) =>
          product.volume ===
          filters.volume,
      )
    }

    /*
     * APPLICATION
     */

    if (filters.application) {
      result = result.filter(
        (product) =>
          product.application?.includes(
            filters.application,
          ),
      )
    }

    /*
     * BRAND
     */

    if (filters.brand) {
      result = result.filter(
        (product) =>
          product.brand ===
          filters.brand,
      )
    }

    return result
  }, [
    search,
    filters,
    fuse,
  ])

  /*
   * -----------------------------------------
   * HANDLERS
   * -----------------------------------------
   */

  const handleFilterChange = (
    key,
    value,
  ) => {
    setFilters((current) => ({
      ...current,
      [key]: value,
    }))
  }

  const resetFilters = () => {
    setFilters(initialFilters)
  }

  const clearSearch = () => {
    setSearch('')
  }

  const resetEverything = () => {
    setSearch('')
    setFilters(initialFilters)
  }

  const hasActiveFilters =
    search.trim() ||
    filters.viscosity ||
    filters.type ||
    filters.volume ||
    filters.application ||
    filters.brand

  return (
    <main className={styles.page}>

      {/* =========================
          HERO
      ========================= */}

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
            {t(
              'catalog.description',
            )}
          </p>

        </div>

      </section>

      {/* =========================
          CATALOG
      ========================= */}

      <section
        className={styles.catalogSection}
      >

        {/* SEARCH */}

        <div className={styles.searchRow}>

          <SearchBar
            value={search}
            onChange={setSearch}
            onClear={clearSearch}
          />

          <button
            type="button"
            className={styles.mobileFilterButton}
            onClick={() =>
              setFiltersOpen(
                (value) => !value,
              )
            }
          >
            {filtersOpen ? (
              <X size={16} />
            ) : (
              <SlidersHorizontal
                size={16}
              />
            )}

            {t('catalog.filters')}
          </button>

        </div>

        {/* FILTERS */}

        <div
          className={
            filtersOpen
              ? styles.filtersMobileOpen
              : styles.filtersMobileClosed
          }
        >
          <ProductFilters
            filters={filters}
            onFilterChange={
              handleFilterChange
            }
            onReset={resetFilters}
            options={filterOptions}
          />
        </div>

        {/* RESULTS TOP BAR */}

        <div className={styles.topBar}>

          <div className={styles.resultInfo}>

            <span
              className={styles.productCount}
            >
              {visibleProducts.length}
            </span>

            <span
              className={
                styles.productCountLabel
              }
            >
              {t('catalog.products')}
            </span>

          </div>

          {hasActiveFilters && (
            <button
              type="button"
              className={styles.resetAll}
              onClick={
                resetEverything
              }
            >
              <X size={14} />

              {t(
                'catalog.resetAll',
              )}
            </button>
          )}

        </div>

        {/* =========================
            PRODUCTS
        ========================= */}

        {visibleProducts.length > 0 ? (
          <div className={styles.grid}>

            {visibleProducts.map(
              (product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ),
            )}

          </div>
        ) : (
          <div
            className={
              styles.emptyState
            }
          >
            <div
              className={
                styles.emptyIcon
              }
            >
              <Package size={25} />
            </div>

            <h2>
              {t(
                'catalog.noProducts',
              )}
            </h2>

            <p>
              {t(
                'catalog.noProductsDescription',
              )}
            </p>

            <button
              type="button"
              onClick={
                resetEverything
              }
              className={
                styles.emptyButton
              }
            >
              {t(
                'catalog.resetAll',
              )}
            </button>
          </div>
        )}

      </section>

    </main>
  )
}

export default Catalog