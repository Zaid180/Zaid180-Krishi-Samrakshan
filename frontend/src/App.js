// import logo from './logo.svg';
import './App.css';
// import { Button } from '@chakra-ui/react';
import {
  ChakraProvider,
  Box,
  Flex,
  Text,
  Link,
  Heading,
  Container,
  Button
} from '@chakra-ui/react';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
// import HomePage from './Pages/HomePage';
import Navbarr from './Pages/Navbarr';
import About from "./Pages/About"
import LiveStock from './Pages/LiveStock';
import CropDisease from './Pages/CropDisease';


function App() {
  return (
    <div>
      <Route path="/" component={Navbarr} exact />
      <Route path="/livStock" component={LiveStock} exact />
      <Route path="/crop-disease" component={CropDisease} exact />
    </div>
  );
}



export default App;
