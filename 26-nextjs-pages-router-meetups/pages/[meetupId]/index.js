import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetailsPage(props) {
  console.log("MeetupDetailsPage", props.meetupData);
  return <MeetupDetail {...props.meetupData} />;
}

export async function getStaticPaths() {
  return {
    fallback: false, // Enable fallback for dynamic routes
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId; // Fetch data for a single meetup

  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/4/48/NB_-_Hartland_Bridge2.jpg",
        id: meetupId,
        title: "A First Meetup",
        address: "Some address 5, 12345 Some City",
        description: "This is a first meetup",
      },
    },
  };
}

export default MeetupDetailsPage;
