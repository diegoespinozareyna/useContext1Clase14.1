import { createContext, useContext, useState } from "react";

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const login = (correo) => {

        let assignedRole = "";

        if (correo.includes("admin")) {
            assignedRole = "admin"
        }
        else if (correo.includes("editor")) {
            assignedRole = "editor"
        }
        else {
            assignedRole = "client"
        }

        setUser({
            email: correo,
            name: correo?.split("@")[0],
            role: assignedRole,
        })
    }
    const logout = () => {
        setUser(null)
    }
    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        console.log("useAuth debe estar o debe ser usado dentro del un provider")
    }
    return context
}