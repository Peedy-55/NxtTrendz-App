
---

# Nxt Trendz - Cart Features Project

## Overview

In this project, I implemented **Nxt Trendz - Cart Features**, applying the concepts learned so far.

## Set Up Instructions

- Download dependencies by running `npm install`.
- Start up the app using `npm start`.

## Completion Instructions

### Functionality to be Added

The app should have the following functionalities:

#### Unauthenticated User Access

- When an unauthenticated user attempts to access the **Cart** Route, redirect to the **Login** Route.

#### Features to be Implemented

1. **Feature 1: Update Product Quantity**
   - Authenticated users adding the same product multiple times should update the quantity accordingly. The count of cart items in the header should remain the same.

2. **Feature 2: Display Total Amount and Items**
   - Display the total amount and number of items in the cart on the **Cart** Route.

3. **Feature 3: Cart Item Interaction**
   - Increment and decrement product quantity in each cart item.
   - When the quantity is one and the minus icon is clicked, remove the respective product from the cart.
   - Update product price and Cart Summary based on quantity changes.

4. **Feature 4: Remove Cart Item**
   - Authenticated users should be able to remove a cart item by clicking the remove button.

5. **Feature 5: Remove All Cart Items**
   - Authenticated users should be able to remove all cart items. Display the [Empty Cart View](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-cart-features-empty-cart-view.png).

#### `CartContext` Properties

- `cartList`: Stores cart items.
- `removeAllCartItems`: Removes all cart items in the `cartList`.
- `addCartItem`: Adds a cart item to the `cartList`.
- `removeCartItem`: Removes a cart item from the `cartList`.
- `incrementCartItemQuantity`: Increases the quantity of a product in the `cartList`.
- `decrementCartItemQuantity`: Decreases the quantity of a product in the `cartList`.

## Components Structure

![Component Structure](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-cart-features-component-structure-breakdown.png)

## Implementation Files

Use these files to complete the implementation:

- `src/App.js`
- `src/components/Cart/index.js`
- `src/components/Cart/index.css`
- `src/components/CartItem/index.js`
- `src/components/CartItem/index.css`
- `src/components/CartSummary/index.js`
- `src/components/CartSummary/index.css`

## Quick Tips

- Use `line-height` CSS property to set the height of a line box.

    ```css
    line-height: 1.5;
    ```

- Use the array method `find()` to return the first item's value that satisfies the provided testing function.

    ```javascript
    arr.find(Testing Function);
    ```

## Important Note

- Utilize `BsPlusSquare` and `BsDashSquare` icons from `react-icons` for plus and minus buttons.
- Use `AiFillCloseCircle` icon for the remove button.
- Ensure the HTML button elements in `CartItem` have `data-testid` attributes for plus, minus, and remove actions.
- Set the alt attribute of the product image in **Cart Item** Route as the `title` of the product.

### Prime User Credentials

```plaintext
username: rahul
password: rahul@2021
```

### Non-Prime User Credentials

```plaintext
username: raja
password: raja@2021
```

## Resources

### Colors

- Hex: #0b69ff
- Hex: #171f46
- Hex: #616e7c
- Hex: #ffffff

### Font Families

- Roboto

---
