import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme} from '@mui/material';
import { Typography } from '@mui/material';
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home/Home';
import Search from './components/Search/Search';


const router = createBrowserRouter([{
  path: "/",
  element: <App/>,
  children: [
    {
      path: "search",
      element: <Search/>
    },
    {
      path: "/",
      element: <Home/>,
    },

  ]
}])
export const theme = createTheme({
  Typography:{
    fontFamily: "Poppins , sans-serif",
  },
  palette: {
    primary: {
      main: "#2AA7FF",
      green: "#00A500",
      secondary: "#1B3C74",
    },
  },
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider  router={router}/>
    </ThemeProvider>
  </React.StrictMode>
);


