const CardPerfil = ({ color, title, message }) => {
    return (
        <div className="w-150 bg-white rounded-lg shadow-lg p-10 flex flex-col justify-center items-center">
            <div
                className={`bg-${color ?? "green"}-100 text-${color ?? "green"}-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-center`}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
            </div>
            <h2 className="text-xl font-bold text-slate-700 mb-2 flex flex-col justify-center items-center">{title ?? "Perfil Cliente"}</h2>
            <button
                className={`px-4 py-3 bg-${color ?? "green"}-600 text-white rounded-md text-center text-sm font-bold cursor-pointer`}
            >
                {message ?? "Soy un cliente"}
            </button>
        </div>
    )
}

export default CardPerfil