import React from 'react';
import PhoneBook from './PhoneBook/PhoneBookContainer';
import Contacts from './Contacts/ContactsContainer';
import Filter from './Filter/FilterContainer';
import styles from './App.module.css';
import CalcContainer from './Calc/CalcContainer';

const App = () => (
    <div className={styles.App}>
        {/* <PhoneBook />
        <h2>Contacts</h2>
        <Contacts />
        <Filter /> */}
        <CalcContainer />
    </div>
)

export default App;
