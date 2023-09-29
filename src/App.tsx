import { Navigate, Route, Routes } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { HomePage } from './pages/HomePage/HomePage';

const App = () => {
  return (
    <div className='flex flex-col'>
      <Routes>
        <Route path='/' element={<Navigate to='/dopamine' />} />
        <Route path='/dopamine' element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;
