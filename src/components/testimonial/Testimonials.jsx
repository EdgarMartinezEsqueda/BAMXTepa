import Testimony from "./Testimony";

const Testimonials = () => {
    return (
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <h2 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">
            Testimonios de los beneficiarios
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
            <Testimony data={{
              name : "Adrián Hernández",
              testimony : "Increíble atención al cliente y panes frescos y deliciosos. Me encanta venir aquí en las mañanas para disfrutar de un café y un pan recién horneado. El ambiente es acogedor y cálido, y el personal siempre está dispuesto a ayudarte a encontrar el pan perfecto para ti.",
              uri : "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
              rating : 5
            }} />            
            < Testimony data={{
              name : "Valeria Medina",
              testimony : "La calidad de los panes aquí es insuperable. Desde la selección de ingredientes hasta el proceso de horneado, se nota que todo se hace con amor y cuidado. Me encanta probar los diferentes panes y complementos que ofrecen, y siempre encuentro algo nuevo y delicioso que probar.",
              uri : "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
              rating : 5
            }} />
            < Testimony data={{ 
              name : "Isabel Galván",
              testimony : "¡La mejor panadería de la ciudad! Los panes son increíblemente frescos y deliciosos. Me encanta probar los diferentes sabores y texturas que ofrecen, desde los clásicos hasta los más innovadores. Siempre salgo de allí con una sonrisa en el rostro y una bolsa llena de pan recién horneado.",
              uri : "https://images.unsplash.com/photo-1614436163996-25cee5f54290?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=442&q=80",
              rating : 5
            }} />
          </div>
        </div>
      </section>
  );
};

export default Testimonials;