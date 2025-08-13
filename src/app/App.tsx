import { Link } from 'react-router-dom';
import {classNames} from 'shared/lib';
import { useTheme } from 'app/providers/ThemeProvider';
import './styles/index.scss';
import { AppRouter } from 'app/providers/router';
import {Navbar} from 'widgets/Navbar';
import { SideBar } from 'widgets/SideBar';

const App = () => {
  const {theme} = useTheme();

  return <div className={classNames('app', {}, [theme])}>
    <Navbar />
    <div className='content-page'>
      <SideBar />
      <AppRouter />
    </div>
  </div>
}

export default App;