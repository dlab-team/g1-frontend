import { createContext, useState } from 'react'

// CREA CONTEXTO DE LA APP
export const ContextApp = createContext()
// AQUI VARIABLES GLOBALES
// Ejemplo: const pruebaContext = "Vengo del context"
export const AppProvider = ({ children }) => {
  const [userId, setUserId] = useState(null)
  const setUser = (id) => setUserId(id)
  const dataProvider = {
    // VARIABLES A PROVEER EN EL CONTEXT
    setUser,
    userId
  }

  return (
    <ContextApp.Provider value={dataProvider}>
      {children}
    </ContextApp.Provider>
  )
}
