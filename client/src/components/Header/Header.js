import React from 'react';
//styles
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header__inner}>
          <div className={styles.logo}>
            <img
              src="https://oukosher.org/content/uploads/2019/08/hotdog.jpg"
              width="150"
              height="100"
              alt="Hotdog"
            />
            <p>CRUD</p>
          </div>
          <button
            className={styles.button}
          >
            Add hot dog
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
