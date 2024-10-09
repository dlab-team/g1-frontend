import { useEffect, useCallback, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import ToggleSwitch from './ToggleSwitch'
import { ContextApp } from '../../context/ContextApp.jsx'

const Login = () => {
  const { setUser } = useContext(ContextApp)
  const ENDPOINT = import.meta.env.VITE_API_URL

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const rememberPassword = watch('rememberPassword')
  const navigate = useNavigate()

  useEffect(() => {
    const savedEmail = localStorage.getItem('email')
    const savedPassword = localStorage.getItem('password')

    if (savedEmail && savedPassword) {
      setValue('email', savedEmail)
      setValue('password', savedPassword)
      setValue('rememberPassword', true)
    }
  }, [setValue])

  const handleToggleChange = useCallback(
    (newValue) => {
      setValue('rememberPassword', newValue)

      if (newValue) {
        localStorage.setItem('email', watch('email'))
        localStorage.setItem('password', watch('password'))
      } else {
        localStorage.removeItem('email')
        localStorage.removeItem('password')
      }
    },
    [setValue, watch]
  )

  const onSubmit = async (data) => {
    if (!data.email.trim() || !data.password.trim()) {
      return window.alert('Email y contraseña obligatorios.')
    }

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    if (!emailRegex.test(data.email)) {
      return window.alert('El formato del email no es correcto!')
    }

    try {
      const response = await fetch(`${ENDPOINT}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      if (!response.ok) {
        const errorData = await response.json()
        const message =
          errorData.message || 'Ocurrió un error con la solicitud.'
        return window.alert(`${message} 🙁.`)
      }

      const responseData = await response.json()
      window.sessionStorage.setItem('token', responseData.data.token)
      setUser(responseData.data.id)
      window.alert('Usuario identificado con éxito.')
      if (responseData.data.rol === '2') navigate('/tasks')
    } catch (error) {
      console.error(error)
      window.alert(
        'No se pudo conectar con el servidor. Por favor, intenta más tarde.'
      )
    }
  }

  const goToForgotPassword = useCallback(() => {
    navigate('/forgot-password')
  }, [navigate])

  const goToSignUp = useCallback(() => {
    navigate('/signup')
  }, [navigate])

  return (
    <div className='w-[287px] h-[567px] flex flex-col gap-4 p-4 items-center'>
      <h1 className='text-center text-xl font-workSans font-semibold italic'>
        Te damos la bienvenida!
      </h1>
      <p className='text-center text-sm font-roboto'>
        Por favor ingresa tus datos
      </p>
      <form className='flex flex-col gap-1' onSubmit={handleSubmit(onSubmit)}>
        <p className='text-sm font-roboto'>Correo electrónico</p>
        <input
          className='w-full px-1 py-1 border-2 border-grey rounded-md'
          type='email'
          {...register('email', { required: true })}
          placeholder='correo@mail.com'
        />
        {errors.email && (
          <p className='text-xs text-red-500'>El email es obligatorio</p>
        )}

        <p className='text-sm font-roboto'>Contraseña</p>
        <input
          className='w-full px-1 py-1 border-2 border-gray rounded-md'
          type='password'
          {...register('password', { required: true, minLength: 8 })}
          placeholder='Ingresa tu contraseña'
        />
        {errors.password && (
          <p className='text-xs text-red-500'>
            {errors.password.type === 'minLength'
              ? 'La contraseña debe tener al menos 8 caracteres'
              : 'La contraseña es obligatoria'}
          </p>
        )}

        <div className='flex items-center gap-2'>
          <ToggleSwitch
            enabled={rememberPassword}
            onChange={handleToggleChange}
          />
        </div>
        <button
          type='submit'
          className='w-full h-8 mt-4 bg-primary-500 text-white font-workSans font-semibold text-sm px-4 rounded-full hover:bg-primary-700 focus:outline-none focus:ring-2  focus:ring-opacity-50'
        >
          Ingresar
        </button>
        <div className='flex flex-col gap-3'>
          <p
            onClick={goToForgotPassword}
            className='text-primary-500 text-center text-xs cursor-pointer'
          >
            Olvidé mi contraseña
          </p>
          <div>
            <p className='text-center text-sm'>
              ¿No tienes una cuenta?{' '}
              <span
                onClick={goToSignUp}
                className='font-medium font-workSans
                          cursor-pointer text-primary-500'
              >
                Regístrate
              </span>{' '}
            </p>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login
