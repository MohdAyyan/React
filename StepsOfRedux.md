Redux Toolkit includes these APIs:
configureStore(): wraps createStore to provide simplified configuration options and good defaults. It can automatically combine your slice reducers, adds whatever Redux middleware you supply, includes redux-thunk by default, and enables use of the Redux DevTools Extension.

createReducer(): that lets you supply a lookup table of action types to case reducer functions, rather than writing switch statements. In addition, it automatically uses the immer library to let you write simpler immutable updates with normal mutative code, like state.todos[3].completed = true.

createAction(): generates an action creator function for the given action type string.
createSlice(): accepts an object of reducer functions, a slice name, and an initial state value, and automatically generates a slice reducer with corresponding action creators and action types.

combineSlices(): combines multiple slices into a single reducer, and allows "lazy loading" of slices after initialisation.

createAsyncThunk: accepts an action type string and a function that returns a promise, and generates a thunk that dispatches pending/fulfilled/rejected action types based on that promise

createEntityAdapter: generates a set of reusable reducers and selectors to manage normalized data in the store

The createSelector utility from the Reselect library, re-exported for ease of use.
 
                IN SIMPLE LANGUAGE

STEP 1 :- INSTALL REDUX-TOOLKIT IN VS CODE
npm install @reduxjs/toolkit

npm i react-redux

STEP 2 :- CREATE A REDUX STORE IN SRC IN NEW FOLDER NAME DEPEND ON YOU UNDER THAT CREATE A JS FILE NAME AS STORE.JS IN THAT FOLLOW THIS STEPS WHICH ARE GIVEN BELOW :-

STEP 2A:- IMPORT {configureStore} from "@reduxjs/toolkit"

STEP 2B:- export const store = configureStore({})

STEP 3 :- CREATE A NEW FOLDER NAME AS REDUCER IN SRC FOLDER NAME AS  features UNDER THAT MAKE ONE MORE FOLDER FOR YOUR PURPOSE EX:- TODO UNDER THAT FOLDER CREATE ONE FILE OR SLICE NAME AS EX:-todoSlice.js 

STEP 3A :- UNDER THAT FILE import {createSlice,nanoid(for unique id)} from "@reduxjs/toolkit";

STEP 3B :- CREATE ONE METHOD NAME AS 

const initialState ={

    under that write your data or functions

    EX:- todos:[
        
        {
            
            id:1,
            text:"hello world"    

    }]
}

STEP 4 :- CREATE ONE MORE METHOD UNDER THAT SLICE FILE NAME AS todoSlice for todos IF YOU WANT TO MAKE OTHER NAME xyzSlice and export that function or method

STEP 4A :- UNDER THAT METHOD THERE ARE SOME PROPERTIES OF SLICE SUCH AS

 export const todoSlice = createSlice({

name: "todos", // name of the slice,

initialState,

and reducers :{ // reducer is a object which have properties and function

addTodo: (state, action)//state give the current state of that thing => {

    action store some value

    const todo ={
        id:nanoid(),

        text:action.payload //where payload is a object    
    
    }

   state.todos.push(todo) //at last push it 
}

removeTodo:(state,action)=>{

    state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
},
//here action.payload is a id of that todo which we want to remove

updateTodo: (state, action) => {
  
  const { id, text } = action.payload;
  
  const todoIndex = state.todos.findIndex((todo) => todo.id === id);
  
  if (todoIndex !== -1) {
    state.todos[todoIndex].text = text;
  }

},


}})

//here we have created a slice and export it


STEP 4B :- EXPORT ALL THE METHODS WHICH YOU WRITTEN IN SLICE as name of that file.actions FUNCTION OR METHODS EX:-

export const {addTodo,removeTodo} = todoSlice.actions

STEP 4C :- AND THAN EXPORT THAT REDUCER OBJECT  WHICH IS WRITTEN INSIDE SLICE METHOD AS

export default todoSlice.reducer //agar ek sea zyada reducer hai tu purea export karne padenge

STEP 5:- PHIR STORE.JS MEA JANA HAI OR JITNE BHI REDUCER HAI WO IMPORT KARNA HAI USME

EX:- import todoReducer from "/todoSlice" //mea sea

STEP 5A :- PHIR JO STORE KA FUNCTION HAI USME reducer mea jo bhi name sea reducer import kiya hai as a object pass kardo 

export const store = configureStore({

    reducer:todoReducer

})

STEP 6 :- PHIR JO FILE ME ADD OR REMOVE KA FUNCTION PASS KAR RAHE HAI WAHA  import {useDispatch} karna hai react sea phir usko use karna hai

const dispatch = useDispatch()
//phir dispatch ka use karna hai

IMP:- Disptach ek reducer ko use karte howe store mea change karta hai

dispatch(addTodo(input))

phir const useSelector = useSelector(state => state.todo)//useSelector ek callback leta hai

STEP 7 :- LAST MEA WRAPPER LAGA NA HAI APP.JSX  YA MAIN.JSX MEA

STEP 7A :- PAHELE PROVIDER IMPORT KARNA PADENGA REACT-REDUX SEA PHIR USKE BAAD STORE BHI IMPORT KARNA PADENGA

<//Provider store={store}>

  <//App/>

<//Provider >

