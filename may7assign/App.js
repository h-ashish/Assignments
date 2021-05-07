import logo from './logo.svg';
import './App.css';
import Menu from './menu.js';
import './mar28assign1.css';
import './userregistration.css'
import TodoLocalStorage from './TodoLocalStorage';
import RandomPrime from './randomprime';
import Library from './library';
import Duplicate from './Duplicate';
import ShowTwice from './showtwice';
import HookUseEffectExample from './HookUseEffectExample'
import UserDetails from './userDetails';
import ProductNames from './Productnames';
import ProductNamesInfo from './ProductNamesInfo';
import ProductFullData from './ProductsFullData';
import UserRegistration from './UserRegistration';
import April8assign1 from './april8assign1';
import April8assign2 from './april8assign2';
import Sample from './sample';
import CheckBoxtest from './april8test';
import Hooks from './usestate and useeffect';
import Comment from './Comment';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import About from './About';
import Contact from './Contact'
import HomePage from './Homepage'
import Employees from './Employees'
import TodoComponent from './TodoComponent'
import MainCommentComponent from './MainCommentComponent'
import MainComponent from './MainComponent';
import ForumComponent from './ForumComponent';
import Authors from './Authors';
import BlogMain from './BlogMain'
import ClassBasedCounter from './ClassBasedCounter';
import UserReg from './april21test';
import {useState, usestate} from 'react';
import RefHook from './useRefHook';
import store from './store/store';
import ReduxCounter from './ReduxCounter';
import BarGraph from './barchart';
import Linegraph from './linegraph';
import BlogContext from './BlogContext';
import MemoTest from './MemoTest';
import ParentComp from './ParentComp';
import TodoRedux from './TodoRedux';
import ForumRedux from './ForumRedux';
import ReduxClassBasedCounter from './ReduxClassBasedCounter';
import HocExample from './HocExample';
import Tutorial from './Tutorial';
import LodashExamples from './LodashExamples';
import LodashTodoComp from './LodashTodoComp';
import PropTypeExample from './PropTypeExample/PropTypeExample';
import Registration from './Registration/Registration';
import Login from './authentication/Login';
import May3test from './may3test';
import Register from './authentication/Register';
import Member  from './authentication/Member'
import PrivateRoute from './PrivateRoute'
import RegistrationForm from './may7assign/Registrationform';
import LoginForm from './may7assign/LoginForm';
import MembersPage from './may7assign/MembersPage';
import UserProfile from './may7assign/UserProfile'
//this function will run whenever state changes means whenever the counter is called 
// store.subscribe(function(){
//   const currentState = store.getState();
//   console.log (currentState);
// })

//we are calling the reducer and passing action as type: counter/increase which will run 
//the switch unction of reducer will increase the count
// store.dispatch({type:'counter/increase'});
// store.dispatch({type:'counter/increase'});
// store.dispatch({type:'counter/increase'});
// store.dispatch({type:'counter/decrease'});
function App() {
  const [step, setStep] = useState(1);
  return (
    <div className="App">
            {/* <ParentComp/> */}
      <BrowserRouter>
      {/* <Link to = '/counter'>ClassBasedCounter</Link>
      <Route path="/counter">
      <input type="number" onChange={(e)=>{setStep(parseInt(e.target.value))}}/>
        <ClassBasedCounter step = {step}/>
      </Route> */}
      <PrivateRoute path='/member'>
        <Member/>
      </PrivateRoute>
      <Route path = "/register">
        <Register/>
      </Route>
      <Route path = "/login">
        <Login/>
      </Route>
      <Route path = '/routerender' render={()=>{
        return(<h1>I came from render</h1>)
      }}></Route>
      <Route path="/registrationform">
      <RegistrationForm/>
      </Route>
      <Route path="/loginform">
      <LoginForm  />
      </Route>
      <Route path="/memberspage">
      <MembersPage  />
      </Route>
      <Route path="/userprofile">
      <UserProfile  />
      </Route>
      </BrowserRouter>
      
      {/* <BrowserRouter>
      <Link to ="/HomePage">HomePage</Link>
      <Link to ="/About">About</Link>
      <Link to ="/Contact">Contact</Link>
      <Link to ="/Employees">Employees</Link>
      <Route path="/Homepage">
        <HomePage/>
      </Route>
      <Route path="/About">
        <About/>
      </Route> <br/>
      <Route path="/Contact">
        <Contact/>
      </Route>
      <Route path="/Employees">
        <Employees/>
      </Route>
  
      </BrowserRouter> */}
      {/* <ProductFullData/>
      <ProductNamesInfo/> */}
      {/* <RandomPrime/> */}
      {/* <TodoLocalStorage/> */}
      {/* <UserRegistration/> */}
      {/* <UserDetails/> */}
      {/* <April8assign2/> */}
      {/* <Sample/> */}
      {/* <Hooks/> */}
      {/* <UserProfile/> */}
      {/* <MainCommentComponent/> */}
      {/* <MainComponent/> */}
      {/* <ForumComponent/> */}
      {/* <Authors/> */}
      {/* <BarGraph/>
      <Linegraph/> */}
       {/* <TodoRedux/> */}
      {/* <Registration/>
      <Login/> */}
      {/* <Register/> */}
      {/* <May3test/> */}
    </div>
  );
}

export default App;
