/* eslint-disable react/prop-types */
import { useContext } from "react";

import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import FavoritesContext from "../../store/favorites-context";

export default function MeetupItem({ image, title, address, description, id }) {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(id);

  function toggleFavoritesStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(id);
    } else {
      favoritesCtx.addFavorite({ id, image, title, address, description });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoritesStatusHandler}>
            {itemIsFavorite ? "Remove from favorites" : "To favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}
