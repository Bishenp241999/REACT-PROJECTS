/* eslint-disable react/prop-types */
function Pizza({ name, ingredients, price, photoName, soldOut }) {
    // if (soldOut) return null;
    return (
        <li className={soldOut ? "pizza sold-out" : "pizza"}>
            <img src={photoName} alt={name} />
            <div>
                <h3>{name}</h3>
                <p>{ingredients}</p>
                <span>{soldOut? 'SOLD OUT' : price}{!soldOut && '$'}</span>
            </div>
        </li>
    )
}

export default Pizza;