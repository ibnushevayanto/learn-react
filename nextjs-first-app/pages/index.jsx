import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";

//  * Cara SSG
export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb://<username>:<password>@<name_cluster>-shard-00-00.mkmjb.mongodb.net:27017,<name_cluster>-shard-00-01.mkmjb.mongodb.net:27017,<name_cluster>-shard-00-02.mkmjb.mongodb.net:27017/<db_name>?ssl=true&replicaSet=atlas-zap81e-shard-0&authSource=admin&retryWrites=true&w=majority"
  );

  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();
  // * fetch data from api
  return {
    props: {
      meetups: meetups.map((meetup) => {
        const data = {
          ...meetup,
          id: meetup._id.toString(),
        };
        delete data._id;
        return data;
      }),
    },
    revalidate: 1,
  };
}

// * Cara SSR
// export async function getServerSideProps(context) {
//   // * fetch data from api
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

/**
 * Jika membutuhkan data yang sering berubah ubah, gunakan SSR
 * Jika tidak terlalu sering berubah, gunakan SSG
 */

export default function IndexPage({ meetups }) {
  return (
    <>
      <Head>
        <title>Meetup App</title>
        <meta name="description" content="This Is A Very Usefull Meetup App" />
      </Head>
      <MeetupList meetups={meetups} />
    </>
  );
}
