import {createSlice} from '@reduxjs/toolkit';

let user = createSlice({
    name: 'user',
    initialState :{name:'kim', age:30},

    reducers:{
        changeName(state){
            return 'john '+ state
        },
        changeAge(state,action){
             state.age += action.payload;
        }
    }
})
export let {changeName,changeAge } = user.actions

export default user