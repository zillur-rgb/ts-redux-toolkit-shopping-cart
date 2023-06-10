import React from "react";
import { Link } from "react-router-dom";
import styles from "./CartLink.module.css";
import { useAppSelector } from "../../hooks";
import { getNumeItems } from "./cartSlice";

export function CartLink() {
  const numItems = useAppSelector(getNumeItems);

  return (
    <Link to="/cart" className={styles.link}>
      <span className={styles.text}>
        🛒&nbsp;&nbsp;{numItems ? numItems : "Cart"}
      </span>
    </Link>
  );
}
