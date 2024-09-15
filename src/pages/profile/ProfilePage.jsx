import { useState } from "react";
import ExperienceCard from '../../components/profileComponents/ExperienceCard.jsx';
import PersonalDataForm from '../../components/profileComponents/PersonalDataForm.jsx';
import PresentationCard from '../../components/profileComponents/PresentationCard.jsx';
import { PencilOutline, Email, Phone } from '../../assets/icons/index.jsx';
import SidebarComponent from "../../components/Navbar/Sidebar.jsx";
import '../profile/ProfilePage.css';
import imgProfileFigma from '../../assets/images/foto_perfil_figma.jpeg'

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

    const handleUpdateProfile = (newData) => {
        setProfileData(newData);
        setShowPersonalDataForm(false);
    };

    const handleDeleteExperience = (id) => {
        if (window.confirm("¿Estás seguro de que deseas eliminar esta experiencia?")) {
            setExperiences(experiences.filter(exp => exp.id !== id));
        }
    };

    const handleAddExperience = () => {
        const newExperience = { id: Date.now(), role: "", organization: "", period: "", isNew: true };
        setExperiences([...experiences, newExperience]);
    };


    return (
        <div className="bg-primary-50 min-h-screen w-auto p-8" id="container">
            <SidebarComponent />
            <div className="flex justify-start" id="perfil-title">
                <img src="src/assets/images/title.png" alt="title" />
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                <div className="flex items-center">
                    <div className="flex items-center justify-center">
                        <div className="relative w-32 h-32 md:w-40 md:h-40 border-4 border-primary-500 rounded-full flex items-center justify-center overflow-hidden">
                            <img 
                                src={profileImage}
                                alt="Foto de perfil"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 left-0 w-full h-11 bg-white bg-opacity-70"></div>
                            <input
                                type="file"
                                accept="image/*"
                                id="profileImageInput"
                                style={{ display: "none" }}
                                onChange={handleImageChange}
                            />
                            <button
                                className="absolute bottom-2 rounded-full w-7 h-7 border-2 border-primary-500  text-primary-500 flex items-center justify-center text-xl font-bold hover:w-8 hover:h-8 transition-4m duration-300 ease-in-out  bg-transparent"
                                onClick={() => document.getElementById("profileImageInput").click()}
                            >
                                +
                            </button>
                        </div>
                    </div>

                    <div className="ml-6">
                        <h2 className="text-tittle-600 text-xl font-bold">{`${profileData.nombre} ${profileData.apellido}`}</h2>
                        <p className="text-tittle-400 text-gray-500">{profileData.pais}</p>
                        <div className="flex items-center text-tittle-400">
                            <img
                                src={Email}
                                alt="Email"
                                className="w-5 h-5 opacity-50"
                            />
                            <p className="flex items-center mr-4 text-gray-500">
                                {profileData.email}
                            </p>
                            <img
                                src={Phone}
                                alt="Telefono"
                                className="w-5 h-5 opacity-50"
                            />
                            <p className="flex items-center text-gray-500">
                                {profileData.telefono}
                            </p>
                        </div>
                    </div>
                    <div className="ml-auto">
                        <button
                            className="text-gray-500 hover:text-gray-700 mr-5"
                            onClick={handleEditPersonalDataClick}
                        >
                            <img
                                src={PencilOutline}
                                alt="Editar"
                                className="w-6 h-6  hover:opacity-50 transition-opacity duration-300 ease-in-out mr-1"
                            />
                        </button>
                    </div>
                </div>
            </div>

            {showPersonalDataForm && (
                <PersonalDataForm
                    initialData={profileData}
                    onClose={() => setShowPersonalDataForm(false)}
                    onUpdate={handleUpdateProfile}
                />
            )}

            <div className="bg-whitep-6 mb-10">
                <PresentationCard
                    profesionalTitle="Analista de Marketing"
                    descriptionTitle="Lorem ipsum dolor sit amet consectetur adipiscing elit diam ac torquent, nulla per
                    purus proin a arcu blandit facilisis mi, pretium risus volutpat sapien gravida pharetra nostra 
                    integer sociosqu. Rhoncus lacus curabitur lectus pulvinar nulla nam ornare nullam pellentesque 
                    netus odio quam integer vitae habitant, donec aenean porttitor platea laoreet nostra sodales taciti 
                    dignissim cras pretium velit morbi sapien. Auctor ligula luctus convallis potenti libero suscipit egestas 
                    vel congue rhoncus, class cras mollis sagittis nulla dictum sed iaculis sodales, netus id duis metus primis
                    fames sociosqu ultrices phasellus."
                />
            </div>

            <div className="bg-white p-6 mb-8">
                <div className="flex justify-between items-center mb-4 ml-5">
                    <h1 className="text-tittle-600 font-bold italic text-lg">Experiencia Profesional</h1>
                    <button
                        onClick={() => setIsEditingExperiences(!isEditingExperiences)}
                    >
                        <img
                            src={PencilOutline}
                            alt="Editar"
                            className="w-6 h-6  hover:opacity-50 transition-opacity duration-300 ease-in-out mr-5"
                        />
                    </button>
                </div>

                {experiences.map(exp => (
                    <ExperienceCard
                        key={exp.id}
                        id={exp.id}
                        profesionalRole={exp.role}
                        organization={exp.organization}
                        period={exp.period}
                        isEditing={isEditingExperiences}
                        onDelete={handleDeleteExperience}
                    />
                ))}

                {isEditingExperiences && (
                    <button
                        className="ml-8 text-primary-500 hover:text-primary-700 font-semibold"
                        onClick={handleAddExperience}
                    >
                        Añadir nueva experiencia
                    </button>
                )}

                {!showPersonalDataForm && !isEditingExperiences && (
                    <div className="bg-white p-6 mb-8 mt-4 ">
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