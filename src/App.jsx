import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import { AuthContext } from './context/AuthContext';
import CommunityHome from "./pages/CommunityHome";
import Login from './pages/Login';
import Register from './pages/Register';


export default function App(){
    const { currentUser } = React.useContext(AuthContext);

    const ProtectedRoute = ({ children }) => {
      if (!currentUser) {
        return <Navigate to="/community/login " />;
      }
  
      return children
    };
    return(       
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element ={<Home/>}/>  
                <Route path="/about" element ={<About/>}/>
                <Route
              path='/community'
              element={
                <ProtectedRoute>
                  <CommunityHome />
                </ProtectedRoute>
              }
                />
                <Route path="/community/login" element={<Login />} />
                <Route path="/community/register" element={<Register />} />  
                <Route path="/contact" element ={<Contact/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}