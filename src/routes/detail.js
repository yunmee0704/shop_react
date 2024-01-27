import { useParams } from "react-router-dom"; //import해주고
import {Nav} from 'react-bootstrap'
import { useState ,useEffect } from 'react'
import styled from 'styled-components'
import {addItem} from '../store'
import { useDispatch } from "react-redux";

var YellowBox =styled.div`
background :yellow;
color: black;
padding:10px;
`

function Detail(props){
    let {id} = useParams(); //App.js에서 사용한 파라미터 가져오기
    let 찾은상품 =props.shoes.filter(function(x){      
        return x.id = id        
    });
    let [count, setcount] =useState(false);
    let [inputValue, setValue] =useState('');
    let [탭, 탭변경] =useState(0);
    let [ani, setAni]=useState('');
    let dispatch = useDispatch()
    
    useEffect(()=>{
      let a = setTimeout(()=>{setAni('end');},100) //end를 붙는 시점을 살짝 0.01초 뒤로 미뤄줌
      return() =>{
        clearTimeout(a)
        setAni('') //클리너함수로 맨처음 클래스명 지워지도록 하기
      }
    },[props.ani])

    useEffect(()=>{
       if(isNaN(inputValue) == true){
        alert('그러지마세요')
       }

   
    },[inputValue])
    
    return(
        <div className={"container start "+ani}>
        {
            count == false ? <YellowBox>2초이후에 사라질것</YellowBox>:null
        }
        <input onChange={ (e) => { setValue(e.target.value) } } />

          <div className="row">
          <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{찾은상품[id].title}</h4>
            <p>{찾은상품[id].content}</p>
            <p>{찾은상품[id].price}</p>
            <button className="btn btn-danger" onClick={()=>{dispatch(addItem({id :1, name : 'Grey Yordan', count : 1}))}}>주문하기</button> 
          </div>
          </div>
          <Nav variant="tabs"  defaultActiveKey="link0">
            <Nav.Item>
              <Nav.Link eventKey="link0" onClick={()=>{탭변경(0)}}>버튼0</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link1" onClick={()=>{탭변경(1)}}>버튼1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link2" onClick={()=>{탭변경(2)}}>버튼2</Nav.Link>
            </Nav.Item>
         </Nav>
        <TabContent 탭={탭}/>
        </div> 
      )

  }

  //if문 이용하기 : if문 작성하려면 함수 컴포넌트처럼 밖에다가 작성해주면 됨.
  // function TabContent({탭}){
  //       if(탭 == 0){
  //      return <div>내용0</div>
     
  //     }else if(탭 == 1){
  //      return <div>내용1</div>
  //     }else if(탭 == 2){
  //      return <div>내용2</div>
  //     }
    
  // }

  //배열 이용하기
  function TabContent({탭}){
    let [fade, setFade] =useState('')//탭 애니메이션 효과 담는 state

    useEffect(()=>{
      let a = setTimeout(()=>{setFade('end');},100) //end를 붙는 시점을 살짝 0.01초 뒤로 미뤄줌
      return() =>{
        clearTimeout(a)
        setFade('') //클리너함수로 맨처음 클래스명 지워지도록 하기
      }
    },[탭])
    return (
    <div className ={'start '+ fade}>
      {[<div>내용0</div>,<div>내용1</div>,<div>내용2</div>][탭]}
    </div>
    )
  }


  export default Detail;