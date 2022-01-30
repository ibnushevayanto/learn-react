import Image from "next/image";
import { useRouter } from "next/router";

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

export default function DetailMeetupPage() {
  const { query } = useRouter();
  const data = DUMMY_MEETUPS.find((res) => res.id === query.idMeetup);

  return (
    <>
      <div className="image">
        <Image
          src={data.image}
          objectFit="cover"
          layout="fill"
          alt={data.title}
        />
      </div>
      <h1>{data.title}</h1>
      <address>{data.address}</address>
      <p>{data.description}</p>
    </>
  );
}
