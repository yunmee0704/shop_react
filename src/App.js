
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';//부트스트랩 css
import { Container, Nav, Navbar, Row, Col} from 'react-bootstrap'
import {useState} from 'react'
import data from './data'
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import Detail from './routes/detail.js'
import axios from 'axios'
import 장바구니 from './routes/Cart.js'


function App() {
  let [shoes,setShose] =useState(data)
  let navigate = useNavigate();
  let [click, setClick] =useState(1);

  return (
    <div className="App">

      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">신발가게</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/cart')}}>cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     
      <Routes>
        <Route path ="/" element={
        <div>      
          <div className='main-bg'></div>
          <button onClick={()=>{
            let copy = [...shoes];
            let atoz=copy.sort(function(a,b){
              if(a.title > b.title)return 1
              if(a.title < b.title)return -1
            });
            setShose(atoz)
           }
       
          }>정렬</button>
            <Container>
            <Row>
            {
              shoes.map(function(a,i){
                return(
                  <Card shoes={shoes[i] } key={i}/>
                )
              })
            }
            </Row>
            </Container>
            <button onClick ={()=>{
              setClick(click+1)
     
              if(click === 1){
                axios.get('https://codingapple1.github.io/shop/data2.json')
                .then((결과)=>{    
                  let copy =[...shoes, ...결과.data];
                  setShose(copy);
                })
                .catch(()=>{
                  console.log('실패')
                })
              }else if(click === 2 ){
                axios.get('https://codingapple1.github.io/shop/data3.json')
                .then((결과)=>{    
                  let copy =[...shoes, ...결과.data];
                  setShose(copy);
                })
                .catch(()=>{
                  console.log('실패')
                })
              }else{
                alert('상품이 더 없습니다.')
              }
              
             
              
              
            }}>더보기</button>
          </div>
        }/>
        <Route path ="/detail/:id" element={<Detail shoes={shoes}/>
        }/>
        <Route path ="/cart" element={<장바구니/>}/>
      </Routes>


    </div>
  );
}
function Card(props){
  return(
    <Col>
      <img src={`https://codingapple1.github.io/shop/shoes${props.shoes.id+1}.jpg`} width="80%" />
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
