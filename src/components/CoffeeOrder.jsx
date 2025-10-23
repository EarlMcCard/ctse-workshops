

function CoffeeOrder ({order}) {
    return (
        <div>
            <h2>Orders</h2>

            <ul>
                {order.map((item, index) => (
                    <li key={index}>{item.name} | {item.newFood} | {item.newDrink} | {item.shots} | {item.addOn}</li>
                ))}
            </ul>

            
        </div>
    )
}

export default CoffeeOrder