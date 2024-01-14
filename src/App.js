
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';//부트스트랩 css
import { Container, Nav, Navbar, Row, Col} from 'react-bootstrap'
import {useState} from 'react'
import data from './data'
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import Detail from './routes/detail.js'

function App() {
  let [shoes] =useState(data)
  let navigate = useNavigate();

  return (
    <div className="App">

      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">신발가게</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>cart</Nav.Link>
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
        <Route path ="/detail/:id" element={<Detail shoes={shoes}/>
        }/>
        <Route path ="*" element={<div>없는 페이지에요</div>}/>

        <Route path="/about" element={ <About/> } >  
          <Route path="member" element={ <div>멤버들</div> } />
          <Route path="location" element={ <div>회사위치</div> } />
        </Route>

        <Route path="/event" element={ <Event/> } >  
          <Route path="one" element={ <div>첫 주문시 양배추즙 서비스</div> } />
          <Route path="two" element={ <div>생일기념 쿠폰받기</div> } />
        </Route>
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

function About(){
  return(
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Event(){
  return(
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}

export default App;
