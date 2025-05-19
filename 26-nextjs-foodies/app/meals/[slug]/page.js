export default async function MealDetailsPage({ params }) {
  const { slug } = await params;
  return (
    <main>
      <h1>Meal</h1>
      <p>{slug}</p>
    </main>
  );
}
