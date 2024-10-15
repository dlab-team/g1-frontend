import { useForm } from "react-hook-form";
import { useState } from "react";
import {ojoOculto, ojoVisible} from '../../assets/icons/index'
import Modal from '../forgotPasword/ModalNewPassword'



export const NewPassword = () => {
  const { register, handleSubmit, watch,reset, formState: { errors } } = useForm();
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para la modal

  const onSubmit = (data) => {
    //resetea los inputs
    reset()
    setIsModalOpen(true);

    console.log('Nueva contraseña:', data.password1);
  };




  const password1 = watch("password1");

  return (
    <div className="w-full h-screen flex justify-center items-center mt-10 p-5">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <h2 className="font-workSans text-2xl italic">Ingresa tu nueva contraseña</h2>
        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="password1">Nueva Contraseña *</label>
            <div className="relative">
              <input
                type={showPassword1 ? 'text' : 'password'}
                id="password1"
                {...register("password1", {
                  required: "La contraseña es obligatoria",
                  minLength: {
                    value: 8,
                    message: "La contraseña debe tener al menos 8 caracteres"
                  },
                  validate: {
                    hasUpperCase: value => /[A-Z]/.test(value) || "La contraseña debe contener al menos una mayúscula",
                    hasSpecialChar: value => /[!@#$%^&*(),.?":{}|<>]/.test(value) || "La contraseña debe contener al menos un carácter especial",
                  }
                })}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm`}
              />
              {errors.password1 && <p className="text-red-500 text-sm">{errors.password1.message}</p>}
              <button
                type="button"
                onClick={() => setShowPassword1(!showPassword1)}
                className="absolute right-3 top-2"
                aria-label={showPassword1 ? "Ocultar contraseña" : "Mostrar contraseña"}
              >
                {showPassword1 ? <img className="w-[1.3rem]" src={ojoOculto}/> : <img className="w-[1.3rem]" src={ojoVisible}/>}
              </button>
            </div>
          </div>
          <div>
            <label htmlFor="password2">Confirmar nueva contraseña *</label>
            <div className="relative">
              <input
                type={showPassword2 ? 'text' : 'password'}
                id="password2"
                {...register("password2", {
                  required: "Debes confirmar la contraseña",
                  validate: value => value === password1 || "Las contraseñas no coinciden"
                })}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm`}
              />
              {errors.password2 && <p className="text-red-500 text-sm">{errors.password2.message}</p>}
              <button
                type="button"
                onClick={() => setShowPassword2(!showPassword2)}
                className="absolute right-3 top-2"
                aria-label={showPassword2 ? "Ocultar contraseña" : "Mostrar contraseña"}
              >
                {showPassword2 ?  <img className="w-[1.3rem]" src={ojoOculto}/> : <img className="w-[1.3rem]" src={ojoVisible}/>}
              </button>
            </div>
          </div>
        </div>
        <button type="submit" className="w-full font-workSans font-semibold bg-primary-500 text-white py-2 rounded-full hover:bg-primary-700">
          Guardar
        </button>
      </form>

            {/* Modal */}
        {isModalOpen && (
        <Modal 
          message="¡Contraseña guardada correctamente!" 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </div>
  );
};
