import { LuPencil } from "react-icons/lu";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import ExperienceCard from '../../components/profileComponents/ExperienceCard.jsx';
import AddExperienceForm from '../../components/profileComponents/AddExperienceForm.jsx';
import PersonalDataForm from '../../components/profileComponents/PersonalDataForm.jsx';
import '../profile/ProfilePage.css'; 
import { useState } from "react";


const ProfilePage = () => {
    const [showAddForm, setShowAddForm] = useState(false);
    const [showPersonalDataForm, setShowPersonalDataForm] = useState(false);
    const [profileImage, setProfileImage] = useState("src/assets/images/foto_perfil_figma.jpeg");

    const handleAddExperienceClick = () => {
        setShowAddForm(!showAddForm); 
    };

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

    const initialData = {
        nombre: "Sergio",
        apellido: "Muñoz García",
        email: "sergio23@gmail.com",
        telefono: "+56 9 53427586",
        pais: "Chile",
    };

    return (
        <div className=" bg-primary-50 min-h-screen w-auto p-8" id="container">
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
                        <h2 className="text-tittle-600 text-xl font-bold">Sergio Muñoz García</h2>
                        <p className="text-tittle-400 text-gray-500">Santiago de Chile</p>
                        <div className="flex items-center text-tittle-400 ">
                            <p className="flex items-center mr-4 text-gray-500"><MdOutlineEmail className="mr-2" />sergio23@gmail.com</p>
                            <p className="flex items-center text-gray-500"><MdOutlinePhone className="mr-2" />+56 9 53427586</p>
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
                    initialData={initialData}
                    onClose={() => setShowPersonalDataForm(false)}
                />
            )}

            <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                <div className="space-y-4">
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

                    <div>
                        <div className="flex items-start justify-between mb-2"></div>
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th className="text-tittle-500 font-bold text-left flex items-center ml-5">
                                        <div className="flex items-center justify-center text-2xl w-4 h-4 bg-primary-200 rounded-full mr-2">
                                            <div className="text-black mb-2">•</div>
                                        </div>
                                        Añadir nueva experiencia
                                    </th>
                                    <th className="text-right">
                                        <button
                                            onClick={handleAddExperienceClick}
                                            className="text-gray-500 hover:text-gray-700 mr-5"
                                        >
                                            <LuPencil />
                                        </button>
                                    </th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>

                {showAddForm && <AddExperienceForm />}
            </div>
        </div>
    );
};

export default ProfilePage;
