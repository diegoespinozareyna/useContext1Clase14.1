import { useAuth } from "../contexts/AuthContext"
import CardPerfil from "./CardPerfil"

const Dashboard = () => {

    const { user, logout } = useAuth()

    const handleLogout = () => {
        logout()
    }

    return (
        <>
            <div className="flex flex-col items-center justify-start h-screen bg-gray-50 gap-10 pt-10">
                <div className="w-150 bg-white rounded-lg shadow-lg p-5 flex justify-between items-center">
                    <span className="text-2xl text-gray-700 font-bold text-left">
                        Panel de Control
                    </span>
                    <div className="flex flex-col gap-1 justify-center items-start">
                        <div>
                            {`Hola, ${user.name}`}
                        </div>
                        <div>
                            {`Correo: ${user.email}`}
                        </div>
                    </div>
                    <button
                        onClick={() => handleLogout()}
                        className="px-4 py-3 bg-red-400 text-white rounded-md text-center text-sm font-bold cursor-pointer"
                    >
                        Cerrar Sesión
                    </button>
                </div>

                <CardPerfil />

                {
                    (user?.role === "editor" || user?.role === "admin") &&
                    <CardPerfil color="yellow" title="¡Vista Editor y Administrador!" message="Editar Perfil" />
                }

                {
                    (user?.role === "admin") &&
                    <CardPerfil color="red" title="¡Vista Administrador!" message="Descargar Base de Datos" />
                }

            </div >
        </>
    )
}

export default Dashboard