import { calculateInvestmentResults } from "../util/investment";

export default function Results({ input }) {
  const results = calculateInvestmentResults(input);
  console.log(results);

  return (
    <section id="result">
      <table className="center">
        <thead>Calculation Results</thead>
        <tbody></tbody>
      </table>
    </section>
  );
}
