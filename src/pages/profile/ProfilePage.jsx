import { LuPencil } from "react-icons/lu";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import ExperienceCard from '../../components/profileComponents/ExperienceCard.jsx';
import PersonalDataForm from '../../components/profileComponents/PersonalDataForm.jsx';
import PresentationCard from '../../components/profileComponents/PresentationCard.jsx';
import '../profile/ProfilePage.css';
import { useState } from "react";

const ProfilePage = () => {
    const [showPersonalDataForm, setShowPersonalDataForm] = useState(false);
    const [profileImage, setProfileImage] = useState("src/assets/images/foto_perfil_figma.jpeg");

    // Estado para los datos del perfil
    const [profileData, setProfileData] = useState({
        nombre: "Sergio",
        apellido: "Muñoz García",
        email: "sergio23@gmail.com",
        telefono: "+56 9 53427586",
        pais: "Santiago de Chile",
    });

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

    // Función para actualizar los datos del perfil
    const handleUpdateProfile = (newData) => {
        setProfileData(newData);
        setShowPersonalDataForm(false); // Cierra el formulario después de guardar
    };

    return (
        <div className="bg-primary-50 min-h-screen w-auto p-8" id="container">
            <div className="flex justify-start" id="perfil-title">
                <img src="src/assets/images/title.png" alt="title" />
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                <div className="flex items-center">
                    <div className="relative w-40 h-40 border-4 border-primary-500 rounded-full flex items-center justify-center overflow-hidden">
                        <img
                            src={profileImage}
                            alt="Foto de perfil"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 w-full h-10 bg-white"></div>
                        <input
                            type="file"
                            accept="image/*"
                            id="profileImageInput"
                            style={{ display: "none" }}
                            onChange={handleImageChange}
                        />
                        <button
                            className="absolute bottom-2 rounded-full w-7 h-7 border-2 border-primary-500 bg-white text-primary-500 flex items-center justify-center text-xl font-bold"
                            onClick={() => document.getElementById("profileImageInput").click()}
                        >
                            +
                        </button>
                    </div>

                    <div className="ml-6">
                        <h2 className="text-tittle-600 text-xl font-bold">{`${profileData.nombre} ${profileData.apellido}`}</h2>
                        <p className="text-tittle-400 text-gray-500">{profileData.pais}</p>
                        <div className="flex items-center text-tittle-400">
                            <p className="flex items-center mr-4 text-gray-500">
                                <MdOutlineEmail className="mr-2" />
                                {profileData.email}
                            </p>
                            <p className="flex items-center text-gray-500">
                                <MdOutlinePhone className="mr-2" />
                                {profileData.telefono}
                            </p>
                        </div>
                    </div>
                    <div className="ml-auto">
                        <button
                            className="text-gray-500 hover:text-gray-700 mr-5"
                            onClick={handleEditPersonalDataClick}
                        >
                            <LuPencil />
                        </button>
                    </div>
                </div>
            </div>

            {showPersonalDataForm && (
                <PersonalDataForm
                    initialData={profileData} // Pasa los datos actuales del perfil
                    onClose={() => setShowPersonalDataForm(false)}
                    onUpdate={handleUpdateProfile} // Pasa la función de actualización
                />
            )}

            <div className="bg-white shadow-md rounded-lg p-6">
                <div className="space-y-4">
                    <PresentationCard
                        profesionalTitle="Analista de Marketing"
                        descriptionTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                    />
                </div>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                <div className="space-y-4">
                    <h1 className="text-tittle-600 font-bold text-left flex items-center mb-4 italic ml-5 text-lg">Experiencia Profesional</h1>
                    <ExperienceCard
                        profesionalRole="Ingeniero de Sistemas"
                        organization="Webhelp"
                        period="Diciembre 2022 - Noviembre 2023"
                    />
                    <ExperienceCard
                        profesionalRole="Analista de Marketing"
                        organization="Webhelp"
                        period="Enero 2022 - Octubre 2022"
                    />
                    <ExperienceCard
                        profesionalRole="Añadir nueva experiencia"
                    />
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
