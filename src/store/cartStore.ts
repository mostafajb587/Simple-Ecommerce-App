import { create } from 'zustand'
import type { Product } from '../services/Products-sevice'

interface CartItem {
  product: Product
  quantity: number
}

interface CartState {
  items: CartItem[]
  total: number
  count: number
  addToCart: (product: Product, quantity?: number) => void
  removeFromCart: (productId: number) => void
  clearCart: () => void
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  total: 0,
  count: 0,

  addToCart: (product, quantity = 1) => {
    set((state) => {
      const existingItem = state.items.find((item) => item.product.id === product.id)
      if (existingItem) {
        const updatedItems = state.items.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
        return {
          items: updatedItems,
          count: state.count + quantity,
          total: state.total + product.price * quantity,
        }
      }

      return {
        items: [...state.items, { product, quantity }],
        count: state.count + quantity,
        total: state.total + product.price * quantity,
      }
    })
  },

  removeFromCart: (productId) => {
    set((state) => {
      const itemToRemove = state.items.find((item) => item.product.id === productId)
      if (!itemToRemove) return state

      const updatedItems = state.items.filter((item) => item.product.id !== productId)
      return {
        items: updatedItems,
        count: state.count - itemToRemove.quantity,
        total: state.total - itemToRemove.product.price * itemToRemove.quantity,
      }
    })
  },

  clearCart: () => set({ items: [], count: 0, total: 0 }),
}))
