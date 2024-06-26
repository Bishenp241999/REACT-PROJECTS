import Order from "./Order";

/* eslint-disable react/no-unescaped-entities */
export default function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    // if(hour >=openHour && hour<=closeHour) alert('We are currently open! ☺');
    // else alert('Sorry... We are closed! 😥');

    return (
        <footer className="footer">
            {
                isOpen ? <Order closeHour={closeHour} /> : <p>We are happy to welcome you between {openHour}:00 and {closeHour}:00</p>
            }
        </footer>
    )
}