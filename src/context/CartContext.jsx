
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

const CartContext = createContext(null)

const STORAGE_KEY = 'motul-store-cart'

function loadCart() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    const parsed = saved ? JSON.parse(saved) : []

    if (!Array.isArray(parsed)) return []

    return parsed.filter(
      (item) =>
        item &&
        item.product &&
        item.product.id != null &&
        Number.isInteger(item.quantity) &&
        item.quantity >= 1
    )
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(loadCart)

  // Сохраняем корзину при каждом изменении.
  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(items)
      )
    } catch (error) {
      console.error('Не удалось сохранить корзину:', error)
    }
  }, [items])

  // Добавление товара или увеличение его количества.
  const addToCart = useCallback((product, quantity = 1) => {
    if (!product?.id) return

    const amount = Math.max(1, Math.floor(Number(quantity) || 1))

    setItems((current) => {
      const existing = current.find(
        (item) => String(item.product.id) === String(product.id)
      )

      if (existing) {
        return current.map((item) =>
          String(item.product.id) === String(product.id)
            ? { ...item, product, quantity: item.quantity + amount }
            : item
        )
      }

      return [...current, { product, quantity: amount }]
    })
  }, [])

  // Установка конкретного количества.
  const updateQuantity = useCallback((productId, quantity) => {
    const amount = Math.floor(Number(quantity))

    if (!Number.isFinite(amount) || amount < 1) return

    setItems((current) =>
      current.map((item) =>
        String(item.product.id) === String(productId)
          ? { ...item, quantity: amount }
          : item
      )
    )
  }, [])

  // Удаление одной позиции.
  const removeFromCart = useCallback((productId) => {
    setItems((current) =>
      current.filter(
        (item) => String(item.product.id) !== String(productId)
      )
    )
  }, [])

  // Очистка корзины.
  const clearCart = useCallback(() => {
    setItems([])
  }, [])

  // Общее количество единиц товара.
  const totalItems = items.reduce(
    (total, item) => total + item.quantity,
    0
  )

  // Итоговая стоимость с учётом количества.
  const totalPrice = items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  )

  const value = useMemo(
    () => ({
      items,
      addToCart,
      updateQuantity,
      removeFromCart,
      clearCart,
      totalItems,
      totalPrice,
    }),
    [
      items,
      addToCart,
      updateQuantity,
      removeFromCart,
      clearCart,
      totalItems,
      totalPrice,
    ]
  )

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error(
      'useCart должен использоваться внутри CartProvider'
    )
  }

  return context
}