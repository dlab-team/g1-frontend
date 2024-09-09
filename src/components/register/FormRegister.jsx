import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import ArrowBackButton from '../_common/ArrowBackButton'

export const FormRegister = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const navigate = useNavigate()

  const handleLoginRedirect = () => {
    navigate('/login')
  }

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className='w-full flex justify-center mt-10 lg:mt-0'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='bg-gray-100 rounded-lg w-[287px] p-4 tablet:w-[730px] desktop:w-[1084px] shadow-lg'
        style={{
          backgroundImage:
            'url("/src/assets/images/bg2.png"), linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3))',
          backgroundBlendMode: 'overlay'
        }}
      >
        {/*componente de boton flecha < goback */}
        <ArrowBackButton/>

        <h2 className='font-workSans italic text-2xl font-semibold mb-4 text-center'>
          Te damos la Bienvenida!
        </h2>
        <p className='text-center mb-6'>
          Regístrate e inicia tu transformación laboral
        </p>

        <div className='grid grid-cols-1 tablet:grid-cols-2 gap-4'>
          <div>
            <label htmlFor='firstName' className='block font-medium'>
              Nombre *
            </label>
            <input
              type='text'
              name='firstName'
              {...register('firstName', { required: 'Nombre es requerido' })}
              className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
              placeholder='Nombres'
            />
            {errors.firstName && <p className='text-red-500 text-sm'>{errors.firstName.message}</p>}
          </div>
          <div>
            <label htmlFor='lastName' className='block font-medium'>
              Apellido *
            </label>
            <input
              type='text'
              name='lastName'
              {...register('lastName', { required: 'Apellido es requerido' })}
              className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
              placeholder='Apellidos'
            />
            {errors.lastName && <p className='text-red-500 text-sm'>{errors.lastName.message}</p>}
          </div>
          <div>
            <label htmlFor='email' className='block font-medium'>
              Correo electrónico *
            </label>
            <input
              type='email'
              name='email'
              {...register('email', { required: 'Correo electrónico es requerido' })}
              className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
              placeholder='ejemplo@gmail.com'
            />
            {errors.email && <p className='text-red-500 text-sm'>{errors.email.message}</p>}
          </div>
          <div>
            <label htmlFor='country' className='block font-medium'>
              País *
            </label>
            <select
              name='country'
              {...register('country', { required: 'País es requerido' })}
              className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
            >
              <option value=''>País</option>
              <option value='mx'>México</option>
              <option value='ar'>Argentina</option>
              <option value='ven'>Venezuela</option>
              <option value='cl'>Chile</option>
              <option value=''>Otro</option>
            </select>
            {errors.country && <p className='text-red-500 text-sm'>{errors.country.message}</p>}
          </div>
          <div>
            <label htmlFor='education' className='block font-medium'>
              Educación *
            </label>
            <input
              type='text'
              name='education'
              {...register('education', { required: 'Educación es requerida' })}
              className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
              placeholder='Educación'
            />
            {errors.education && <p className='text-red-500 text-sm'>{errors.education.message}</p>}
          </div>
          <div>
            <label htmlFor='jobTitle' className='block font-medium'>
              Cargo *
            </label>
            <select
              name='jobTitle'
              {...register('jobTitle', { required: 'Cargo es requerido' })}
              className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
            >
              <option value=''>Cargo</option>
              <option value='manager'>Gerente</option>
              <option value='Ingeniero'>Ing. de Sistema</option>
              <option value='developer'>Desarrollador Fullstack</option>
              <option value='developer'>Desarrollador Frontend</option>
              <option value='developer'>Desarrollador Backend</option>
              <option value='other'>Otro</option>
            </select>
            {errors.jobTitle && <p className='text-red-500 text-sm'>{errors.jobTitle.message}</p>}
          </div>
          <div>
            <label htmlFor='experience' className='block font-medium'>
              Experiencia *
            </label>
            <input
              type='text'
              name='experience'
              {...register('experience', { required: 'Experiencia es requerida' })}
              className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
              placeholder='Cargo'
            />
            {errors.experience && <p className='text-red-500 text-sm'>{errors.experience.message}</p>}
          </div>
          <div>
            <label htmlFor='password' className='block font-medium'>
              Crear Contraseña *
            </label>
            <input
              type='password'
              name='password'
              {...register('password', { required: 'Contraseña es requerida', minLength: { value: 8, message: 'Mínimo 8 caracteres' } })}
              className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
              placeholder='Crea una contraseña'
            />
            {errors.password && <p className='text-red-500 text-sm'>{errors.password.message}</p>}
          </div>
        </div>

        <div className='mt-6'>
          <button
            type='submit'
            className='w-full bg-[#729e2e] text-white py-2 px-4 rounded-md hover:bg-[#89b049] transition duration-300'
          >
            Crear cuenta
          </button>
        </div>

        <div className='mt-4 text-center'>
          <p>
            ¿Ya tienes cuenta?{' '}
            <button onClick={handleLoginRedirect}>Inicia Sesión </button>
          </p>
        </div>
      </form>
    </div>
  )
}
