import ClientDemo from "@/components/ClientDemo";
import DataFetchingDemo from "@/components/DataFetchingDemo";
import RSCDemo from "@/components/RSCDemo";
import ServerActionsDemo from "@/components/ServerActionsDemo";
import UsePromiseDemo from "@/components/UsePromisesDemo";
import fs from "node:fs/promises";
import { Suspense } from "react";

export default async function Home() {
  const fetchUserPromise = new Promise((resolve) =>
    setTimeout(async () => {
      const data = await fs.readFile("dummy-db.json", "utf-8");
      const users = JSON.parse(data);
      resolve(users);
    }, 2000)
  ); // simulate delay

  return (
    <main>
      <Suspense fallback={<p>Loading...</p>}>
        <UsePromiseDemo usersPromise={fetchUserPromise} />
      </Suspense>

      {/* <ServerActionsDemo /> */}
      {/* <DataFetchingDemo /> */}
      {/* <ClientDemo>
        <RSCDemo />
      </ClientDemo> */}
    </main>
  );
}
