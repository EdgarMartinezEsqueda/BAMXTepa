
const data = [
];

const HowToHelpCard = (title, info, icon, index) =>{
    return (
        <>
        </>
    )
}
const HowToHelp = () => {
    return (
    <section className="p-16">
      <h1 className="text-verdeLogo text-5xl">¿Cómo puedes ayudar?</h1>
      <div className="flex">
        <div className="text-2xl py-4 w-2/3">
          <div>
            <p>Queremos invitarte a ser parte de nuestra misión. Con tu ayuda,<strong className="bg-verdeLogo text-white px-2 rounded-md">podemos llegar a más familias</strong> y asegurar que <strong className="bg-verdeLogo text-white px-2 rounded-md">nadie pase hambre</strong>. No importa el tamaño de tu donación; cada contribución cuenta y tiene un impacto significativo.</p>
          </div>
          <div>
            <ul className="py-3">
              <li className="py-2"><strong className="text-rojoLogo font-black">Dinero:</strong> Nos permite comprar alimentos y cubrir costos operativos.<a href="https://www.paypal.com/donate/?hosted_button_id=WMZEPNJ7BFVV2" className="text-verdeLogo"> Puedes donar en línea</a> o en comunícate a nuestra oficina.</li>
              <li className="py-2"><strong className="text-rojoLogo font-black">Producto:</strong> Aceptamos alimentos no perecederos y frescos en nuestras instalaciones o en campañas de recolección.</li>
              <li className="py-2"><strong className="text-rojoLogo font-black">Voluntariado:</strong> Únete a nuestro equipo para clasificar alimentos, distribuir, y organizar eventos. <a href="/contacto" className="text-verdeLogo">Contáctanos</a>.</li>
              <li className="py-2"><strong className="text-rojoLogo font-black">Servicio:</strong> Si tienes habilidades o una empresa que puede ayudar (transporte, marketing, servicios legales), ofrécenos tu apoyo.</li>
            </ul>
          </div>
        </div>
        <div className="w-1/3">
          <div className="bg-happyGirl w-full h-full bg-center bg-cover rounded-full" alt="" />
        </div>
      </div>
      
    </section>
    );
}

export default HowToHelp;