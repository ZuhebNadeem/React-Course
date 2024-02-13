import Accordion from "./components/Accordion";
import AccordionItem from "./components/AccordionItem";

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordion className="accordion">
          <AccordionItem
            id="experience"
            className="accordion-item"
            title="We got 20 years of experience"
          >
            <p>You can&apos;t go wrong with us.</p>
            <p>
              We are in the business of planning highly individualized vacation
              trips fo more than 20 years.
            </p>
          </AccordionItem>
          <AccordionItem
            id="local-guides"
            className="accordion-item"
            title="We are working with local guides"
          >
            <p>We are not doing this along from our office.</p>
            <p>
              Instead, we are working with local guides to ensure a safe and
              pleasant vacation.
            </p>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}

export default App;