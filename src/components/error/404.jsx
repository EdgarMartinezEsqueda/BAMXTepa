import img404 from "assets/404.jpg";
const Error404 = () => {
    return (
      <section className="bg-bgClaro dark:bg-bgOscuro1 p-10">
        <div className="flex flex-col items-center justify-center ">
          <img src={img404} alt="404" className="h-96" />
          <h1 className="text-4xl text-center">
            Página no encontrada
          </h1>
        </div>
      </section>
    );
}

export default Error404;