import { Routes, Route, Link } from 'react-router-dom';
import { Suspense, useContext } from 'react';
import {MainPageAsync} from './pages/MainPage/MainPage.async';
import {AboutPageAsync} from './pages/AboutPage/AboutPage.async';
import { useTheme} from './theme/useTheme';
import {classNames} from './helpers/classNames/classNames';
import './styles/index.scss';


const App = () => {
  const {theme, toggleTheme} = useTheme();

  return <div className={classNames('app', {}, [theme])}>
    <button onClick={toggleTheme}>Change theme</button>
    <Link to='/'>Главная</Link>
    <Link to='/about'>О сайте</Link>
    <Suspense fallback='<div>loading...</div>'>
      <Routes>
        <Route path='/' element={<MainPageAsync />}></Route>
        <Route path='/about' element={<AboutPageAsync />}></Route>
      </Routes>
    </Suspense>
  </div>
}

export default App;