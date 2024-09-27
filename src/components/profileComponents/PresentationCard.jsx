import React, { useState } from 'react';
import { PencilOutline } from '../../assets/icons';

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
        <div className="bg-white p-4 sm:p-6 mb-4 flex pr-4 ">
            {isEditing ? (
                <div className="flex flex-col items-start justify-between w-full h-full mb-2">
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="border p-2 mb-2 w-full"
                        placeholder="Titulo Profesional"
                    />
                    <textarea
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        className="border p-2 mb-2 w-full"
                        placeholder="Descripción del título profesional"
                        rows="4"
                    />
                    <button
                        onClick={handleSaveClick}
                        className="px-4 py-2 text-primary-500 font-semibold text-sm hover:text-primary-700"
                    >
                        Guardar
                    </button>
                </div>
            ) : (
                <div>
                    <div className="flex items-start justify-start mb-2">
                        <div>
                            <div className="flex flex-row justify-between">
                                <h6 className="text-base md:text-lg font-bold italic p-4">
                                    {title}
                                </h6>
                                <button
                                    onClick={handleEditClick}
                                    className="text-right sm:ml-6"
                                >
                                    <img
                                        src={PencilOutline}
                                        alt="Editar"
                                        className=" w-5 h-5 sm:w-6 sm:h-6 hover:opacity-50 transition-opacity duration-300 ease-in-out"
                                    />
                                </button>
                            </div>
                            <p className="text-sm md:text-lg text-tittle-400 text-justify mt-2 p-4">
                                {desc}
                            </p>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
};

export default PresentationCard;

