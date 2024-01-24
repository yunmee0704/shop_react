import { Table } from 'react-bootstrap'
import { useSelector } from 'react-redux';

function Cart(){
    
  let a = useSelector((state)=>{return state.data})
//   console.log(a.name) //{name: 'kim'}
//   console.log(a.stock) //[10,11,12]
  console.log(a[1].id)


    return(
        <div>
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
                    a.map(function(b,i){
                     return(
                        <tr>
                        <td>{b.id}</td>
                        <td>{b.name}</td>
                        <td>{b.count}</td>
                        <td>안녕</td>
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