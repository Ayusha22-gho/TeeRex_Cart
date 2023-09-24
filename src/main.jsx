import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SnackbarProvider } from "notistack";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <SnackbarProvider
          maxSnack={1}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          preventDuplicate
        >
    <App />
    </SnackbarProvider>
  </React.StrictMode>,
)