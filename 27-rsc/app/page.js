import ClientDemo from "@/components/ClientDemo";
import DataFetchingDemo from "@/components/DataFetchingDemo";
import ErrorBoundary from "@/components/ErrorBoundary";
import RSCDemo from "@/components/RSCDemo";
import ServerActionsDemo from "@/components/ServerActionsDemo";
import UsePromiseDemo from "@/components/UsePromisesDemo";
import fs from "node:fs/promises";
import { Suspense } from "react";

export default async function Home() {
  const fetchUserPromise = new Promise((resolve, reject) =>
    setTimeout(async () => {
      const data = await fs.readFile("dummy-db.json", "utf-8");
      const users = JSON.parse(data);
      // resolve(users);
      reject(new Error("Failed to fetch users!"));
    }, 2000)
  ); // simulate delay

  return (
    <main>
      <ErrorBoundary fallback={"Something went wrong!"}>
        <Suspense fallback={<p>Loading...</p>}>
          <UsePromiseDemo usersPromise={fetchUserPromise} />
        </Suspense>
      </ErrorBoundary>
      {/* <ServerActionsDemo /> */}
      {/* <DataFetchingDemo /> */}
      {/* <ClientDemo>
        <RSCDemo />
      </ClientDemo> */}
    </main>
  );
}
