import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/SharedLayout/Layout';
import Home from './pages/Home';
import Details from './pages/Details';
import Faq from './pages/Faq';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="details" element={<Details />} />
        <Route path="faq" element={<Faq />} />
        <Route path="*" element={<Navigate to={'/'} />} />
      </Route>
    </Routes>
  );
}

export default App;
