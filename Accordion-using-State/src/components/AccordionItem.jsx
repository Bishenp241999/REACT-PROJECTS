/* eslint-disable react/prop-types */

export default function AccordionItem({ number, title, children,curOpen,onOpen }) {
   const isOpen = number === curOpen;

    function handleIsOpen() {
        onOpen(number);
    }
    return (
        <div className={`item ${isOpen ? 'open' : ''}`} onClick={handleIsOpen}>
            <p className="number">0{number}</p>
            <p className="title">{title}</p>
            <p className="icon" >{isOpen ? '-' : '+'}</p>
            {isOpen && (
                <div className="content-box">
                    <p className="text">{children}</p>
                </div>
            )}
        </div>
    )
}