import { Link } from 'react-router-dom';
import {classNames} from 'shared/lib';
import { useTheme } from 'app/providers/ThemeProvider';
import './styles/index.scss';
import { AppRouter } from 'app/providers/router';
import {Navbar} from 'widgets/Navbar';

const App = () => {
  const {theme} = useTheme();

  return <div className={classNames('app', {}, [theme])}>
    <Navbar />
    <AppRouter />
  </div>
}

export default App;