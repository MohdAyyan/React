Step 1:- Create context user in that create one UserContext.js or jsx file in which you create context with the help of using React.createContext() and store in variable<br>
Step 2:- Than export that variable<br>
Step 3:- Than make one more profile with jsx in which import that file and make one method with XyzContextProvide ## in that ({children})=>{<br>
  make one usestate<br>
  const[user,setUser]=usestate(null)<br>
    return(<br>
        <UserContext.Provide value={{user,setUser}}>
       <br>{children}<br>
       </UserContext.Provide>
 <br>   )
}<br>
Yea Hai Setup
<br>
Step 4: Than export that file Contextprovider in app.jsx
<br>
Step 5: Than wrap jsx code in it like this:-<br>  
<UserContextProvider>
<br><p> Hello World!</p><br>
</UserContextProvider>
<br>
               SECOND METHOD OR EASY METHOD<br>
STEP 1:-  sabse pahele TodoContext = createContext({
  <br>todos:[
    <br>  {
    <br> id:1,
      <br>title: 'Learn React', <br>completed: false
      },
],<br>
addtodo:()=>{},<br>
deletetodo:()=>{},<br>
uptadetodo:()=>{},<br>
  
})
<br>
STEP 2:- <br>
const TodoProvider = TodoContext.Provider

STEP 3:- Ek useTodo naam ka hook/function  banana hai jisme return createContext(TodoContext) <br>
const useTodo =()=>{
  <br>
  return createContext(TodoContext)

}

STEP 4:- Sabko expoer karna hai app.jsx mea pr uskea functions likhna hai usme 

Step 5:- App.jsx ko wrap karna hai <br><TodoProvider value ={{function ke a name}}><br>

</TodoProvider>  
Thats it 