import React from 'react';
import './App.css';

const user = {userName: 'Kate'}
const biography = {textBiography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
const contacts = {contactsInfo: '380506452879'}

const App = () => (
  <div className="App">
    <p>First name: {user.userName}</p>
    <p>Biography: {biography.textBiography}</p>
    <p>Contacts: {contacts.contactsInfo}</p>
  </div>
)

export default App;
