import React, { useEffect } from "react";

const PrivacyPolicy: React.FC = () => {

  useEffect(() => {
    // Desplaza la ventana al inicio cuando se monta el componente
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      id="privacy-policy"
      className="max-w-4xl mx-auto py-8 px-6 sm:px-8 md:px-10"
      style={{ marginTop: "5rem" }} 
    >
      {/* Título */}
      <h2 className="text-4xl font-semibold text-center text-[#292D32] mb-6">
        Política de Privacidad
      </h2>

      {/* Contenido */}
      <div className="text-[#555555] leading-relaxed space-y-6">
        <section>
          <h3 className="text-xl font-bold mb-2">1. Recolección de Datos Personales</h3>
          <p>Crediteame SAS recopila los siguientes datos personales de los usuarios:</p>
          <ul className="list-disc ml-6">
            <li>Información de identificación personal: nombre, cédula de ciudadanía o extranjería.</li>
            <li>Información financiera: ingresos, información bancaria y crediticia.</li>
            <li>
              Datos adicionales: fotografías (selfies), información de contacto y registros de
              interacción con la plataforma y WhatsApp.
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-2">2. Finalidad de la Recolección de Datos</h3>
          <p>Los datos personales serán utilizados para:</p>
          <ul className="list-disc ml-6">
            <li>Evaluar la capacidad de pago y otorgar créditos.</li>
            <li>Gestionar y cobrar las obligaciones financieras adquiridas.</li>
            <li>
              En caso de mora, ceder la deuda o compartir la información con Fondo de Coberturas
              Crediticias u otras entidades de cobranza.
            </li>
            <li>
              Realizar análisis de comportamiento crediticio y, potencialmente, comercializar bases
              de datos con terceros.
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-2">3. Protección de Datos</h3>
          <p>
            Crediteame SAS implementa medidas de seguridad técnicas y administrativas para proteger
            los datos personales, incluyendo cifrado de datos, control de accesos y políticas de
            retención seguras.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-2">4. Compartición de Datos con Terceros</h3>
          <p>Los datos personales podrán ser compartidos con:</p>
          <ul className="list-disc ml-6">
            <li>Fondo de Coberturas Crediticias para la gestión de avales y cobro de cartera.</li>
            <li>Centrales de riesgo y burós de crédito.</li>
            <li>Bancos y entidades financieras para el procesamiento de pagos.</li>
            <li>
              Empresas de cobranza externas y, potencialmente, con otros prestamistas interesados en
              adquirir la cartera.
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-2">5. Derechos de los Titulares</h3>
          <p>El titular de los datos tiene derecho a:</p>
          <ul className="list-disc ml-6">
            <li>Acceder a sus datos personales.</li>
            <li>
              Solicitar la rectificación o actualización de sus datos (previa validación por parte de
              La Empresa).
            </li>
            <li>
              Solicitar la supresión de los datos, siempre que no existan obligaciones financieras
              pendientes.
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-2">6. Ejercicio de los Derechos ARCO</h3>
          <p>
            Para ejercer estos derechos, los titulares pueden comunicarse al correo electrónico:{" "}
            <a href="mailto:contacto@creditea.me" className="text-blue-600 underline">
              contacto@creditea.me
            </a>.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-2">7. Conservación de los Datos</h3>
          <p>
            Los datos personales se conservarán durante el tiempo necesario para cumplir con las
            finalidades para las cuales fueron recolectados y conforme a la normativa vigente.
          </p>
        </section>
      </div>
    </div>

  );
};

export default PrivacyPolicy;
