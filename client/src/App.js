import React from 'react';
//components
import Header from './components/Header';
import List from './components/List';
//styles
import styles from './App.module.css';

const App = () => {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <List />
      </div>
    </>
  );
};

export default App;
