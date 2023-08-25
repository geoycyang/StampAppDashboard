
import './App.css';
import Sidebar from './components/dashboard/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login'
import Main from './components/dashboard/main'
import { createBrowserRouter, RouterProvider } from "react-router-dom";


function App() {
  return (
    <Router>
      <Sidebar /> 
    </Router>
  );
}

export default App;

