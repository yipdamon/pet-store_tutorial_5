import { useState, useContext, useEffect } from "react";
import "./styles.css";
import PetsOrderContext from "../../../context/petsOrderContext";
import { OrderItem } from "../../OrderItem";
import { Button } from "../../Button"

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useHistory } from "react-router";

export const ShoppingCartPage = () => {

  const [order, setOrder] = useState([]);

  const history = useHistory();

  const globalState = useContext(PetsOrderContext);

    // Check if current user is logged into firebase
    useEffect(
      () => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
          if (!user) {
            history.push('/login');
          }
        })
      }, []
    );

  useEffect (
    () => {
      setOrder(globalState.order);
    }, [globalState]
  )

  return (
    <div className="pets-page">
      <h1 className="pets-title"> My Shopping Cart </h1>
      <div className="order">
        {
          order.map((item) => <OrderItem image={item.image} id={item.id} name ={item.name} />)
        }
        {
          order.length === 0 && <p>Nothing in your order yet..</p>
        }
      </div>
        <Button text="Checkout" type="primary"/>
    </div>
  );
};

