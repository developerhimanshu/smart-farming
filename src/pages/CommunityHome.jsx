import React from 'react';
import Sidebar from '../components/Sidebar';
import Chat from '../components/Chat';

function CommunityHome(){
return (
  <div className="commHome">
    <div className="container">
        <Sidebar/>
        <Chat/>
    </div>
  </div>
  );
}

export default CommunityHome;