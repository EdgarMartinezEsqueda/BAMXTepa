import FAQ from "./FAQ";

const preguntas =  [
  {
    "pregunta": "¿Qué es un banco de alimentos?",
    "respuesta": "Un banco de alimentos es una organización sin fines de lucro que recoge alimentos no perecederos y los distribuye a personas necesitadas a través de agencias de servicio social."
  },
  {
    "pregunta": "¿Cómo puedo donar alimentos al banco de alimentos?",
    "respuesta": "Puedes donar alimentos no perecederos directamente en nuestra sede o en los puntos de recolección designados. También aceptamos donaciones monetarias."
  },
  {
    "pregunta": "¿Qué tipo de alimentos aceptan como donación?",
    "respuesta": "Aceptamos alimentos no perecederos como arroz, pasta, enlatados, cereales, y alimentos secos. También aceptamos alimentos frescos y congelados en función de su vida útil y condiciones de almacenamiento."
  },
  {
    "pregunta": "¿Cómo puedo ser voluntario en el banco de alimentos?",
    "respuesta": "Puedes ser voluntario registrándote en nuestro sitio web o contactando directamente con nuestra organización. Te proporcionaremos información sobre los horarios y tareas disponibles."
  },
  {
    "pregunta": "¿Qué programas ofrece el banco de alimentos para ayudar a las personas necesitadas?",
    "respuesta": "Ofrecemos programas de distribución de alimentos, asistencia nutricional, y educación alimentaria para ayudar a las personas a mejorar su seguridad alimentaria."
  },
  {
    "pregunta": "¿Cómo puedo solicitar ayuda alimentaria del banco de alimentos?",
    "respuesta": "Puedes solicitar ayuda alimentaria a través de nuestro personal de trabajo social o contactándonos directamente por correo electrónico o teléfono."
  },
  {
    "pregunta": "¿Cuál es la diferencia entre un banco de alimentos y un comedor social?",
    "respuesta": "Un banco de alimentos distribuye alimentos a las personas para que los preparen en sus hogares, mientras que un comedor social ofrece comidas preparadas para consumir en el lugar."
  },
  {
    "pregunta": "¿Cómo se asegura el banco de alimentos de que los alimentos donados sean seguros para el consumo?",
    "respuesta": "Seguimos estrictas normas de seguridad alimentaria y trabajamos con proveedores de alimentos confiables. Además, inspeccionamos y clasificamos cuidadosamente todos los alimentos recibidos para garantizar su calidad y seguridad."
  },
  {
    "pregunta": "¿Cuál es el impacto ambiental de los bancos de alimentos?",
    "respuesta": "Los bancos de alimentos ayudan a reducir el desperdicio de alimentos al redistribuir alimentos excedentes que de otra manera se desecharían. También promovemos prácticas de consumo responsable y sostenible."
  },
  {
    "pregunta": "¿Cómo puedo colaborar con el banco de alimentos más allá de las donaciones y el voluntariado?",
    "respuesta": "Puedes colaborar difundiendo información sobre nuestro trabajo, participando en eventos de recaudación de fondos, y abogando por políticas que aborden la inseguridad alimentaria en nuestra comunidad."
  }
];
const FAQs = () => {
    return (
      <section className="bg-white dark:bg-bgOscuro1">
        <div className="container px-6 py-12 mx-auto flex flex-col items-center">
          <h1 className="text-center text-gray-800 lg:text-3xl dark:text-white">Preguntas Frecuentes</h1>

          <div className="mt-8 xl:mt-16 lg:flex max-w-5xl min-w-[90%]">
            <div className="space-y-4 min-w-full">
              
              { preguntas.map( (pregunta, index) => < FAQ data={pregunta} key={index} /> ) }
              
            </div>
          </div>
        </div>
      </section>
    );
}

export default FAQs;