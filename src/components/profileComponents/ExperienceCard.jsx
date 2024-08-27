import React, { useState } from 'react';
import { LuPencil } from "react-icons/lu";

const ExperienceCard = ({ profesionalRole, organization, period }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [role, setRole] = useState(profesionalRole);
    const [org, setOrg] = useState(organization);
    const [per, setPer] = useState(period);

    const handleEditClick = () => {
        setIsEditing(!isEditing);
    };

    const handleSaveClick = () => {
        // aqui guardar la información editada en database
        setIsEditing(false);
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-6 mb-4">
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="border p-2 mb-2 w-full"
                        placeholder="Rol Profesional"
                    />
                    <input
                        type="text"
                        value={org}
                        onChange={(e) => setOrg(e.target.value)}
                        className="border p-2 mb-2 w-full"
                        placeholder="Organización"
                    />
                    <input
                        type="text"
                        value={per}
                        onChange={(e) => setPer(e.target.value)}
                        className="border p-2 mb-2 w-full"
                        placeholder="Periodo"
                    />
                    <button
                        onClick={handleSaveClick}
                    >
                        Guardar {/* editar diseño button, agregar buton eliminar quizas */}
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
                                            <div className="text-black mb-2">•</div>
                                        </div>
                                        {role}
                                    </th>
                                    <th className="text-right">
                                        <button onClick={handleEditClick} className="text-gray-500 hover:text-gray-700">
                                            <LuPencil />
                                        </button>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="text-left">
                                <tr>
                                    <td className="text-tittle-400">{org}</td>
                                </tr>
                                <tr>
                                    <td className="text-tittle-400">{per}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ExperienceCard;
