import { createContext } from "react";

// CREA CONTEXTO DE LA APP
export const ContextApp = createContext();

// AQUI VARIABLES GLOBALES
// Ejemplo: const pruebaContext = "Vengo del context"

export const AppProvider = ({ children }) => {

	const dataProvider = {
	// VARIABLES A PROVEER EN EL CONTEXT
	};

	return (
    <ContextApp.Provider value={dataProvider}>
        {children}
    </ContextApp.Provider>
    )
};
