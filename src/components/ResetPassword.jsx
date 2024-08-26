import { FaChevronLeft } from "react-icons/fa";

function ResetPassword({ onSubmit }) {
const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
};

    return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <button className="text-gray-600 mb-4"> <FaChevronLeft size={24} />
            </button>
            <h2 className="text-center text-2xl font-semibold text-gray-900"> Restablecer contraseña </h2>
            <p className="text-center text-gray-500 mb-6"> Por favor ingresa el correo registrado </p>
            <form onSubmit={handleSubmit}>
        <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700"> Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-700">
            Continuar
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
