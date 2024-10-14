import { useState, useEffect, useContext } from "react";
import axios from "axios"; // axios importado
import ExperienceCard from '../../components/profileComponents/ExperienceCard.jsx';
import PersonalDataForm from '../../components/profileComponents/PersonalDataForm.jsx';
import PresentationCard from '../../components/profileComponents/PresentationCard.jsx';
import { PencilOutline, Email, Phone } from '../../assets/icons/index.jsx';
import SidebarComponent from "../../components/Navbar/Sidebar.jsx";
import imgProfileFigma from '../../assets/images/foto_perfil_figma.jpeg';
import imgTitleFigma from '../../assets/images/title.png'
import { ContextApp } from '../../context/ContextApp.jsx';

const ProfilePage = () => {

    const {userId} = useContext(ContextApp); 
    console.log('ID del usuario desde el contexto:', userId);
    const [showPersonalDataForm, setShowPersonalDataForm] = useState(false);
    const [profileImage, setProfileImage] = useState(imgProfileFigma);
    const [titleImage, setTitleImage] = useState(imgTitleFigma);
    const [profileData, setProfileData] = useState({
        nombre: "Sergio",
        apellido: "Muñoz García",
        email: "sergio23@gmail.com",
        telefono: "+56 9 53427586",
        pais: "Santiago de Chile",
    });
  
    const [experiences, setExperiences] = useState([
    { id: 1, role: 'Ingeniero de Sistemas', organization: 'Webhelp', period: 'Diciembre 2022 - Noviembre 2023' },
    { id: 2, role: 'Analista de Marketing', organization: 'Webhelp', period: 'Enero 2022 - Octubre 2022' }
    ])

    const [isEditingExperiences, setIsEditingExperiences] = useState(false);

    const ENDPOINT = import.meta.env.VITE_API_URL || 'http://localhost:3000';

    // obtener token 
    const token = sessionStorage.getItem('token');

    // obtener  datos de perfil desde back
    const fetchProfileData = async () => {
        try {
            const response = await axios.get(`${ENDPOINT}/user/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setProfileData(response.data);
        } catch (error) {
            console.error('Error al obtener el perfil:', error);
        }
    };

    // obtener experiencias desde back
    const fetchExperiences = async () => {
        try {
            const response = await axios.get(`${ENDPOINT}/api/experiencias`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setExperiences(response.data);
        } catch (error) {
            console.error('Error al obtener las experiencias:', error);
        }
    };

    // useEffect para obtener datos al cargar pag
    useEffect(() => {
        console.log('ID del usuario desde el contexto:', userId);
        const fetchAllData = async () => {
            if (userId) {
                await fetchProfileData(setProfileData);
                await fetchExperiences(setExperiences);
            }
        };

        fetchAllData();
    }, [userId]);

    const [errorMessage, setErrorMessage] = useState("");

    // actualiza datos de experiencia 
    const handleExperienceChange = (id, fieldName, fieldValue) => {
        setExperiences((prevExperiences) =>
            prevExperiences.map(exp =>
                exp.id === id ? { ...exp, [fieldName]: fieldValue } : exp
            )
        );
    };

    // abrir form de datos personales
    const handleEditPersonalDataClick = () => {
    setShowPersonalDataForm(true)
    };

  const handleImageChange = (e) => {
    const file = e.target.files[0]
        if (file) {
      const imageUrl = URL.createObjectURL(file)
            setProfileImage(imageUrl)
        }
  }


    // guardar los datos de cada experiencia
    const handleSaveExperience = async (id, updatedData) => {
        try {
            const response = await axios.put(`${ENDPOINT}/api/experiencias/${id}`, updatedData);
            const updatedExperiences = experiences.map(exp => exp.id === id ? response.data : exp);
            setExperiences(updatedExperiences);
        } catch (error) {
            console.error('Error al actualizar la experiencia:', error);
            alert('No se pudo actualizar la experiencia.');
        }
    };

    // dalete para eliminar experiencia
    const handleDeleteExperience = async (id) => {
        if (window.confirm("¿Estás seguro de que deseas eliminar esta experiencia?")) {
            try {
                await axios.delete(`${ENDPOINT}/api/experiencias/${id}`);
                setExperiences(experiences.filter(exp => exp.id !== id));
            } catch (error) {
                console.error('Error al eliminar la experiencia:', error);
                alert('No se pudo eliminar la experiencia.');
            }

        }
  }


    //actualiza perfil
    const handleUpdateProfile = async (newData) => {
        console.log('ID del usuario:', userId);
        try {
            const response = await axios.put(`${ENDPOINT}/user/${userId}`, newData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setProfileData(response.data);
            alert('Perfil actualizado con éxito.');
        } catch (error) {
            console.error('Error al actualizar el perfil:', error);
            alert('No se pudo actualizar el perfil.');
        }
    };

    //  añadir nueva experiencia
    const handleAddExperience = async () => {
        const newExperience = { role: "", organization: "", period: "" };
        try {
            const response = await axios.post(`${ENDPOINT}/api/experiencias`, newExperience);
            setExperiences([...experiences, response.data]);
        } catch (error) {
            console.error('Error al añadir la experiencia:', error);
            alert('No se pudo añadir la experiencia.');
        }
    };

    const toggleEditExperiences = () => {
        setIsEditingExperiences(!isEditingExperiences);
    };

    const handleSaveAll = () => {
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

   

    const handleAddExperience = () => {
    const lastExperience = experiences[experiences.length - 1]

        if (lastExperience && (lastExperience.role === '' || lastExperience.organization === '' || lastExperience.period === '')) {
      setErrorMessage('Por favor, completa todos los campos antes de agregar una nueva experiencia.')
            return;
    }

    const newExperience = { id: Date.now(), role: '', organization: '', period: '', isNew: true }
        setExperiences([...experiences, newExperience])
        setErrorMessage('') // Limpia el mensaje de error
    };

  const toggleEditExperiences = () => {
    const lastExperience = experiences[experiences.length - 1]
        
        // Validar si hay algún campo vacío en la última experiencia
        if (lastExperience && (lastExperience.role === '' || lastExperience.organization === '' || lastExperience.period === '')) {
      alert('No puedes dejar campos vacíos. Completa o elimina la experiencia actual.')
            return; // No permitir que se cierre el modo de edición
    }

    // Cambiar el estado de edición si todo está correcto
    setIsEditingExperiences(!isEditingExperiences)
    };
  return (
        <div className=' min-h-screen w-auto lg:pr-36 lg:pl-72 sm:pr-12 sm:pl-60 pt-12 pb-12 pr-4 pl-32'>
                <SidebarComponent />

                <div className='flex justify-start pb-12 w-28 sm:w-40 md:w-52' id='perfil-title'>
                    <img src='src/assets/images/title.png' alt='title' />
                </div>

            <div className='bg-white shadow-md rounded-lg p-6 mb-8'>
                    <div className='flex items-center justify-center'>
                        <div className='relative w-32 h-32 md:w-40 md:h-40 border-4 border-primary-500 rounded-full flex items-center justify-center  overflow-hidden'>
                          <img
                              src={profileImage}
                              alt='Foto de perfil'
                              className='absolute inset-0 w-full h-full object-cover'
                            />
                          <div className='absolute bottom-0 left-0 w-full h-11 bg-white bg-opacity-70'></div>
                          <input
                              type='file'
                              accept='image/*'
                              id='profileImageInput'
                              style={{ display: 'none' }}
                              onChange={handleImageChange}
                            />
                          <button
                              className='absolute bottom-2 rounded-full w-7 h-7 border-2 border-primary-500  text-primary-500 flex items-center justify-center text-xl font-bold hover:w-8 hover:h-8 transition-4m duration-300 ease-in-out  bg-transparent'
                              onClick={() => document.getElementById('profileImageInput').click()}
                            >
                              +
                            </button>
                        </div>
                    

                        {/* Información del perfil */}
                        <div className='mt-4 text-center md:text-left md:ml-6'>
                      <h2 className='text-lg md:text-xl font-bold text-tittle-600 md:pt-2 md:pb-2'>{`${profileData.nombre} ${profileData.apellido}`}</h2>
                      <p className='text-sm text-base text-gray-500 md:text-tittle-400'>{profileData.pais}</p>
                        <div className='flex flex-col md:flex-row items-center text-sm text-gray-500 mt-2'>
                            <div className='flex items-center mb-2'>
                              <img
                                  src={Email}
                                  alt='Email'
                                  className='w-4 h-4 sm:w-5 sm:h-5 opacity-50'
                                />
                              <p className='m-2'>{profileData.email}</p>
                            </div>
                            <div className='flex items-center '>
                              <img
                                  src={Phone}
                                  alt='Telefono'
                                  className='w-4 h-4 sm:w-5 sm:h-5 opacity-50'
                                />
                              <p className='ml-2'>{profileData.telefono}</p>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className='md:flex md:justify-end'>
                    <button
                        className='flex text-gray-500 hover:text-gray-700'
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
                </div>
                {Array.isArray(experiences) && experiences.map(exp => (
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
                <div>
                    <div className="flex justify-end mt-6">
                        <button
                            className="bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded"
                            onClick={handleSaveAll}
                        >
                            Guardar todo
                        </button>
                    </div>
                )}
                
                    <div className='bg-whitep-6 mb-10  shadow-xl rounded-lg'>
                    <PresentationCard
                        profesionalTitle='Analista de Marketing'
                        descriptionTitle='Lorem ipsum dolor sit amet consectetur adipiscing elit diam ac torquent, nulla per
                            purus proin a arcu blandit facilisis mi, pretium risus volutpat sapien gravida pharetra nostra 
                            integer sociosqu. Rhoncus lacus curabitur lectus pulvinar nulla nam ornare nullam pellentesque 
                            netus odio quam integer vitae habitant, donec aenean porttitor platea laoreet nostra sodales taciti 
                            dignissim cras pretium velit morbi sapien. Auctor ligula luctus convallis potenti libero suscipit egestas 
                            vel congue rhoncus, class cras mollis sagittis nulla dictum sed iaculis sodales, netus id duis metus primis
                            fames sociosqu ultrices phasellus.'
                        />
                    </div>
                
          <div className='bg-white p-6 shadow-xl rounded-lg'>
              <div className='flex flex-row justify-between'>
                  <h1 className='text-tittle-600 font-bold italic text-lg'>Experiencia Profesional</h1>
                  <button
                      onClick={toggleEditExperiences}
                    >
                      <img
                          src={PencilOutline}
                          alt='Editar'
                          className='w-5 h-5 sm:w-6 sm:h-6 hover:opacity-50 transition-opacity duration-300 ease-in-out'
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
                      className='ml-8 text-primary-500 hover:text-primary-700 font-semibold'
                      onClick={handleAddExperience}
                    >
                      Añadir nueva experiencia
                    </button>
                )}

              {!showPersonalDataForm && !isEditingExperiences && (
                  <div className='bg-white p-4 sm:p-6 mb-2 mt-2 '>
                      <div className='flex items-start justify-between mb-2'>
                          <table className='w-full'>
                              <thead>
                                  <tr>
                                      <th className='text-tittle-500 font-bold text-left flex items-center'>
                                          <div className='flex items-center justify-center text-2xl w-4 h-4 bg-primary-200 rounded-full mr-2'>
                                              <div className='text-black mb-2 mt-2'>•</div>
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



