import Accordion from "./components/Accordion/Accordion";
import AccordionItem from "./components/Accordion/AccordionItem";

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us</h2>
      </section>
      <Accordion className="accordion">
        <Accordion.Item
          id="1"
          className="accordion-item"
          title="We are experts"
        >
          <article>
            <p>You can't go wrong with us.</p>
            <p>Some text.</p>
          </article>
        </Accordion.Item>
        <Accordion.Item
          id="2"
          className="accordion-item"
          title="We are experts"
        >
          <article>
            <p>You are not doing this alone from our office.</p>
            <p>Some text.</p>
          </article>
        </Accordion.Item>
        <Accordion.Item
          id="3"
          className="accordion-item"
          title="We are experts"
        >
          <article>
            <p>Safe and pleasant vacation.</p>
            <p>Some text.</p>
          </article>
        </Accordion.Item>
      </Accordion>
    </main>
  );
}

export default App;
