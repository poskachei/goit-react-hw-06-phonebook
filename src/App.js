import React from "react";
import { connect } from "react-redux";

import Appbar from "./components/Appbar/index";
import ContactForm from "./components/Form/Form";
import ContactList from "./components/List/List";
import Filter from "./components/Filter/Filter";

import "./App.css";

function App() {
  return (
    <div className="pnohebook-container">
      <Appbar />
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts.items,
  };
};

export default connect(mapStateToProps, null)(App);
