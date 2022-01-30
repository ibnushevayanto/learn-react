import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://images.unsplash.com/photo-1642945857774-15b323312d00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDY3fHJuU0tESHd3WVVrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    address: "Perumahan Taman Walet",
    description: "Meetup Guys, Bareng Artis Tik Tok",
  },
];

export async function getStaticProps() {
  // * fetch data from api
  // * Semua kode disini akan dijalankan di sisi server
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

export default function IndexPage({ meetups }) {
  return <MeetupList meetups={meetups} />;
}