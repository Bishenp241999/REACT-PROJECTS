/* eslint-disable react/prop-types */
import Pizza from "./Pizza"
export default function Menu({ pizzaData }) {
    const numPizzas = pizzaData.length;
    return (
        <main className="menu">
            <h2>Our Menu</h2>
            {numPizzas > 0 ?
                <>
                    <p>
                        Authentic Italian cuisine, 6 createive dishes to choose from. All from our stone oven, all organic, all delicious.
                    </p>
                    <ul className="pizzas">
                        {pizzaData.map(pizza => {
                            return (
                                <Pizza key={pizza.name}  {...pizza} />
                            )
                        })}
                    </ul>
                </> : (
                    <p>We are still working on our menu, Please come back later...</p>
                )}
        </main>
    )
}