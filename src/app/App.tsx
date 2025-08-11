import { Routes, Route, Link } from 'react-router-dom';
import { Suspense, useContext } from 'react';
import {MainPage} from 'pages/MainPage';
import {AboutPage} from 'pages/AboutPage';
import {classNames} from 'shared/lib';
import { useTheme } from 'app/providers/ThemeProvider';
import './styles/index.scss';
import { AppRouter } from 'app/providers/router';

const App = () => {
  const {theme, toggleTheme} = useTheme();

  return <div className={classNames('app', {}, [theme])}>
    <button onClick={toggleTheme}>Change theme</button>
    <Link to='/'>Главная</Link>
    <Link to='/about'>О сайте</Link>
    <AppRouter />
  </div>
}

export default App;