import ReactDOM from 'react-dom';
import ResetPassword from "./components/ResetPassword";
import Modal from "./components/Modal";
import React, { useState } from "react";
import Sidebar from './components/sidebar.jsx';
import './index.css';
ReactDOM.render(<App />, document.getElementById('root'));




function App() {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleResetPasswordSubmit = () => {
    setModalVisible(true);
  };

  return (

   
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-6">
         <div>
      {!isModalVisible ? (
        <ResetPassword onSubmit={handleResetPasswordSubmit}/>
      ) : (
        <Modal />
      )}
      </div>
    </div>
  );
}

export default App;
