import { createSelector } from 'reselect'

const selecCart = state => state.cart

export const selectCartItems = createSelector(
    [selecCart],
    (cart) => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
    cartItems.reduce(
        (accumulatedQuantity, cartItem) => 
            accumulatedQuantity + cartItem.quantity, 
        0
    )
)
