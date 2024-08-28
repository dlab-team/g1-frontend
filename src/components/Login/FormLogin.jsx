import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import ToggleSwitch from "./ToggleSwitch"

const Login = () => {
    const ENDPOINT = "http://localhost:5173/login"

    const initialFormState = {
        email: '',
        password: '',
    }

    const [user, setUser] = useState(initialFormState)
    const [rememberPassword, setRememberPassword] = useState(false)
    const [countPass, setCountPass] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const savedEmail = localStorage.getItem('email')
        const savedPassword = localStorage.getItem('password')
        
        if (savedEmail && savedPassword) {
            setUser({ email: savedEmail, password: savedPassword })
            setRememberPassword(true)
        }
    }, [])

    const handleInputChange = (e) => { 
        const { name, value } = e.target

        if (name === 'password') {
            setCountPass(value.length < 8)
        }

        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }))
    }

    const handleToggleChange = (newValue) => {
        setRememberPassword(newValue)

        if (newValue) {
            localStorage.setItem('email', user.email)
            localStorage.setItem('password', user.password)
        } else {
            localStorage.removeItem('email')
            localStorage.removeItem('password')
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!user.email.trim() || !user.password.trim()) {
            return window.alert('Email y contraseña obligatorios.')
        }

        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
        if (!emailRegex.test(user.email)) {
            return window.alert('El formato del email no es correcto!')
        }

        try {
            const { data } = await axios.post(ENDPOINT, user)
            window.sessionStorage.setItem('token', data.token)
            window.alert('Usuario identificado con éxito.')
            navigate('/perfil')
        } catch (error) {
            console.error(error)
    
            if (error.response) {
                const message = error.response.data.message || 'Ocurrió un error con la solicitud.'
                window.alert(`${message} 🙁.`)
            } else {
                window.alert('No se pudo conectar con el servidor. Por favor, intenta más tarde.')
            }}
    }

    const goToForgotPassword = () => {
        navigate('/forgot-password')
    }

    const goToSignUp = () => {
        navigate('/signup')
    }

    return (
        <div className="w-[287px] h-[567px] flex flex-col gap-4 p-4 items-center">
            <h1 className="text-center text-xl font-workSans font-semibold italic">Te damos la bienvenida!</h1>
            <p className="text-center text-sm font-roboto">Por favor ingresa tus datos</p>
            <form 
                className="flex flex-col gap-1"
                onSubmit={handleSubmit}
            > 
                <p className="text-sm font-roboto">Correo electrónico</p>
                <input
                    className="w-full px-1 py-1 border-2 border-gray-300 rounded-md"
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleInputChange}
                    placeholder="correo@mail.com"
                />
                <p className="text-sm font-roboto">Contraseña</p>
                <input
                    className={`w-full px-1 py-1 border-2 rounded-md ${rememberPassword ? 'border-primary-500' : 'border-gray-300'}`}
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleInputChange}
                    placeholder="Ingresa tu contraseña"
                />
                {countPass && (<p className="text-xs text-gray-500">Mínimo 8 caracteres</p>)}
                <div className="flex items-center gap-2">
                    <ToggleSwitch enabled={rememberPassword} onChange={handleToggleChange} />
                </div>
                <button 
                    type="submit"
                    className="w-full h-8 mt-4 bg-primary-500 text-white font-workSans font-semibold text-sm px-4 rounded-full hover:bg-primary-600 focus:outline-none focus:ring-2  focus:ring-opacity-50" 
                >
                    Ingresar
                </button> 
                <div className="flex flex-col gap-3">
                    <p onClick={goToForgotPassword} className="text-primary-500 text-center text-xs cursor-pointer">Olvidé mi contraseña</p>
                    <div>
                        <p className="text-center text-sm">¿No tienes una cuenta? <span onClick={goToSignUp} className="font-bold cursor-pointer text-primary-500">Regístrate</span> </p>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login
