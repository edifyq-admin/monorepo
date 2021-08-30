import styles from './app.module.css';

import star from './star.svg';

import logo from '../assets/edifyq_logo.png';

export function App() {
  return (
    <div className={styles.app}>
      <header className="flex">
        <img src={logo} alt="logo" />
      </header>
      <main>
        <h1>Welcome to website!</h1>
      </main>
    </div>
  );
}

export default App;
