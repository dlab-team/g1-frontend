import { useNavigate } from "react-router-dom"

const ButtonBack = () => {
  
const navigate = useNavigate()
const handleBack = () => {
  navigate("/")
}
  return (

    <button onClick={handleBack} className="bg-primary-500 w-[12.5rem] h-[3.1rem] text-[1.25rem] text-white font-semibold rounded-full">Regresar</button>

  )
}

export default ButtonBack