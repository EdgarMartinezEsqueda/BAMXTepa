const AvisoPrivacidad = () => {
  return (
    <section className="px-4 py-8 md:px-16 md:py-12 bg-bgClaro text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-6 text-amarilloLogo">Aviso de Privacidad</h1>
        <p className="mb-4 text-justify">
          Tu confianza y privacidad son fundamentales para nosotros.
        </p>
        <p className="mb-6 text-justify">
          El presente Aviso de Privacidad se emite en cumplimiento de la Ley Federal de Protección de Datos
          Personales en Posesión de los Particulares (LFPDPPP) y sus disposiciones reglamentarias.
        </p>
        <p className="mb-6 text-justify">
          El Banco Diocesano de Alimentos de los Altos (en adelante "BDAA"), con domicilio en
          <strong> Terrerito #1326, Fraccionamiento La Puerta, Tepatitlán de Morelos, Jalisco</strong>, tiene el compromiso de proteger y salvaguardar sus datos personales conforme a los principios de licitud, consentimiento, información, calidad, finalidad, lealtad, proporcionalidad y responsabilidad.
        </p>
        {/* Sección 1 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">1. Datos del Responsable</h2>
          <p className="text-justify">
            El responsable del tratamiento de sus datos personales es el Banco Diocesano de Alimentos de los Altos,
            una organización sin fines de lucro dedicada a combatir el hambre y mejorar la nutrición en nuestra
            comunidad. Para cualquier duda o consulta respecto al manejo de sus datos personales, puede
            contactarnos en el correo electrónico <a href="mailto:direcciongeneral@batepa.mx"><strong>direcciongenerak@batepa.mx</strong></a> o al teléfono <strong>378 782 5552</strong>.
          </p>
        </section>

        {/* Sección 2 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">2. Datos Personales que Recabamos</h2>
          <p className="mb-4 text-justify">
            Para cumplir con nuestro objeto social y las actividades relacionadas, podríamos recopilar las
            siguientes categorías de datos personales:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Datos de identificación: Nombre completo, domicilio, teléfono, correo electrónico, CURP, RFC.</li>
            <li>Datos financieros: Información bancaria como número de cuenta o CLABE, utilizada exclusivamente para la emisión de recibos deducibles o la gestión de donaciones.</li>
            <li>Datos personales que obtenemos de nuestras tecnologías de rastreo como el navegador del usuario, tipo de sistema operativo del usuario, dirección IP del usuario.</li>
          </ul>
        </section>

        {/* Sección 3 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">3. Finalidades del Tratamiento de Datos</h2>
          <p className="mb-4 text-justify">
            Los datos personales recabados serán utilizados para las siguientes finalidades:
          </p>
          <ol className="list-decimal list-inside space-y-2">
            <li>Identificación y registro de donantes, beneficiarios, voluntarios y colaboradores.</li>
            <li>Gestión de donaciones y emisión de comprobantes fiscales.</li>
            <li>Comunicación de avances, resultados e iniciativas relacionadas con nuestro objeto social.</li>
            <li>Cumplimiento de obligaciones legales y regulatorias, incluyendo las fiscales.</li>
            <li>Creación de expedientes para fines administrativos y estadísticos.</li>
          </ol>
        </section>

        {/* Sección 4 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">4. Transferencia de Datos</h2>
          <p className="text-justify">
            Sus datos personales podrán ser transferidos a terceros únicamente en los siguientes casos:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Autoridades competentes para el cumplimiento de requerimientos legales.</li>
            <li>Aliados estratégicos y organizaciones colaboradoras que compartan nuestros valores y políticas de
              privacidad.
            </li>
          </ul>
          <p className="mt-4 text-justify">
            En todos los casos, garantizamos que dichos terceros se comprometan a proteger su información conforme a
            las leyes aplicables.
          </p>
        </section>

        {/* Sección 5 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">5. Derechos ARCO (Acceso, Rectificación, Cancelación y Oposición)</h2>
          <p className="mb-4 text-justify">
            Usted tiene derecho a:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Acceder a sus datos personales y conocer cómo son tratados.</li>
            <li>Rectificar la información si es inexacta o incompleta.</li>
            <li>Cancelar sus datos cuando considere que no son necesarios para las finalidades descritas.</li>
            <li>Oponerse al tratamiento de sus datos por motivos legítimos.</li>
          </ul>
          <p className="mt-4 text-justify">
            Para ejercer estos derechos, puede contactarnos a través del correo <a href="mailto:comunicacion@batepa.mx"><strong>comunicacion@batepa.mx</strong></a> o llamando al teléfono <strong>378 782 5552</strong>.
          </p>
        </section>

        {/* Sección 6 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">6. Cambios al Aviso de Privacidad</h2>
          <p className="text-justify">
            Nos reservamos el derecho de actualizar o modificar este Aviso de Privacidad para reflejar cambios en
            nuestras prácticas o en la legislación aplicable. Las actualizaciones estarán disponibles en nuestra
            página web <strong>bamxtepatitlan.org/privacidad</strong>.
          </p>
        </section>

        {/* Consentimiento */}
        <p className="text-justify">
          Al proporcionar sus datos personales, usted confirma que ha leído y aceptado los términos del presente Aviso
          de Privacidad.
        </p>
        <p className="mt-6 font-semibold">Fecha de última actualización: 1 de enero de {new Date().getFullYear()}</p>
      </div>
    </section>
  );
};

export default AvisoPrivacidad;
