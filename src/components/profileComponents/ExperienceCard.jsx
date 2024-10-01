import React from 'react';
import { useForm } from 'react-hook-form';
import { TrashOutline } from '../../assets/icons';

const ExperienceCard = ({ id, profesionalRole, organization, period, isEditing, onDelete, onSave, onChange }) => {
    const { register, handleSubmit } = useForm({
        defaultValues: {
            role: profesionalRole || '',
            organization: organization || '',
            period: period || '',
        },
    });

    const onSubmit = (data) => {
        if (!data.role.trim() || !data.organization.trim() || !data.period.trim()) {
            alert("Todos los campos son obligatorios. Por favor, complétalos antes de guardar.");
            return;
        }
        onSave(id, data); 
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        onChange(id, name, value);  
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-4 sm:p-6 mb-4 ">
            {isEditing ? (
                <div className="flex flex-col md:flex-row items-center">
                    <div className="flex-1 w-full sm:w-auto ">
                        <select
                            name="role"
                            value={profesionalRole}
                            onChange={handleInputChange}
                            className="border p-2 mb-2 w-full"
                            placeholder="Rol Profesional"
                        >
                            <option value="">Seleccionar Rol</option>
                            <option value="Chile">Ingeniero de Sistemas</option>
                            <option value="Argentina">Analista de Sistemas</option>
                            <option value="Peru">Ingeniero en Computación</option>
                            <option value="Venezuela">Ingeniero Informático</option>
                            <option value="México">Desarrollador Backend</option>
                            <option value="Bolivia">Desarrollador Frontend</option>
                            <option value="Paraguay">Desarrollador Fullstack</option>
                            <option value="Colombia">DevOps</option>
                            <option value="España">Otro</option>
                        </select>
                        <input
                            type="text"
                            name="organization"
                            value={organization}
                            onChange={handleInputChange}
                            className="border p-2 mb-2 w-full"
                            placeholder="Organización"
                        />
                        <input
                            type="text"
                            name="period"
                            value={period}
                            onChange={handleInputChange}
                            className="border p-2 mb-2 w-full"
                            placeholder="Periodo"
                        />
                    </div>
                    <div className="flex md:flex-col items-center space-x-4 mt-4 sm:mt-0">
                        <div>
                            <button
                                type="button"
                                onClick={() => onDelete(id)}
                            >
                                <img
                                    src={TrashOutline}
                                    alt="Eliminar"
                                    className="w-5 h-5 sm:w-6 sm:h-6 opacity-50 hover:opacity-100 transition-opacity duration-300 ease-in-out"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="flex items-start justify-between mb-2 text-sm md:text-lg ">
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th className="text-tittle-500 font-bold text-left flex items-center">
                                        <div className="flex items-center justify-center text-2xl w-4 h-4 bg-primary-200 rounded-full mr-2">
                                            <div className="text-black mb-2 mt-2">•</div>
                                        </div>
                                        {profesionalRole}
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="text-left">
                                <tr>
                                    <td className="text-tittle-400">{organization}</td>
                                </tr>
                                <tr>
                                    <td className="text-tittle-400">{period}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </form>
    );
};

export default ExperienceCard;
