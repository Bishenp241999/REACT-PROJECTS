import AccordionItem from "./AccordionItem";
import { useState } from "react";

/* eslint-disable react/prop-types */
export default function Accordion({ faqs }) {
    const [curOpen, setIsOpen] = useState(null);
    return (
        // <AccordionItem
        //     number={1}
        //     title={faqs[0].title}
        //     text = {faqs[0].text}
        // />
        <div className="accordion">
            {faqs.map((faq, index) => <AccordionItem
                key={index}
                number={index + 1}
                title={faq.title}
                curOpen={curOpen}
                onOpen={setIsOpen}
            >{faq.text}</AccordionItem>)}
        </div>
    )
}