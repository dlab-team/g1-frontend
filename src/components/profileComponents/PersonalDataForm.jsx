import { useState } from 'react';

const PersonalDataForm = ({ initialData, onUpdate, onClose }) => {
    const [formData, setFormData] = useState(initialData);
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\+?\d{1,4}?[\s.-]?\(?\d{1,4}?\)?[\s.-]?\d{1,4}[\s.-]?\d{1,9}$/;

        if (!formData.nombre) newErrors.nombre = "El nombre es obligatorio.";
        if (!formData.apellido) newErrors.apellido = "El apellido es obligatorio.";
        if (!formData.email) {
            newErrors.email = "El email es obligatorio.";
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "El email no es válido.";
        }
        if (!formData.telefono) {
            newErrors.telefono = "El teléfono es obligatorio.";
        } else if (!phoneRegex.test(formData.telefono)) {
            newErrors.telefono = "El teléfono no es válido.";
        }
        if (!formData.pais) newErrors.pais = "El país es obligatorio.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            onUpdate(formData);
            alert('Información guardada con éxito.');
        } else {
            alert('Por favor, completa todos los campos obligatorios.');
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 shadow-lg rounded-lg ">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96 ">
                <h2 className="text-lg font-bold mb-4">Datos Personales</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Nombre</label>
                        <input
                            type="text"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                        {errors.nombre && <p className="text-red-500 text-sm">{errors.nombre}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Apellido</label>
                        <input
                            type="text"
                            name="apellido"
                            value={formData.apellido}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                        {errors.apellido && <p className="text-red-500 text-sm">{errors.apellido}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Teléfono</label>
                        <input
                            type="text"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                        {errors.telefono && <p className="text-red-500 text-sm">{errors.telefono}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">País</label>
                        <select
                            name="pais"
                            value={formData.pais}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        >
                            <option value="">Seleccionar país</option>
                            <option value="Chile">Santiago de Chile</option>
                            <option value="Argentina">Argentina</option>
                            <option value="Peru">Perú</option>
                            {/* Agrega otras opciones según la DB */}
                        </select>
                        {errors.pais && <p className="text-red-500 text-sm">{errors.pais}</p>}
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="px-4 py-2 ext-primary-500 hover:text-primary-700 font-semibold"
                            disabled={Object.keys(errors).length > 0}
                        >
                            Guardar
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 ext-primary-500 hover:text-primary-700 font-semibold"
                        >
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PersonalDataForm;

