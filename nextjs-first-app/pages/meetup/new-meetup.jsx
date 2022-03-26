import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import Head from "next/head";

export default function NewMeetupPage() {
  const { replace } = useRouter();

  const onAddMeetupHandler = async (enteredMeetupData) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (data) {
      replace("/");
    }
  };
  return (
    <>
      <Head>
        <title>Add New Meetup</title>
      </Head>
      <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
    </>
  );
}
