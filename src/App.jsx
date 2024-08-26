import ReactDOM from 'react-dom';
import React, { useState } from "react";
import Sidebar from './components/sidebar.jsx';
import './index.css';
ReactDOM.render(<App />, document.getElementById('root'));

function App() {
  };

  return (
    <div>
      {!isModalVisible ? (
        <ResetPassword onSubmit={handleResetPasswordSubmit}/>
      ) : (
        <Modal />
      )}
    </div>
  );


export default App;
