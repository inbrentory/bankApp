import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom'
import FormCreate from './component/FormCreate';
import FormDeposit from './component/FormDeposit';
import Navbar from './component/navbar';
import { UserContext } from './component/userContext';
// import { UserContextList } from './component/userContextList';
import { UserContextSafe } from './component/userContextSafe';
import { UserContextList } from './component/userContextList';
import FormWithdraw from './component/FormWithdraw';
import FormAllData from './component/FormAllData';
import FormHome from './component/FormHome';
import './App.css'



function App(){
   // const initialData = useState('Some info'), use const initialData = useContext(UserContext), it just show that one value
   // const [initialData, setInitialData] = useState('Some info'), we can const {initialData, setInitialData} = useContext(UserContext); in child component to make use of a new function. 
   let allUserInfo = [
    {name: 'Eddy East',
    email: 'Eddy@email.com',
    password: '12345',
    amount: 4250}
    ,
    {name: 'Wu Wang Nan',
    email: 'Wu.wn@email.com',
    password: 'wu554',
    amount: 8200}
   ]
  const [initialData, setInitialData] = useState('Some info');
  const [safe, setSafe]               = useState(allUserInfo); //this is where info is kept
  const [storage, setStorage]         = useState([]); //this is where info is kept
  
  return(
    <nav >
      <div className='App-header' style={{maxWidth: "200rem", alignItems:'center'}} >
        <h>BAD BANKING COORPERATION</h>
      </div>
      <div> 
        <UserContext.Provider value={{initialData, setInitialData}}>
        <UserContextList.Provider value={{storage, setStorage}}>
        <UserContextSafe.Provider value={{safe, setSafe}}>
        <Navbar/>
        <Route exact path='/'                          component = { FormHome } />
        <Route exact path='/CreateAccount'             component = { FormCreate } />
        <Route exact path='/Deposit/'                  component = { FormDeposit } />
        <Route exact path='/Withdraw/'                 component = { FormWithdraw } />
        <Route exact path='/Alldata/'                  component = { FormAllData } />
        {/* <Route exact path='/createAccount/' component = { Child2 } />
        <Route exact path='/child3/' component = { Child3 } />
        <Route exact path='/child4/' component = { Child4 } /> */}
        </UserContextSafe.Provider>
        </UserContextList.Provider>
        </UserContext.Provider>
      </div>
    </nav>
  )
}

ReactDOM.render(
  <HashRouter><App /></HashRouter>, document.getElementById('root')
)
