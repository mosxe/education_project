import { Routes, Route, Link } from 'react-router-dom';
import { Suspense, useContext } from 'react';
import {MainPage} from 'pages/MainPage';
import {AboutPage} from 'pages/AboutPage';
import {classNames} from 'helpers/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import './styles/index.scss';

const App = () => {
  const {theme, toggleTheme} = useTheme();

  return <div className={classNames('app', {}, [theme])}>
    <button onClick={toggleTheme}>Change theme</button>
    <Link to='/'>Главная</Link>
    <Link to='/about'>О сайте</Link>
    <Suspense fallback='<div>loading...</div>'>
      <Routes>
        <Route path='/' element={<MainPage />}></Route>
        <Route path='/about' element={<AboutPage />}></Route>
      </Routes>
    </Suspense>
  </div>
}

export default App;