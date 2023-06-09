import { Routes, Route } from 'react-router-dom';
import Menu from './Menu'
import Calculadora from './Cycle1/Calculadora';
import Conteo from './Cycle1/Conteo';
import InfiniteScrollExample from './Cycle1/InfiniteScroll';
/* eslint-disable */

const RoutesMenu = () => {
  return (
    <Routes>
      <Route path='/' element={<Menu />} />
      <Route path="/calculadora" element={<Calculadora />} />
      <Route path="/conteo" element={<Conteo />} />
      <Route path="/infinite" element={<InfiniteScrollExample />} />
    </Routes>
  );
}

export default RoutesMenu;