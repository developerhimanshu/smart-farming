import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AuthContextProvider } from './context/AuthContext'
import { ChatContextProvider } from './context/ChatContext'
import './index.css'

const rootHtml = document.getElementById('root')
ReactDOM.createRoot(rootHtml).render(
    <AuthContextProvider>
        <ChatContextProvider>
            <App />
        </ChatContextProvider>
    </AuthContextProvider>

)