import ReactDOM from 'react-dom';
import ResetPassword from "./components/ResetPassword";
import Modal from "./components/Modal";
import React, { useState } from "react";
import './index.css';
ReactDOM.render(<App />, document.getElementById('root'));

function App() {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleResetPasswordSubmit = () => {
    setModalVisible(true);
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
}

export default App;
