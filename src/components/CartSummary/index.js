import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let totalPrice = 0
      let itemCount = 0
      cartList.forEach(each => {
        totalPrice += each.quantity * each.price
        itemCount += 1
      })

      return (
        <div className="cart-summary-container">
          <h1 className="total-order">
            Order Total: <span>Rs {totalPrice}/-</span>
          </h1>
          <p className="item-count">{itemCount} items in cart</p>
          <button className="checkout-button" type="button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
