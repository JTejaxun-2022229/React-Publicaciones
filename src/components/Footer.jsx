const Footer = () => {

  return (
    <>
      <div className="mt-8 w-full bg-black px-8 md:px-[300px] flex md:flex-row flex-col space-y-6 md:space-y-0 items-start md:justify-between text-sm md:text-md py-8 ">
        <div className="flex flex-col text-white">
          <p>Blogs destacados</p>
          <p>Lo Más Visto</p>
          <p>Elección de los Lectores</p>
        </div>

        <div className="flex flex-col text-white">
          <p>Foro</p>
          <p>Soporte</p>
          <p>Publicaciones recientes</p>
        </div>

        <div className="flex flex-col text-white">
          <p>Politica de Privacidad</p>
          <p>Acerca de nosotros</p>
          <p>Terminos y Condiciones</p>
          <p>Terminos de Servicio</p>
        </div>
      </div>
      <p className="py-2 pb-6 text-center text-white bg-black text-sm">Derechos reservados @Blog Jose Daniel Tejaxun / 2022-229 / IN6BV</p>
    </>
  )
}

export default Footer