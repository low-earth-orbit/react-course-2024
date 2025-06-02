import { useContext, createContext } from "react";

const AccordionItemContext = createContext();

export function useAccordionItemContext() {
  const context = useContext(AccordionItemContext);

  if (!context) {
    throw new Error(
      "useAccordionItemContext must be used within an AccordionItem"
    );
  }

  return context;
}

export default function AccordionItem({ id, className, children }) {
  return (
    <AccordionItemContext.Provider value={id}>
      <li id={id} className={className}>
        {children}
      </li>
    </AccordionItemContext.Provider>
  );
}
