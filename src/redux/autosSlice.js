import { createSlice } from '@reduxjs/toolkit';
import { fetchAutos } from './operations';

const autosSlice = createSlice({
  name: 'autos',
  initialState: {
    autos: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
    favorites: [],
  },
  extraReducers: {
    [fetchAutos.pending](state, action) {
      state.autos.isLoading = true;
    },
    [fetchAutos.fulfilled](state, action) {
      state.autos.isLoading = false;
      state.autos.error = null;
      state.autos.items = action.payload;
    },
    [fetchAutos.rejected](state, action) {
      state.autos.isLoading = false;
      state.autos.error = action.payload;
    },
    // [addContact.pending](state) {
    //   state.contacts.isLoading = true;
    // },
    // [addContact.fulfilled](state, action) {
    //   state.contacts.isLoading = false;
    //   state.contacts.error = null;
    //   console.log(action.payload);
    //   state.contacts.items.push(action.payload);
    // },
    // [addContact.rejected](state, action) {
    //   state.contacts.isLoading = false;
    //   state.contacts.error = action.payload;
    // },

    // [deleteContact.pending](state) {
    //   state.contacts.isLoading = true;
    // },
    // [deleteContact.fulfilled](state, action) {
    //   state.contacts.isLoading = false;
    //   state.contacts.error = null;
    //   const index = state.contacts.items.findIndex(
    //     contact => contact.id === action.payload.id
    //   );
    //   state.contacts.items.splice(index, 1);
    // },
    // [deleteContact.rejected](state, action) {
    //   state.contacts.isLoading = false;
    //   state.contacts.error = action.payload;
    // },
  },
  reducers: {
    setFilter: {
      reducer(state, action) {
        state.filter = action.payload;
      },
    },
    addToFavorites(state, action) {
      state.favorites.push(action.payload);
    },
    removeFromFavorites(state, action) {
      state.favorites = state.favorites.filter(
        auto => auto.id !== action.payload.id
      );
    },
    setFavorites(state, action) {
      state.favorites = action.payload; // установка списка избранных автомобилей из локального хранилища
    },
  },
});
export const autosReducer = autosSlice.reducer;
export const {
  setFilter,
  addToFavorites,
  removeFromFavorites,
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
  setFavorites,
} = autosSlice.actions;
