import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import data from './pages/shopdata';
import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import About from './pages/About';
import Details from './pages/Details';
import { useState } from 'react';

function App() {

  const navigate = useNavigate()
  const [bests] = useState(data)

  return (
    <div className="App">

      <Navbar bg="white" variant="white">
        <Container>
          <Navbar.Brand onClick={() => {navigate('/')}}>Shopping Mall</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => {navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={() => {navigate('/about')}}>About</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
      
      <Routes>
        <Route path='/' element={
          <Container>
            <img src={process.env.PUBLIC_URL+ '/images/visual_main_01.jpg'} alt='' style={{width: '85%'}} />
            <h2>BEST 상품</h2>
            <Row>
              {
                bests.map((best, i) => {
                  return (
                    <Col>
                      <Link to={`/detail/${i}`}>
                        <img src={best.image} alt='' style={{width: 280}} />
                        <h4>{best.title}</h4>
                        <p>{best.desc}</p>
                        <p>{best.price.toLocaleString()}원</p>
                      </Link>
                    </Col>
                  )
                })
              }
              
              <Col>2 of 3</Col>
              <Col>3 of 3</Col>
            </Row>
          </Container>
        }></Route>
        <Route path='about' element={<About />}>
          <Route path='info' element={<div>Information</div>} />
          <Route path='loca' element={<div>Location</div>} />
        </Route>
        <Route path='detail/:id' element={<Details bests={bests} />} />
      </Routes>
    </div>
  );
}

export default App;
