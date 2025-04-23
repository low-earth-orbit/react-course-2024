import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";
import { useContext } from "react";
import CartContext from "../store/CartContext";

export default function Header() {
  const cartCtx = useContext(CartContext);

  const totalCartItems = cartCtx.items.reduce((total, item) => {
    return total + item.quantity;
  }, 0); // initial value of total is 0

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="Restaurant\'s logo" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button textOnly>Cart ({totalCartItems})</Button>
      </nav>
    </header>
  );
}
