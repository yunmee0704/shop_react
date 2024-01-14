
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';//부트스트랩 css
import { Container, Nav, Navbar, Row, Col} from 'react-bootstrap'
import {useState} from 'react'
import data from './data'
import {Routes, Route, Link} from 'react-router-dom'

function App() {
  let [shoes] =useState(data)
  return (
    <div className="App">

      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">신발가게</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">Home</Link>
            <Link to="/detail">Cart</Link>
          </Nav>
        </Container>
      </Navbar>
     
      <Routes>
        <Route path ="/" element={
        <div>      
          <div className='main-bg'></div>
            <Container>
            <Row>
            {
              shoes.map(function(a,i){
                return(
                  <Card shoes={shoes[i]}/>
                )
              })
            }
            </Row>
            </Container>
          </div>}/>
        <Route path ="/detail" element={      
          <Detail/>
        }/>
      </Routes>


    </div>
  );
}
function Card(props){
  return(
    <Col>
      <img src={process.env.PUBLIC_URL +  `/img/shoes${props.shoes.id+1}.jpg`} width="80%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </Col>
  )
}

function Detail(props){
  return(
    <div className="container">
      <div className="row">
      <div className="col-md-6">
        <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
      </div>
      <div className="col-md-6">
        <h4 className="pt-5">상품명</h4>
        <p>상품설명</p>
        <p>120000원</p>
        <button className="btn btn-danger">주문하기</button> 
      </div>
      </div>
    </div> 
  )
}

export default App;
