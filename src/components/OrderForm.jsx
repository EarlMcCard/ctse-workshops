import React, { useState } from "react";
import OrderCheckout from "./OrderCheckout";
import { toppingOptions, sizePrices } from "./data";

const OrderForm = () => {
  const [toppings1, setToppings1] = useState("");
  const [toppings2, setToppings2] = useState("");
  const [size, setSize] = useState(0);
  const [crust, setCrust] = useState();

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <form className="orderForm">
        <label htmlFor="crust">Crust:</label>

        <select
          id="crust"
          value={crust}
          onChange={(e) => setCrust(e.target.value)}
        >
          <option value="">Select Crust</option>
          <option value="Thin">Thin Crust</option>
          <option value="Regular">Regular Crust</option>
          <option value="Deep Dish">Deep Dish</option>
        </select>

        <label htmlFor="size">Size:</label>

        <select
          id="size"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        >
          <option value="">Select Size</option>
          <option value={10}>10"</option>
          <option value={12}>12"</option>
          <option value={14}>14"</option>
          <option value={16}>16"</option>
          <option value={18}>18"</option>
        </select>


        <label htmlFor="topping1">Topping 1:</label>

        <select
          id="topping1"
          value={toppings1}
          onChange={(e) => setToppings1(e.target.value)}
        >
          <option value=""></option>
          <option value="Cheese">Cheese</option>
          <option value="Pepperoni">Pepperoni</option>
          <option value="Sausage">Sausage</option>
          <option value="Mushroom">Mushroom</option>
          <option value="Bacon">Bacon</option>
          <option value="Ham">Ham</option>
          <option value="Pineapple">Pineapple</option>
          <option value="Onions">Onions</option>
          <option value="Green Peppers">Green Peppers</option>
          <option value="Black Olives">Black Olives</option>
        </select>

        <label htmlFor="toppings2">Topping 2:</label>

        <select
          value={toppings2}
          onChange={(e) => setToppings2(e.target.value)}
          id="toppings2"
        >
          {toppingOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </form>
      <OrderCheckout />
    </div>
  );
};

export default OrderForm;
