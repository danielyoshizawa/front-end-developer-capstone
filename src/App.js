import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import Reservation from './components/Reservation/Reservation'
import ConfirmedBooking from './components/ConfirmedBooking/ConfirmedBooking'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/confirmation" element={<ConfirmedBooking />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
