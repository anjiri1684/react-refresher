/* eslint-disable react/prop-types */
import { createContext } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
});

function FavoritesContextProvider({ children }) {
  const context = {};
  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
