import { createContext, useState } from "react";

export const FavoriteContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoriteContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  function addFavorite(id) {
    setFavoriteMealIds((currentFavId) => [...currentFavId, id]);
  }

  function removeFavorite(id) {
    setFavoriteMealIds((currentFavId) => currentFavId.filter((mealId) => mealId !== id));
  }

  const value = {
    ids: favoriteMealIds,
    addFavorite,
    removeFavorite,
  };
  return <FavoriteContext.Provider value={value}>{children}</FavoriteContext.Provider>;
}

export default FavoriteContextProvider;
