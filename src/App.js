import React from 'react';
import Nav from './component/Navbar';
import Container from './component/Container';
import LoadImg from './component/LoadImg';
import Modal from './component/Modal';

const App = () => (
  <div>
    <LoadImg />
    <Nav />
    <Container />
    <Modal />
  </div>
)

export default App;