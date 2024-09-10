import React from 'react';
import { useForm } from 'react-hook-form';
import { TrashOutline } from '../../assets/icons'; 

const ExperienceCard = ({ id, profesionalRole, organization, period, isEditing, onDelete }) => {
    const { register, handleSubmit, watch, setValue, getValues } = useForm({
        defaultValues: {
            role: profesionalRole || '',
            organization: organization || '',
            period: period || '',
        },
    });

    const roleValue = watch('role');
    const organizationValue = watch('organization');
    const periodValue = watch('period');

    const onSubmit = (data) => {
        if (!data.role.trim() || !data.organization.trim() || !data.period.trim()) {
            alert("Todos los campos son obligatorios. Por favor, complétalos antes de guardar.");
            return;
        }
        alert('Cambios guardados');
        // aquí  lógica para guardar los datos
    };

    const handleSave = () => {
        const values = getValues();
        if (!values.role.trim() || !values.organization.trim() || !values.period.trim()) {
            alert("Todos los campos son obligatorios. Por favor, complétalos antes de guardar.");
            return;
        }
        onSubmit(values);
    };

    
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 mb-4">
            {isEditing ? (
                <div className="flex items-center">
                    <div className="flex-1">
                        <input
                            type="text"
                            {...register('role', { required: "Este campo es obligatorio" })}
                            className="border p-2 mb-2 w-full"
                            placeholder="Rol Profesional"
                        />
                        <input
                            type="text"
                            {...register('organization', { required: "Este campo es obligatorio" })}
                            className="border p-2 mb-2 w-full"
                            placeholder="Organización"
                        />
                        <input
                            type="text"
                            {...register('period', { required: "Este campo es obligatorio" })}
                            className="border p-2 mb-2 w-full"
                            placeholder="Periodo"
                        />
                    </div>
                    <div className="flex items-center space-x-4">
                        <button
                            type="button"
                            onClick={handleSave}
                            className="text-primary-500 hover:text-primary-700 font-semibold ml-5"
                        > Guardar
                        </button>
                        <button
                            type="button"
                            onClick={() => onDelete(id)}
                        >
                            <img
                                src={TrashOutline}
                                alt="Eliminar"
                                className="w-6 h-6 opacity-50 hover:opacity-100 transition-opacity duration-300 ease-in-out"
                            />
                        </button>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="flex items-start justify-between mb-2">
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th className="text-tittle-500 font-bold text-left flex items-center">
                                        <div className="flex items-center justify-center text-2xl w-4 h-4 bg-primary-200 rounded-full mr-2">
                                            <div className="text-black mb-2 mt-2">•</div>
                                        </div>
                                        {roleValue}
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="text-left">
                                <tr>
                                    <td className="text-tittle-400">{organizationValue}</td>
                                </tr>
                                <tr>
                                    <td className="text-tittle-400">{periodValue}</td>
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