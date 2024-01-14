import { useParams } from "react-router-dom"; //import해주고
import { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'

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
    useEffect(()=>{
        
    })
    let [count, setcount] =useState(false)
    setTimeout(()=>{setcount(true)}, 2000);
    return(
        <div className="container">
        {
            count == false ? <YellowBox>2초이후에 사라질것</YellowBox>:null
        }
          <div className="row">
          <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{찾은상품[id].title}</h4>
            <p>{찾은상품[id].content}</p>
            <p>{찾은상품[id].price}</p>
            <button className="btn btn-danger">주문하기</button> 
          </div>
          </div>
        </div> 
      )
    
  }

  export default Detail;