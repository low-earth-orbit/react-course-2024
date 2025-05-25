import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Head from "next/head";

export default function NewMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(meetupData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    router.push("/"); // Redirect to the home page
  }

  return (
    <>
      <Head>
        <title>Add a New Meetup</title>
        <meta name="description" content="Add your own meetup!" />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
}
