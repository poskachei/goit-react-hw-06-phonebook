/*import { combineReducers } from "react-redux";
import contactAction from "./contactAction";
import { createReducer } from "@reduxjs/toolkit";

const addContact = (state, action) => {
  return [...state, action.payload.contact];
};
const removeContact = (state, action) => {
  return state.filter((contact) => contact.id !== action.payload);
};
const contacts = createReducer([], {
  [contactAction.addContact]: addContact,
  [contactAction.removeContact]: removeContact,
});

const filter = createReducer("", {
  [contactAction.changeFilter]: (state, action) => action.payload,
});

export default combineReducers({ contacts, filter });*/

import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import contactsActions from "./contactAction";

const addContact = (state, action) => {
  return [...state, action.payload.contact];
};
const removeContact = (state, action) => {
  return state.filter((contact) => contact.id !== action.payload);
};

const contacts = createReducer([], {
  [contactsActions.addContact]: addContact,
  [contactsActions.removeContact]: removeContact,
});

const filter = createReducer("", {
  [contactsActions.changeFilter]: (state, action) => action.payload,
});

export default combineReducers({
  contacts,
  filter,
});
