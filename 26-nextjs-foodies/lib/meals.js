import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";
import { S3 } from "@aws-sdk/client-s3";

const s3 = new S3({
  region: "ca-central-1",
});

const db = sql("meals.db");

// this returns a promise
export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // simulate a delay

  // throw new Error("Error fetching meals"); // simulate an error

  return db.prepare("SELECT * FROM meals").all();
}

export async function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`; // could add random string to the file name

  // const stream = fs.createWriteStream(`public/images/${fileName}`); // this saves the image to the public/images folder
  const bufferedImage = await meal.image.arrayBuffer();

  // stream.write(Buffer.from(bufferedImage), (error) => {
  //   if (error) {
  //     throw new Error("Error writing image to file");
  //   }
  // });

  // Upload the image to S3
  s3.putObject({
    Bucket: "leohong-nextjs-demo-users-image",
    Key: fileName,
    Body: Buffer.from(bufferedImage),
    ContentType: meal.image.type,
  });

  // meal.image = `/images/${fileName}`;
  meal.image = fileName;

  return db
    .prepare(
      `
      INSERT INTO meals (title, summary, instructions, creator, creator_email, image, slug) 
      VALUES (@title, @summary, @instructions, @creator, @creator_email, @image, @slug)
    `
    )
    .run(meal);
}
