/* eslint-disable react/prop-types */
import classes from "./MeetupItem.module.css";

export default function MeetupItem({ image, title, addres, description }) {
  return (
    <li className={classes.item}>
      <div className={classes.image}>
        <img src={image} alt={title} />
      </div>
      <div className={classes.content}>
        <h3>{title}</h3>
        <address>{addres}</address>
        <p>{description}</p>
      </div>
      <div className={classes.actions}>
        <button>To Favorites</button>
      </div>
    </li>
  );
}