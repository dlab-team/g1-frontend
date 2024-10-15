const Modal = ({ message, onClose }) => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-lg font-semibold">{message}</h2>
          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-primary-500 text-white rounded"
          >
            Cerrar
          </button>
        </div>
      </div>
    );
  };

  export default Modal