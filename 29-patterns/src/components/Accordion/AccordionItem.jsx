export default function AccordionItem({ id, className, children }) {
  return (
    <li id={id} className={className}>
      {children}
    </li>
  );
}
