import { createSelector } from '@reduxjs/toolkit';

export const selectAutos = state => state.autos.autos.items;
export const selectFavorites = state => state.autos.favorites;

export const selectIsLoading = state => state.autos.autos.isLoading;
export const selectError = state => state.autos.autos.error;
export const selectFilter = state => state.autos.filter;
export const selectFilteredContacts = createSelector(
  [selectAutos, selectFilter],
  (autos, filter) => {
    return autos.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
