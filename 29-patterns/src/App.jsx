import Accordion from "./components/Accordion/Accordion";
import AccordionItem from "./components/Accordion/AccordionItem";

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us</h2>
      </section>
      <Accordion className="accordion">
        <Accordion.Item id="1" className="accordion-item">
          <Accordion.Title id="1" className="accordion-item-title">
            We are experts
          </Accordion.Title>
          <Accordion.Content id="1" className="accordion-item-content">
            <article>
              <p>You can't go wrong with us.</p>
              <p>Some text.</p>
            </article>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item id="2" className="accordion-item">
          <Accordion.Title id="2" className="accordion-item-title">
            We are experts
          </Accordion.Title>
          <Accordion.Content id="2" className="accordion-item-content">
            <article>
              <p>You can't go wrong with us.</p>
              <p>Some text.</p>
            </article>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item id="3" className="accordion-item">
          <Accordion.Title id="3" className="accordion-item-title">
            We are experts
          </Accordion.Title>
          <Accordion.Content id="3" className="accordion-item-content">
            <article>
              <p>You can't go wrong with us.</p>
              <p>Some text.</p>
            </article>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </main>
  );
}

export default App;
