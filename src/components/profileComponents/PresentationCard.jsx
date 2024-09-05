import React, { useState } from 'react';
import { PencilOutline } from '../../assets/icons'

const PresentationCard = ({ profesionalTitle, descriptionTitle }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(profesionalTitle);
    const [desc, setDesc] = useState(descriptionTitle);

    const handleEditClick = () => {
        setIsEditing(!isEditing);
    };

    const handleSaveClick = () => {
        if (title.trim() && desc.trim()) {
            setIsEditing(false);
            alert('Cambios guardados');
        } else {
            alert('Los campos no pueden estar en blanco.');
        }
    };
    
    return (
        <div className="bg-white shadow-md rounded-lg p-6 mb-4">
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="border p-2 mb-2 w-full"
                        placeholder="Titulo Profesional"
                    />
                    <input
                        type="text"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        className="border p-2 mb-2 w-full"
                        placeholder="Descripción del título profesional"
                    />

                    <button
                        onClick={handleSaveClick}
                        className="px-2 py-1 bg-primary-500 text-white rounded text-sm hover:bg-primary-600 m-2"
                    >
                        Guardar
                    </button>
                </div>
            ) : (
                <div>
                    <div className="flex items-start justify-between mb-2">
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th className="text-tittle-600 font-bold text-left flex items-center mb-4 italic text-lg">
                                        {title}
                                    </th>
                                    <th className="text-right">
                                        <button onClick={handleEditClick}>
                                            <img
                                                src={PencilOutline}
                                                alt="Editar"
                                                className="w-20 h-20 hover:opacity-50 transition-opacity duration-300 ease-in-out"
                                            />
                                        </button>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="text-left">
                                <tr>
                                    <td className="text-tittle-400 text-justify">{desc}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PresentationCard;
