"use client";
import React, { createContext, useContext, useEffect, useState } from 'react';

const FavouriteContext = createContext();

export const useFavourite = () => useContext(FavouriteContext);

export default function FavouriteProvider({children}) {

  const [favouriteItems, setFavouriteItems] = useState([]);

  useEffect(() => {
    const loadFavourites = () => {
      const savedToFavourites = JSON.parse(localStorage.getItem("favourites")) || [];
      setFavouriteItems(savedToFavourites);
    }

    loadFavourites();

    window.addEventListener('storage', loadFavourites); // Sync across tabs
    return () => {
      window.removeEventListener('storage', loadFavourites); // Cleanup listener on unmount
    }
  }, []);

  const addToFavourites = (product) => {
    const updateFavourites = [...favouriteItems, product];
    setFavouriteItems(updateFavourites);
    localStorage.setItem("favourites", JSON.stringify(updateFavourites));
  }

  const removeFromFavourites = (id) => {
    const updateFavourites = favouriteItems.filter(item => item.id !== id);
    setFavouriteItems(updateFavourites);
    localStorage.setItem("favourites", JSON.stringify(updateFavourites))
  }

  const value = {
    favouriteItems,
    addToFavourites,
    removeFromFavourites
  }
  return (
    <FavouriteContext.Provider value={value}>
      {children}
    </FavouriteContext.Provider>
  )
}
