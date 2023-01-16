import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css'

import { Dashboard } from './dashboard/dashboard'
import { NewCustomer } from './new-customer/new-customer'
import { Deposit } from './deposit/deposit'
import { Transfer } from './transfer/transfer'
import { Withdraw } from './withdraw/withdraw'
import { Balance } from './balance/balance'
import { Transaction } from './Transaction Table/transaction'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard />}/>
      <Route path='/table' element={<Transaction />}/>
      <Route path='/new' element={<NewCustomer />}/>
      <Route path='/deposit' element={<Deposit />}/>
      <Route path='/withdraw' element={<Withdraw />}/>
      <Route path='/transfer' element={<Transfer />}/>
      <Route path='/balance' element={<Balance />}/>
    </Routes>
  </BrowserRouter>
);


