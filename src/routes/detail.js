import { useParams } from "react-router-dom"; //import해주고

function Detail(props){
    let {id} = useParams(); //App.js에서 사용한 파라미터 가져오기
    let 찾은상품 =props.shoes.filter(function(x){      
        return x.id = id        
    });

   
    return(
        <div className="container">
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