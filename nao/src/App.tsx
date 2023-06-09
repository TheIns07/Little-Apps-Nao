import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RoutesMenu from './components/Routes';

function App() {
  return (
    <BrowserRouter>
      <RoutesMenu/>
    </BrowserRouter>
  );
}

export default App;
