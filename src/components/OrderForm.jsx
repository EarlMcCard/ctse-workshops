import { drinkData, foodData, addOnOptions } from "./menu";
import { useState } from "react";

function OrderForm({ order, setOrder }) {
  const [drink, setDrink] = useState("");
  const [food, setFood] = useState("");
  const [shots, setShots] = useState(0);
  const [name, setName] = useState("");
  const [addOn, setAddOn] = useState("");

  const handleForm = (e) => {
    e.preventDefault();

    const newOrder = {
      newDrink: drink,
      newFood: food,
      shots: shots,
      addOn: addOn,
      name: name,
    };

    
    setOrder([...order, newOrder]);
    setName("")
    setDrink("");
    setFood("");
    setShots(0);
    setAddOn("")
  };

  console.log(order);

  return (
    <>
      <p>{drink}</p>

      <form onSubmit={handleForm}>
        <input 
        type="text" 
        value={name}
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
        />

        <select value={drink} onChange={(e) => setDrink(e.target.value)}>
          <option></option>
          {drinkData.map((item, index) => (
            <option value={item.drink} key={index}>
              {item.drink}
            </option>
          ))}
        </select>

        <select
          name=""
          id=""
          value={addOn}
          onChange={(e) => setAddOn(e.target.value)}
        >
          <option value=""></option>
          {addOnOptions.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>

        <select value={shots} onChange={(e) => setShots(e.target.value)}>
          <option value={0}></option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>

        <select value={food} onChange={(e) => setFood(e.target.value)}>
          <option></option>
          {foodData.map((item, index) => (
            <option key={index} value={item.food}>
              {item.food}
            </option>
          ))}
        </select>

        <button type="submit">Place Order</button>
      </form>
    </>
  );
}

export default OrderForm;
