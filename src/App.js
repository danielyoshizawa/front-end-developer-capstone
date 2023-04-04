import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Reservation from './components/Reservation/Reservation'
import ConfirmedBooking from './components/ConfirmedBooking/ConfirmedBooking'
import Layout from './components/Layout/Layout'

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/confirmation" element={<ConfirmedBooking />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
