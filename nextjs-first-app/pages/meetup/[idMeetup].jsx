import Image from "next/image";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb://<username>:<password>@<name_cluster>-shard-00-00.mkmjb.mongodb.net:27017,<name_cluster>-shard-00-01.mkmjb.mongodb.net:27017,<name_cluster>-shard-00-02.mkmjb.mongodb.net:27017/<db_name>?ssl=true&replicaSet=atlas-zap81e-shard-0&authSource=admin&retryWrites=true&w=majority"
  );

  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();

  return {
    fallback: 'blocking',
    paths: meetups.map((res) => ({ params: { idMeetup: res._id.toString() } })),
  };
}

export async function getStaticProps({ params }) {
  const client = await MongoClient.connect(
    "mongodb://<username>:<password>@<name_cluster>-shard-00-00.mkmjb.mongodb.net:27017,<name_cluster>-shard-00-01.mkmjb.mongodb.net:27017,<name_cluster>-shard-00-02.mkmjb.mongodb.net:27017/<db_name>?ssl=true&replicaSet=atlas-zap81e-shard-0&authSource=admin&retryWrites=true&w=majority"
  );

  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(params.idMeetup),
  });
  client.close();
  const meetupsData = { ...selectedMeetup };
  delete meetupsData._id;

  return {
    props: {
      meetupsData,
    },
  };
}

export default function DetailMeetupPage({ meetupsData }) {
  return meetupsData ? (
    <>
      <Head>
        <title>{meetupsData.title}</title>
      </Head>
      <div className="image">
        <Image
          src={meetupsData.image}
          objectFit="cover"
          layout="fill"
          alt={meetupsData.title}
        />
      </div>
      <h1>{meetupsData.title}</h1>
      <address>{meetupsData.address}</address>
      <p>{meetupsData.description}</p>
    </>
  ) : (
    <div>Not Found</div>
  );
}
