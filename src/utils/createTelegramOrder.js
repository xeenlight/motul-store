export function createTelegramOrder(items, totalPrice) {
  const lines = []

  lines.push('🛒 НОВЫЙ ЗАКАЗ')
  lines.push('')
  lines.push('Товары:')

  items.forEach((item, index) => {
    const product = item.product

    const itemTotal =
      product.price * item.quantity

    lines.push('')
    lines.push(
      `${index + 1}. ${product.name.ru}`
    )

    lines.push(
      `   Количество: ${item.quantity}`
    )

    lines.push(
      `   Цена: ${product.price.toLocaleString('ru-RU')} сум`
    )

    lines.push(
      `   Сумма: ${itemTotal.toLocaleString('ru-RU')} сум`
    )

    lines.push(
      `   https://YOUR-DOMAIN.com/product/${product.id}`
    )
  })

  lines.push('')
  lines.push('━━━━━━━━━━━━━━')
  lines.push(
    `ИТОГО: ${totalPrice.toLocaleString('ru-RU')} сум`
  )

  return lines.join('\n')
}