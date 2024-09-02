import { useState } from 'react'

export const FormRegister = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    education: '',
    jobTitle: '',
    experience: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className='w-full max-w-xl mt-10 lg:mt-0'>
      <form
        onSubmit={handleSubmit}
        className='bg-gray-100 rounded-lg w-full p-4 max-w-lg lg:max-w-screen-sm shadow-lg'
        style={{
          backgroundImage:
            'url("/src/assets/images/bg2.png"), linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3))',
          backgroundBlendMode: 'overlay'
        }}
      >
        <h2 className='text-2xl font-bold mb-4 text-center'>
          Te damos la Bienvenida!
        </h2>
        <p className='text-center mb-6'>
          Regístrate e inicia tu transformación laboral
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <label htmlFor='firstName' className='block font-medium'>
              Nombre *
            </label>
            <input
              type='text'
              name='firstName'
              value={formData.firstName}
              onChange={handleChange}
              className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
              placeholder='Nombres'
              required
            />
          </div>
          <div>
            <label htmlFor='lastName' className='block font-medium'>
              Apellido *
            </label>
            <input
              type='text'
              name='lastName'
              value={formData.lastName}
              onChange={handleChange}
              className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
              placeholder='Apellidos'
              required
            />
          </div>
          <div>
            <label htmlFor='email' className='block font-medium'>
              Correo electrónico *
            </label>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
              placeholder='ejemplo@gmail.com'
              required
            />
          </div>
          <div>
            <label htmlFor='country' className='block font-medium'>
              País *
            </label>
            <select
              name='country'
              value={formData.country}
              onChange={handleChange}
              className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
              required
            >
              <option value=''>País</option>
              <option value='mx'>México</option>
              <option value='ar'>Argentina</option>
              <option value='ven'>Venezuela</option>
              <option value='cl'>Chile</option>
              <option value=''>Otro</option>
              {/* Agrega más opciones */}
            </select>
          </div>
          <div>
            <label htmlFor='education' className='block font-medium'>
              Educación *
            </label>
            <input
              type='text'
              name='education'
              value={formData.education}
              onChange={handleChange}
              className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
              placeholder='Educación'
              required
            />
          </div>
          <div>
            <label htmlFor='jobTitle' className='block font-medium'>
              Cargo *
            </label>
            <select
              name='jobTitle'
              value={formData.jobTitle}
              onChange={handleChange}
              className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
              required
            >
              <option value=''>Cargo</option>
              <option value='manager'>Gerente</option>
              <option value='Ingeniero'>Ing. de Sistema</option>
              <option value='developer'>Desarrollador Fullstack</option>
              <option value='developer'>Desarrollador Frontend</option>
              <option value='developer'>Desarrollador Backend</option>
              <option value='other'>Otro</option>
              {/* Agrega más opciones */}
            </select>
          </div>
          <div>
            <label htmlFor='experience' className='block font-medium'>
              Experiencia *
            </label>
            <input
              type='text'
              name='experience'
              value={formData.experience}
              onChange={handleChange}
              className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
              placeholder='Cargo'
              required
            />
          </div>
          <div>
            <label htmlFor='password' className='block font-medium'>
              Crear Contraseña *
            </label>
            <input
              type='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
              placeholder='Crea una contraseña'
              required
            />
            <p className='text-sm text-gray-500 mt-1'>Mínimo 8 caracteres</p>
          </div>
        </div>

        <div className='mt-6 '>
          <button
            type='submit'
            className='w-[287px] h-[48px] tablet:w-[461px] tablet:h-[50px] block mx-auto bg-primary-500 text-white py-2 px-4 rounded-full hover:bg-primary-600'
          >
            Crear cuenta
          </button>
        </div>

        <div className='mt-4 text-center'>
          <p>
            ¿Ya tienes cuenta?{' '}
            Inicia Sesión

          </p>
        </div>
      </form>
    </div>
  )
}
