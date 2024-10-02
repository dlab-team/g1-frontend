import { useState } from 'react';

const PersonalDataForm = ({ initialData = {}, onUpdate, onClose }) => {
    const [formData, setFormData] = useState({
        nombre: initialData.nombre || '',
        apellido: initialData.apellido || '',
        email: initialData.email || '',
        telefono: initialData.telefono || '',
        pais: initialData.pais || ''
    });
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        const validators = {
            nombre: (value) => value ? "" : "El nombre es obligatorio.",
            apellido: (value) => value ? "" : "El apellido es obligatorio.",
            email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "El email no es válido.",
            telefono: (value) => /^\+?\d{1,4}?[\s.-]?\(?\d{1,4}?\)?[\s.-]?\d{1,4}[\s.-]?\d{1,9}$/.test(value) ? "" : "El teléfono no es válido.",
            pais: (value) => value ? "" : "El país es obligatorio."
        };

        Object.keys(formData).forEach(field => {
            const error = validators[field] && validators[field](formData[field]);
            if (error) newErrors[field] = error;
        });

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
                    {[
                        { label: "Nombre", name: "nombre", type: "text" },
                        { label: "Apellido", name: "apellido", type: "text" },
                        { label: "Email", name: "email", type: "email" },
                        { label: "Teléfono", name: "telefono", type: "text" }
                    ].map(({ label, name, type }) => (
                        <div className="mb-4" key={name}>
                            <label className="block text-gray-700">{label}</label>
                            <input
                                type={type}
                                name={name}
                                value={formData[name]}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                            {errors[name] && <p className="text-red-500 text-sm">{errors[name]}</p>}
                        </div>
                    ))}

                    <div className="mb-4">
                        <label className="block text-gray-700">País</label>
                        <select
                            name="pais"
                            value={formData.pais}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        >
                            <option value="">Seleccionar país</option>
                            <option value="Chile">Chile</option>
                            <option value="Argentina">Argentina</option>
                            <option value="Peru">Perú</option>
                            <option value="Venezuela">Venezuela</option>
                            <option value="México">México</option>
                            <option value="Bolivia">Bolivia</option>
                            <option value="Paraguay">Paraguay</option>
                            <option value="Colombia">Colombia</option>
                            <option value="España">España</option>
                            <option value="Otro">Otro</option>
                        </select>
                        {errors.pais && <p className="text-red-500 text-sm">{errors.pais}</p>}
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="px-4 py-2 text-primary-500 hover:text-primary-700 font-semibold"
                        >
                            Guardar
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-primary-500 hover:text-primary-700 font-semibold"
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
