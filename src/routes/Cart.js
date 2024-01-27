import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { changeAge, plusCount} from '../store';

function Cart(){
    
  let a = useSelector((state)=>{return state})

  let dispatch = useDispatch()
//   console.log(a.name) //{name: 'kim'}
//   console.log(a.stock) //[10,11,12]



    return(
        <div>
            <h6>{a.user.name}{a.user.age}의 장바구니</h6>
            <button onClick={()=>{dispatch(changeAge(5))}}>버튼</button>
         <Table>
            <thead>
                <tr>
                <th>#</th>
                <th>상품명</th>
                <th>수량</th>
                <th>변경하기</th>
   
                </tr>
            </thead>
            <tbody>
                {
                    a.data.map(function(b,i){
                     return(
                        <tr>
                        <td>{b.id}</td>
                        <td>{b.name}</td>
                        <td>{b.count}</td>
                        <td><button onClick={()=>{dispatch(plusCount(b.id))}}>+</button></td>
                        </tr>
                     )
                    })
                }
            </tbody>
            </Table> 
        </div>
    )
}

export default Cart;

