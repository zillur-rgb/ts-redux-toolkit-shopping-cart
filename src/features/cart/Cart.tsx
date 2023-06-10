import React from "react";
import styles from "./Cart.module.css";
import { useAppSelector } from "../../hooks";
import { getTotalPrice } from "./cartSlice";

export function Cart() {
  const products = useAppSelector((state) => state.products.products);
  const cart = useAppSelector((state) => state.cart.items);
  const totalPrice = useAppSelector(getTotalPrice);

  return (
    <main className="page">
      <h1>Shopping Cart</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(cart).map(([id, quantity]) => (
            <tr key={id}>
              <td>{products[id].name}</td>
              <td>
                <input
                  type="text"
                  className={styles.input}
                  defaultValue={quantity as number}
                />
              </td>
              <td>{products[id].price}</td>

              <td>
                <button
                  aria-label={`Remove ${products[id].name} from shopping cart`}
                >
                  x
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td></td>
            <td className={styles.total}>${totalPrice}</td>
            <td></td>
          </tr>
        </tfoot>
      </table>
      <form>
        <button className={styles.button} type="submit">
          Checkout
        </button>
      </form>
    </main>
  );
}
