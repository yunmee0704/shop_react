import { useParams } from "react-router-dom"; //import해주고

import { useState ,useEffect } from 'react'
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
    let [count, setcount] =useState(false)
    let [inputValue, setValue] =useState('')

    useEffect(()=>{
       if(isNaN(inputValue) == true){
        alert('그러지마세요')
       }

   
    },[inputValue])
    
    return(
        <div className="container">
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
            <button className="btn btn-danger">주문하기</button> 
          </div>
          </div>
        </div> 
      )
    
  }

  export default Detail;