import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import SearchContext from "../Data/SearchContext.tsx"
import store  from "../Data/Store.js"
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <SearchContext>
          <App />
        </SearchContext>
      </Router>
      </Provider>
  </React.StrictMode>,
)
