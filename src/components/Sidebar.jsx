import React from 'react';
import Chats from './Chats';
import ChatNavbar from './ChatNavbar'
import Search from './Search';
const Sidebar = () => {
    return(
        <div className="sidebar">
            <ChatNavbar/>
            <Search/>
            <Chats/>
        </div>
    )
}
export default Sidebar;