import React, { useEffect } from "react";

const CookiesPolicy: React.FC = () => {


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
        Política de Cookies
      </h2>

      {/* Contenido */}
      <div className="text-[#555555] leading-relaxed space-y-6">
        <section>
          <h3 className="text-xl font-bold mb-2">1. Uso de Cookies</h3>
          <p>
            Crediteame SAS utiliza cookies para mejorar la experiencia del usuario en la plataforma y
            para fines analíticos y publicitarios.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-2">2. Tipos de Cookies Utilizadas</h3>
          <ul className="list-disc ml-6">
            <li>
              <strong>Cookies esenciales:</strong> necesarias para el funcionamiento básico del sitio web.
            </li>
            <li>
              <strong>Cookies de análisis:</strong> utilizadas para medir el comportamiento del usuario y
              mejorar la experiencia.
            </li>
            <li>
              <strong>Cookies publicitarias:</strong> utilizadas para campañas de remarketing y publicidad
              segmentada.
            </li>
            <li>
              <strong>Cookies de terceros:</strong> implementadas por proveedores de servicios como
              herramientas de análisis (Google Analytics) y plataformas de pago.
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-2">3. Consentimiento del Usuario</h3>
          <p>
            Al acceder a la plataforma, el usuario acepta el uso de cookies conforme a esta política.
            Es posible gestionar y rechazar el uso de cookies a través de las configuraciones del
            navegador.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-2">4. Desactivación de Cookies</h3>
          <p>
            El usuario puede desactivar las cookies desde la configuración de su navegador. Sin
            embargo, esto puede afectar la experiencia de navegación y la funcionalidad de la
            plataforma.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-2">5. Actualización y Contacto</h3>
          <p>
            Crediteame SAS se reserva el derecho a modificar estas políticas en cualquier momento.
            Las actualizaciones serán publicadas en la plataforma. Para cualquier consulta, puede
            contactarnos a{" "}
            <a href="mailto:contacto@creditea.me" className="text-blue-600 underline">
              contacto@creditea.me
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default CookiesPolicy;
