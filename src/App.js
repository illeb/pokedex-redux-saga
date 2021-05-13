import logo from './logo.svg';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import classes from './App.module.css';
import Pokedex from './components/Pokedex/Pokedex';
import store from './store';
import {Provider} from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <main>
        <Header>
        </Header>
        <div className={classes.mainContent}>
          <Menu></Menu>
          <Pokedex></Pokedex>
        </div>
      </main>
    </Provider>
  );
}

export default App;
