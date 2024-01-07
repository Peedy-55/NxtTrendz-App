import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import ProductItemDetails from './components/ProductItemDetails'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import CartContext from './context/CartContext'

import './App.css'

class App extends Component {
  state = {
    cartList: [],
  }

  removeCartItem = id => {
    const {cartList} = this.state
    const updatedCartList = cartList.filter(each => each.id !== id)
    this.setState({cartList: updatedCartList})
  }

  removeAllCartItems = () => {
    this.setState({cartList: []})
  }

  

  incrementCartItemQuantity = id => {
    this.setState(prevState => ({
      cartList: prevState.cartList.map(each => {
        if (each.id === id) {
          const {quantity} = each
          return {...each, quantity: quantity + 1}
        }
        return each
      }),
    }))
  }

  decrementCartItemQuantity = id => {
    const {cartList} = this.state
    const cartItem = cartList.find(each => each.id === id)
    const {quantity} = cartItem
    if (quantity === 1) {
      this.removeCartItem(id)
      return
    }
    this.setState(prevState => ({
      cartList: prevState.cartList.map(each => {
        if (each.id === id) {
          return {...each, quantity: quantity - 1}
        }
        return each
      }),
    }))
  }

  addCartItem = product => {
    const {cartList} = this.state
    const productIndex = cartList.findIndex(each => each.id === product.id)

    if (productIndex !== -1) {
      //   console.log(productIndex, 'here')
      this.setState(prevState => ({
        cartList: prevState.cartList.map(each => {
          if (each.id === product.id) {
            const {quantity} = each
            return {...each, quantity: quantity + product.quantity}
          }
          return each
        }),
      }))
    } else {
      //   console.log(productIndex, 'here')
      this.setState(prevState => ({cartList: [...prevState.cartList, product]}))
    }

    
  }

  render() {
    const {cartList} = this.state

    return (
      <CartContext.Provider
        value={{
          cartList,
          addCartItem: this.addCartItem,
          removeCartItem: this.removeCartItem,
          removeAllCartItems: this.removeAllCartItems,
          incrementCartItemQuantity: this.incrementCartItemQuantity,
          decrementCartItemQuantity: this.decrementCartItemQuantity,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/products" component={Products} />
          <ProtectedRoute
            exact
            path="/products/:id"
            component={ProductItemDetails}
          />
          <ProtectedRoute exact path="/cart" component={Cart} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </CartContext.Provider>
    )
  }
}

export default App
