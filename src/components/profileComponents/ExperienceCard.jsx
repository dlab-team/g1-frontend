import React from 'react';
import { useForm } from 'react-hook-form';
import { TrashOutline } from '../../assets/icons';

const ExperienceCard = ({ id, profesionalRole, organization, period, isEditing, onDelete }) => {
    const { register, handleSubmit, watch } = useForm({
        defaultValues: {
            role: profesionalRole || '',
            organization: organization || '',
            period: period || '',
        },
    });

    const roleValue = watch('role');
    const organizationValue = watch('organization');
    const periodValue = watch('period');

    const handleDelete = () => {
        if (window.confirm("¿Estás seguro de que deseas eliminar esta experiencia?")) {
            onDelete(id);
        }
    };

    const onSubmit = (data) => {
        if (!data.role.trim() || !data.organization.trim() || !data.period.trim()) {
            alert("Todos los campos son obligatorios. Por favor, complétalos antes de guardar.");
            return;
        }
        alert('Cambios guardados');
    };
    

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded-lg p-6 mb-4">
            {isEditing ? (
                <div className="flex items-center">
                    <div className="flex-1">
                        <input
                            type="text"
                            {...register('role')}
                            className="border p-2 mb-2 w-full"
                            placeholder="Rol Profesional"
                        />
                        <input
                            type="text"
                            {...register('organization')}
                            className="border p-2 mb-2 w-full"
                            placeholder="Organización"
                        />
                        <input
                            type="text"
                            {...register('period')}
                            className="border p-2 mb-2 w-full"
                            placeholder="Periodo"
                        />
                    </div>
                    <button
                        type="button"
                        onClick={handleDelete}
                        disabled={!roleValue || !organizationValue || !periodValue}
                    >
                        <img
                            src={TrashOutline}
                            alt="Eliminar"
                            className="w-6 h-6 opacity-50 hover:opacity-100 transition-opacity duration-300 ease-in-out m-5"
                        />
                    </button>
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

