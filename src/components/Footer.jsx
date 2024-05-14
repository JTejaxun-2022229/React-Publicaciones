const Footer = () => {
  return (
    <>
      <div className="mt-8 w-full bg-black px-8 md:px-[100px] flex flex-col md:flex-row md:space-x-16 items-center justify-between text-sm md:text-md py-12">
        <div className="flex flex-col text-white items-center md:items-start md:w-1/3">
          <img
            src="https://via.placeholder.com/200"
            alt="Imagen de pie de página"
            className="w-48 h-48 md:w-64 md:h-96 object-cover"
          />
        </div>
        <div className="flex flex-col text-white items-center md:w-1/3 text-center space-y-8">
          <p className="text-lg font-semibold">Acerca de mi</p>
          <p>Mi nombre es José Tejaxun y soy un desarrollador en proceso de aprendizaje</p>
        </div>
        <div className="flex flex-col text-white w-full md:w-1/3 space-y-4">
          <p className="mb-4 text-lg font-semibold text-center md:text-left">Contáctame</p>
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Nombre"
              className="px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white"
            />
            <input
              type="email"
              placeholder="Correo"
              className="px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white"
            />
            <textarea
              placeholder="Mensaje"
              className="px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white h-32"
            ></textarea>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
      <p className="py-2 pb-6 text-center text-white bg-black text-sm">Derechos reservados @Blog Jose Daniel Tejaxun Xicon / 2022-229 / IN6BV</p>
    </>
  );
}

export default Footer;
