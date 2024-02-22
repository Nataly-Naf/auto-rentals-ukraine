import { createSlice } from '@reduxjs/toolkit';
import { fetchAutos, addContact, deleteContact } from './operations';

const contactsSlice = createSlice({
  name: 'autos',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  extraReducers: {
    [fetchAutos.pending](state, action) {
      state.contacts.isLoading = true;
    },
    [fetchAutos.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    },
    [fetchAutos.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
    [addContact.pending](state) {
      state.contacts.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      console.log(action.payload);
      state.contacts.items.push(action.payload);
    },
    [addContact.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },

    [deleteContact.pending](state) {
      state.contacts.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      const index = state.contacts.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.contacts.items.splice(index, 1);
    },
    [deleteContact.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
  },
  reducers: {
    setFilter: {
      reducer(state, action) {
        state.filter = action.payload;
      },
    },
  },
});
export const contactsReducer = contactsSlice.reducer;
export const { setFilter, fetchingInProgress, fetchingSuccess, fetchingError } =
  contactsSlice.actions;
