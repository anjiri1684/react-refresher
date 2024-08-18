/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          description={meetup.description}
          addres={meetup.addres}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
