import React, { createContext, useState, useContext } from 'react';
const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favoriteIds, setFavoriteIds] = useState([]);

  const toggleFavorite = (localId) => {
    setFavoriteIds(prevIds => {
      if (prevIds.includes(localId)) {
        return prevIds.filter(id => id !== localId);
      } else {
        return [...prevIds, localId];
      }
    });
  };

  const isFavorite = (localId) => {
    return favoriteIds.includes(localId);
  };

  return (
    <FavoritesContext.Provider value={{ favoriteIds, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
export const useFavorites = () => {
  return useContext(FavoritesContext);
};