import React from 'react'
import {createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import Home from './Pages/Home'
import AddExpense from './Pages/AddExpences'
import AddIncome from './Pages/AddIncome'
import Logout from './Pages/Logout'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements (
      <Route> 
         <Route path='/' element={<SignUp/>}/>
        <Route path='Login' element={<Login/>}/>
      <Route path='Home' element={<Home/>}/>
      <Route path='/add-expense' element={<AddExpense/>}/>
      <Route path='/add-income' element={<AddIncome/>}/>
      <Route path='/Logout' element={<Logout/>}/>
      </Route>
    )
  )
  return (
<>


<RouterProvider router={router}/>
</>
  )
}

export default App


