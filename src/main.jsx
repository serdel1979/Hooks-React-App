import React from 'react'
import ReactDOM from 'react-dom/client'
import { CounterApp } from './01-useState/CounterApp'
import {CounterWidthCustomHook} from './01-useState/CounterWidthCustomHook'
//import { HooksApp } from './HooksApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 
    <CounterWidthCustomHook />

  </React.StrictMode>
) 
