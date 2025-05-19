import sql from "better-sqlite3";

const db = sql("meals.db");

// this returns a promise
export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // simulate a delay
  return db.prepare("SELECT * FROM meals").all();
}
