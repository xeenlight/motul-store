import { Minus, Plus } from 'lucide-react'

import styles from './QuantityCounter.module.css'

function QuantityCounter({
  value,
  onChange,
  min = 1,
  max = 99,
}) {
  const decrease = () => {
    if (value > min) {
      onChange(value - 1)
    }
  }

  const increase = () => {
    if (value < max) {
      onChange(value + 1)
    }
  }

  return (
    <div className={styles.counter}>
      <button
        type="button"
        onClick={decrease}
        disabled={value <= min}
        aria-label="Decrease quantity"
      >
        <Minus size={15} />
      </button>

      <span>{value}</span>

      <button
        type="button"
        onClick={increase}
        disabled={value >= max}
        aria-label="Increase quantity"
      >
        <Plus size={15} />
      </button>
    </div>
  )
}

export default QuantityCounter