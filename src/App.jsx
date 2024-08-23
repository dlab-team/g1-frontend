import React from 'react';
import Sidebar from './components/sidebar.jsx';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-6">
        {/* Contenido principal */}
      </div>
    </div>
  );
}

export default App;

