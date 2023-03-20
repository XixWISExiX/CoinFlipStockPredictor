import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider, createTheme } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#242424",
    },
    secondary: {
      main: "#3e6fff",
    },
  },
  typography: {
    fontFamily: "SF Pro",
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <React.StrictMode>
      <ThemeProvider theme={darkTheme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </BrowserRouter>
)
