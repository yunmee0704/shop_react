
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';//부트스트랩 css
import { Container, Nav, Navbar, Row, Col} from 'react-bootstrap'


function App() {
  return (
    <div className="App">
     
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">신발가게</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Cart">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='main-bg'></div>

      <Container>
      <Row>
        <Col>
          <img src={process.env.PUBLIC_URL +  '/img/shoes1.jpg'} width="80%" />
          <h4>상품명</h4>
          <p>상품정보</p>
        </Col>
        <Col>
        <img src={process.env.PUBLIC_URL +  '/img/shoes2.jpg'} width="80%" />
          <h4>상품명</h4>
          <p>상품정보</p>
        </Col>
        <Col>
        <img src={process.env.PUBLIC_URL +  '/img/shoes3.jpg'} width="80%" />
          <h4>상품명</h4>
          <p>상품정보</p>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
