import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

/* ponto de exclamação após o root informa que o arquivo vai existir e corrige o erro 
"Argument of type 'HTMLElement | null' is not assignable to parameter of type 'Element | DocumentFragment'.Type 'null' is not assignable to type 'Element | DocumentFragment'.ts" */