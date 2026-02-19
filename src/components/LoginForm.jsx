import { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import Swal from "sweetalert2"

// const usuarioPrueba = {
//     email: "admin@gmail.com",
//     password: "123456",
// }

const password = "123456";

const LoginForm = () => {

    const { login } = useAuth()

    const [correo, setCorreo] = useState("")
    const [contrasena, setContrasena] = useState("")

    const hanleSubmit = (event) => {
        event.preventDefault()

        console.log("el correo es: ", correo)
        console.log("la constraseña es: ", contrasena)

        // if (correo === usuarioPrueba.email && contrasena === usuarioPrueba.password) {
        //     login(correo)
        //     Swal.fire({
        //         title: "¡Bienvenido!",
        //         text: "Has ingresado correctamente",
        //         icon: "success",
        //     })
        // }
        if (contrasena === password) {
            login(correo)
            Swal.fire({
                title: "¡Bienvenido!",
                text: "Has ingresado correctamente",
                icon: "success",
            })
        }
        else {
            Swal.fire({
                title: "Error!",
                text: "Correo o contraseña incorrectos",
                icon: "error",
            })
        }

    }

    return (
        <>
            <form
                onSubmit={(event) => hanleSubmit(event)}
            >
                <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
                    <div className="w-100 bg-white rounded-lg shadow-lg p-10">
                        <h1 className="text-5xl text-gray-700 font-bold text-center">Bienvenido</h1>
                        <p className="text-md text-gray-500 text-center mt-2">Ingresa a tu cuenta para continuar</p>

                        <div className="mt-10">
                            <label className="text-gray-500 text-sm font-semibold mb-2">
                                Correo
                            </label>
                            <input
                                type="email"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md"
                                placeholder="correo@ejemplo.com"
                                onChange={(event) => {
                                    setCorreo(event.target.value)
                                }}
                            />
                        </div>

                        <div className="mt-5">
                            <label className="text-gray-500 text-sm font-semibold mb-2">
                                Contraseña
                            </label>
                            <input
                                onChange={(event) => {
                                    setContrasena(event.target.value)
                                }}
                                type="password"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md"
                                placeholder="******"
                            />
                        </div>

                        <div className="mt-5">
                            <button
                                type="submit"
                                className="w-full px-4 py-3 text-white bg-indigo-600
                                hover:bg-indigo-700 rounded-md cursor-pointer"
                            >
                                Ingresar
                            </button>
                        </div>

                    </div>
                </div>
            </form>
        </>
    )
}

export default LoginForm