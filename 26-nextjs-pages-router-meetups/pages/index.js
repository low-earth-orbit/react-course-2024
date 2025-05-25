import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";

// const DUMMY_MEETUPS = [
//   {
//     id: "m1",
//     title: "A First Meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/4/48/NB_-_Hartland_Bridge2.jpg",
//     address: "Some address 5, 12345 Some City",
//     description: "This is a first meetup",
//   },
//   {
//     id: "m2",
//     title: "A Second Meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/4/48/NB_-_Hartland_Bridge2.jpg",
//     address: "Some address 10, 12345 Some City",
//     description: "This is a second meetup",
//   },
// ];

function HomePage(props) {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

// // This function runs on the server side
// // It runs on every request
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // Fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

// Prepare the data for static generation
// This function runs at build time
export async function getStaticProps() {
  // Fetch data from an API

  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.tqwbhah.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        description: meetup.description,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10, // In seconds
  };
}

export default HomePage;
