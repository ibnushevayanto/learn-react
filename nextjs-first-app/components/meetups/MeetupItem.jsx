import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

function MeetupItem(props) {
  const { push } = useRouter();

  return (
    <li className={classes.item}>
      <Card>
        <div className="image">
          <Image
            src={props.image}
            alt={props.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button
            onClick={() => {
              push(`/meetup/${props.id}`);
            }}
          >
            Show Details
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
