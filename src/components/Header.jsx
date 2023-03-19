import React from 'react'
import {Link} from 'react-router-dom'
export default function Header(){
    return(
        <nav className="header">
            <h1><Link to ="/">Smart<br/>Farming</Link></h1>
            <main className="header-navs">
               <Link to ="/">Home</Link>
               <Link to ="/community">Community</Link>
               <Link to ="/about">About</Link>
               <Link to ="/contact">Contact</Link>
            </main>
        </nav>
    )
}