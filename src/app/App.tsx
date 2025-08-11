import { Link } from 'react-router-dom';
import {classNames} from 'shared/lib';
import { useTheme } from 'app/providers/ThemeProvider';
import './styles/index.scss';
import { AppRouter } from 'app/providers/router';
import {Navbar} from 'widgets/Navbar';

const App = () => {
  const {theme, toggleTheme} = useTheme();

  return <div className={classNames('app', {}, [theme])}>
    <Navbar />
    <AppRouter />
    <button onClick={toggleTheme}>Change theme</button>
  </div>
}

export default App;