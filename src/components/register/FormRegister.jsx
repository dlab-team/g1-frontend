import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ArrowBackButton from "../_common/ArrowBackButton";

export const FormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const ENDPOINT = import.meta.env.VITE_API_URL;

  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  const onSubmit = async (event) => {
    if (!event.email.trim() || !event.password.trim()) {
      return window.alert("Email y contraseña obligatorios.");
    }

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(event.email)) {
      return window.alert("El formato del email no es correcto!");
    }

    try {
      const response = await fetch(`${ENDPOINT}/usuario/newUsuario`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(event),
      });
      console.log(response);

      if (!response.ok) {
        const errorData = await response.json();
        const message =
          errorData.message || "Ocurrió un error con la solicitud.";
        return window.alert(`${message} 🙁.`);
      } else {
        handleLoginRedirect();
      }
    } catch (error) {
      console.error(error);
      window.alert(
        "No se pudo conectar con el servidor. Por favor, intenta más tarde."
      );
    }
  };

  return (
    <div className="w-full flex justify-center mt-10 lg:mt-0">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-gray-100 rounded-lg w-[287px] p-4 tablet:w-[730px] desktop:w-[1084px] shadow-lg"
        style={{
          backgroundImage:
            'url("/src/assets/images/bg2.png"), linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3))',
          backgroundBlendMode: "overlay",
        }}
      >
        {/*componente de boton flecha < goback */}
        <ArrowBackButton />

        <h2 className="font-workSans italic text-2xl font-semibold mb-4 text-center">
          Te damos la Bienvenida!
        </h2>
        <p className="text-center mb-6">
          Regístrate e inicia tu transformación laboral
        </p>

        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block font-medium">
              Nombre *
            </label>
            <input
              type="text"
              name="firstName"
              {...register("firstName", { required: "Nombre es requerido" })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Nombres"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="lastName" className="block font-medium">
              Apellido *
            </label>
            <input
              type="text"
              name="lastName"
              {...register("lastName", { required: "Apellido es requerido" })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Apellidos"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block font-medium">
              Correo electrónico *
            </label>
            <input
              type="email"
              name="email"
              {...register("email", {
                required: "Correo electrónico es requerido",
              })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="ejemplo@gmail.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="country" className="block font-medium">
              País
            </label>
            <select
              name="country"
              {...register("country", { required: "País es requerido" })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">País</option>
              <option value="México">México</option>
              <option value="Argentina">Argentina</option>
              <option value="Venezuela">Venezuela</option>
              <option value="Chile">Chile</option>
              <option value="Perú">Perú</option>
              <option value="Uruguay">Uruguay</option>
              <option value="Bolivia">Bolivia</option>
              <option value="España">España</option>
              <option value="Otro">Otro</option>
            </select>
            {errors.country && (
              <p className="text-red-500 text-sm">{errors.country.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="education" className="block font-medium">
              Educación *
            </label>
            <select
              name="education"
              {...register("education", { required: "Educación es requerido" })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Educación</option>
              <option value="Desarrollador Fullstack">
                Desarrollador Fullstack
              </option>
              <option value="Desarrollador Frontend">
                Desarrollador Frontend
              </option>
              <option value="Desarrollador Backend">
                Desarrollador Backend
              </option>
              <option value="DevOps">DevOps</option>
              <option value="Ingeniero Informático">
                Ingeniero Informático
              </option>
              <option value="Ingeniero en Computación">
                Ingeniero en Computación
              </option>
              <option value="Analista de Sistemas">Analista de Sistemas</option>
              <option value="Ingeniero de Sistemas">
                Ingeniero de Sistemas
              </option>
              <option value="Otro">Otro</option>
            </select>
            {errors.education && (
              <p className="text-red-500 text-sm">{errors.education.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="jobTitle" className="block font-medium">
              Cargo *
            </label>
            <select
              name="jobTitle"
              {...register("jobTitle", { required: "Cargo es requerido" })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Cargo</option>
              <option value="Desarrollador">Desarrollador</option>
              <option value="Diseñador">Diseñador</option>
              <option value="Analista">Analista</option>
              <option value="Otro">Otro</option>
            </select>
            {errors.jobTitle && (
              <p className="text-red-500 text-sm">{errors.jobTitle.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="experience" className="block font-medium">
              Experiencia *
            </label>
            <select
              name="jobTitle"
              {...register("experience", {
                required: "Experiencia es requerido",
              })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Experiencia</option>
              <option value="Sin Experiencia">sin experiencia</option>
              <option value="Trainee">1 año</option>
              <option value="Semi-Senior">2 a 4 años</option>
              <option value="Senior">5 o más</option>
            </select>
            {errors.experience && (
              <p className="text-red-500 text-sm">
                {errors.experience.message}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="password" className="block font-medium">
              Crear Contraseña *
            </label>
            <input
              type="password"
              name="password"
              {...register("password", {
                required: "Contraseña es requerida",
                minLength: { value: 8, message: "Mínimo 8 caracteres" },
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/,
                  message:
                    "Debe contener al menos una letra mayúscula, una minúscula y un número",
                },
              })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Crea una contraseña"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-[#729e2e] text-white py-2 px-4 rounded-md hover:bg-[#89b049] transition duration-300"
          >
            Crear cuenta
          </button>
        </div>

        <div className="mt-4 text-center">
          <p>
            ¿Ya tienes cuenta?{" "}
            <button onClick={handleLoginRedirect}>Inicia Sesión </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default FormRegister;
