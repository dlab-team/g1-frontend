import React, { useState } from 'react';
import ExperienceCard from '../components/profileComponents/ExperienceCard.jsx';
import PersonalDataForm from '../components/profileComponents/PersonalDataForm.jsx';
import PresentationCard from '../components/profileComponents/PresentationCard.jsx';
import { PencilOutline, Email, Phone } from '../assets/icons/index.jsx';
import SidebarComponent from "../components/Navbar/Sidebar.jsx";
import imgProfileFigma from '../assets/images/foto_perfil_figma.jpeg';

const ProfilePage = () => {
    const [showPersonalDataForm, setShowPersonalDataForm] = useState(false);
    const [profileImage, setProfileImage] = useState(imgProfileFigma);

    const [profileData, setProfileData] = useState({
        nombre: "Sergio",
        apellido: "Muñoz García",
        email: "sergio23@gmail.com",
        telefono: "+56 9 53427586",
        pais: "Santiago de Chile",
    });

    const [isEditingExperiences, setIsEditingExperiences] = useState(false);
    const [experiences, setExperiences] = useState([
        { id: 1, role: "Ingeniero de Sistemas", organization: "Webhelp", period: "Diciembre 2022 - Noviembre 2023" },
        { id: 2, role: "Analista de Marketing", organization: "Webhelp", period: "Enero 2022 - Octubre 2022" },
    ]);

    const [errorMessage, setErrorMessage] = useState("");

    // Función que actualiza los datos de cada experiencia en tiempo real
    const handleExperienceChange = (id, fieldName, fieldValue) => {
        setExperiences((prevExperiences) =>
            prevExperiences.map(exp =>
                exp.id === id ? { ...exp, [fieldName]: fieldValue } : exp
            )
        );
    };

    // Función para abrir el formulario de edición de datos personales
    const handleEditPersonalDataClick = () => {
        setShowPersonalDataForm(true);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setProfileImage(imageUrl);
        }
    };

    const handleUpdateProfile = async (newData) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/update-profile`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
                },
                body: JSON.stringify(newData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Error al actualizar el perfil.');
            }

            const updatedProfile = await response.json();
            setProfileData(updatedProfile);
            setShowPersonalDataForm(false);
            alert('Perfil actualizado con éxito.');
        } catch (error) {
            console.error('Error al actualizar el perfil:', error);
            alert('No se pudo actualizar el perfil. Por favor, intenta de nuevo.');
        }
    };

    // Función para guardar los datos de cada tarjeta de experiencia
    const handleSaveExperience = (id, updatedData) => {
        const updatedExperiences = experiences.map(exp =>
            exp.id === id ? { ...exp, ...updatedData } : exp
        );
        setExperiences(updatedExperiences);
    };


    // Función para eliminar una experiencia
    const handleDeleteExperience = (id) => {
        if (window.confirm("¿Estás seguro de que deseas eliminar esta experiencia?")) {
            setExperiences(experiences.filter(exp => exp.id !== id));
        }
    };


    // Función para añadir una nueva experiencia
    const handleAddExperience = () => {
        const lastExperience = experiences[experiences.length - 1];

        if (lastExperience && (lastExperience.role === "" || lastExperience.organization === "" || lastExperience.period === "")) {
            setErrorMessage("Por favor, completa todos los campos antes de agregar una nueva experiencia.");
            return;
        }

        const newExperience = { id: Date.now(), role: "", organization: "", period: "", isNew: true };
        setExperiences([...experiences, newExperience]);
        setErrorMessage(""); // Limpia el mensaje de error
    };

    // Función para alternar entre modo de edición y no edición
    const toggleEditExperiences = () => {
        setIsEditingExperiences(!isEditingExperiences);
    };

    const handleSaveAll = () => {
        // Verificar si alguna experiencia tiene campos vacíos
        const incompleteExperience = experiences.find(exp => {
            console.log('Role:', exp.role);
            console.log('Organization:', exp.organization);
            console.log('Period:', exp.period);
            return !exp.role.trim() || !exp.organization.trim() || !exp.period.trim();
        });

        if (incompleteExperience) {
            alert("Por favor, completa todos los campos en las experiencias antes de guardar.");
            console.log('Experiencia incompleta encontrada:', incompleteExperience);
            return; // No permitir que se guarden los cambios hasta que se completen los campos
        }

        // Si todos los campos están completos, guardar los cambios
        setIsEditingExperiences(false);
        alert("Cambios guardados.");
    };

    return (
        <div className="min-h-screen w-auto lg:pr-36 lg:pl-72 sm:pr-12 sm:pl-60 pt-12 pb-12 pr-4 pl-32">
            <SidebarComponent />
    
            <div className="flex justify-start pb-12 w-28 sm:w-40 md:w-52" id="perfil-title">
                <img src="src/assets/images/title.png" alt="title" />
            </div>

            {/* Información del perfil */}
            <div className="bg-white shadow-xl rounded-lg p-4 sm:p-6 mb-6 sm:mb-8 flex md:flex-row md:justify-start flex justify-between w-full">
                <div className="flex flex-col items-center md:flex-row w-full">
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 border-4 border-primary-500 rounded-full overflow-hidden">
                        <img src={profileImage} alt="Foto de perfil" className="absolute inset-0 w-full h-full object-cover" />
                        <div className="absolute bottom-0 left-0 right-0 h-7 sm:h-10 md:h-11 bg-white opacity-70"></div>
                        <input
                            type="file"
                            accept="image/*"
                            id="profileImageInput"
                            style={{ display: "none" }}
                            onChange={handleImageChange}
                        />
                        <button
                            className="absolute bottom-2 left-1/2 transform -translate-x-1/2 rounded-full w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 border-2 border-primary-500 bg-white text-primary-500 flex items-center justify-center font-bold"
                            onClick={() => document.getElementById("profileImageInput").click()}
                        >
                            +
                        </button>
                    </div>
                    <div className="mt-4 text-center md:text-left md:ml-6">
                        <h2 className="text-lg md:text-xl font-bold text-tittle-600">{`${profileData.nombre} ${profileData.apellido}`}</h2>
                        <p className="text-sm text-base text-gray-500 md:text-tittle-400">{profileData.pais}</p>
                        <div className="flex flex-col md:flex-row items-center text-sm text-gray-500 mt-2">
                            <div className="flex items-center mb-2">
                                <img src={Email} alt="Email" className="w-4 h-4 sm:w-5 sm:h-5 opacity-50" />
                                <p className="m-2">{profileData.email}</p>
                            </div>
                            <div className="flex items-center">
                                <img src={Phone} alt="Telefono" className="w-4 h-4 sm:w-5 sm:h-5 opacity-50" />
                                <p className="ml-2">{profileData.telefono}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:flex md:justify-end">
                    <button
                        className="flex text-gray-500 hover:text-gray-700"
                        onClick={handleEditPersonalDataClick}
                    >
                        <img
                            src={PencilOutline}
                            alt="Editar"
                            className="w-5 h-5 sm:w-6 sm:h-6 hover:opacity-50 transition-opacity duration-300 ease-in-out"
                        />
                    </button>
                </div>
            </div>

            {showPersonalDataForm && (
                <PersonalDataForm
                    initialData={profileData}
                    onClose={() => setShowPersonalDataForm(false)}
                    onUpdate={handleUpdateProfile}
                />
            )}

            <div className="bg-white shadow-xl rounded-lg p-6 mb-10">
                <PresentationCard
                    profesionalTitle="Analista de Marketing"
                    descriptionTitle="Lorem ipsum dolor sit amet consectetur adipiscing elit sodales, 
                    habitasse velit molestie ac tincidunt est donec. Sapien class cum arcu sodales in 
                    sollicitudin lacus praesent, primis maecenas aptent sociosqu nec torquent suspendisse 
                    taciti ad, aliquam dictumst morbi lacinia lectus facilisi condimentum. Ligula semper 
                    feugiat ut inceptos rutrum posuere nascetur molestie, a ornare pretium sed ac hac magna 
                    eleifend, vehicula consequat integer egestas lectus vitae venenatis."
                />
            </div>

            {/* Tarjetas de experiencia */}
            <div className="bg-white p-6 shadow-xl rounded-lg">
                <div className="flex flex-row justify-between">
                    <h1 className="text-tittle-600 font-bold italic text-lg">Experiencia Profesional</h1>
                    {/* Solo mostrar el botón del lápiz si no se está en modo de edición */}
                    {!isEditingExperiences && (
                        <button onClick={() => setIsEditingExperiences(!isEditingExperiences)}>
                            <img
                                src={PencilOutline}
                                alt="Editar"
                                className="w-5 h-5 sm:w-6 sm:h-6 hover:opacity-50 transition-opacity duration-300 ease-in-out"
                            />
                        </button>
                    )}
                </div>

                {experiences.map((exp) => (
                    <ExperienceCard
                        key={exp.id}
                        id={exp.id}
                        profesionalRole={exp.role}
                        organization={exp.organization}
                        period={exp.period}
                        isEditing={isEditingExperiences}
                        onDelete={handleDeleteExperience}
                        onChange={handleExperienceChange}  // Pasa la función para manejar los cambios en tiempo real
                    />
                ))}

                {isEditingExperiences && (
                    <div className="flex justify-start mt-4">
                        <button
                            className="ml-8 text-primary-500 hover:text-primary-700 font-semibold"
                            onClick={handleAddExperience}
                        >
                            Añadir nueva experiencia
                        </button>
                    </div>
                )}

                {isEditingExperiences && (
                    <div className="flex justify-end mt-6">
                        <button
                            className="bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded"
                            onClick={handleSaveAll}
                        >
                            Guardar todo
                        </button>
                    </div>
                )}

                {!showPersonalDataForm && !isEditingExperiences && (
                    <div className="bg-white p-4 sm:p-6 mb-2 mt-2 ">
                        <div className="flex items-start justify-between mb-2">
                            <table className="w-full">
                                <thead>
                                    <tr>
                                        <th className="text-tittle-500 font-bold text-left flex items-center">
                                            <div className="flex items-center justify-center text-2xl w-4 h-4 bg-primary-200 rounded-full mr-2">
                                                <div className="text-black mb-2 mt-2">•</div>
                                            </div>
                                            Añadir nueva experiencia
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProfilePage;
