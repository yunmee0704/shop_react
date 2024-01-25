import {configureStore, createSlice} from '@reduxjs/toolkit'
import user from './store/userSlice';

// let 변수명 =createSlice({
//     name: 'state이름',
//     initialState :'값'
// })






let stock = createSlice({
    name: 'stock',
    initialState :[10,11,12]
})

let data = createSlice({
    name: 'order',
    initialState :[
        {id : 1, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
      ] ,

    reducers:{
        plusCount(state){
           state.count +=1
        }
    }
})
export let {plusCount } = data.actions


export default configureStore({
    reducer:{
        // 작명 : user.reducer
        user: user.reducer,
        stock: stock.reducer,
        data : data.reducer
    }
})

