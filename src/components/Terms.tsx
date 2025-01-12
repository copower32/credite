import React,{useEffect} from "react";

const Terms: React.FC = () => {

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
        Términos y Condiciones
      </h2>

      {/* Contenido */}
      <div className="text-[#555555] leading-relaxed space-y-6">
        <section>
          <h3 className="text-xl font-bold mb-2">1. Información General</h3>
          <p>
            La plataforma <strong>Creditea.me</strong> es operada por Crediteame SAS (en adelante,
            "La Empresa"), identificada con NIT: <strong>901782780</strong>, con domicilio en{" "}
            <strong>CL 16 # 1 - 67 TO 20 AP 604, Chía, Cundinamarca</strong>, y correo electrónico
            de contacto: <a href="mailto:contacto@creditea.me" className="text-blue-600 underline">
              contacto@creditea.me
            </a>.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-2">2. Objeto del Contrato</h3>
          <p>
            Estos términos y condiciones regulan el uso de la plataforma Creditea.me para la
            solicitud, gestión y otorgamiento de micropréstamos en Colombia, así como los derechos
            y obligaciones de los usuarios y de La Empresa.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-2">3. Requisitos para acceder al servicio</h3>
          <ul className="list-disc ml-6">
            <li>Ser mayor de edad (18 años o más).</li>
            <li>Ser ciudadano colombiano o residente legal con cédula de ciudadanía o extranjería.</li>
            <li>Completar correctamente el formulario de registro y enviar la documentación solicitada.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-2">4. Proceso de Aprobación de Préstamos</h3>
          <p>
            Los préstamos están sujetos a un proceso de revisión manual realizado por La Empresa.
            La aprobación o rechazo será comunicado al solicitante. El monto aprobado dependerá del
            perfil financiero y análisis de riesgo del solicitante.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-2">5. Condiciones Financieras y Pagos Anticipados</h3>
          <p>
            Los pagos anticipados son permitidos sin penalización, pero no modificarán los intereses
            ni plazos establecidos en el contrato inicial. El cliente puede pagar cuotas futuras de
            forma anticipada, pero la cantidad total de intereses pactada al inicio del contrato se
            mantendrá.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-2">6. Consecuencias por Mora</h3>
          <p>
            En caso de mora, La Empresa podrá aplicar intereses moratorios según la tasa máxima
            permitida por la normativa colombiana vigente, reporte a centrales de riesgo y cesión
            de la deuda a terceros, como Fondo de Coberturas Crediticias, para la gestión de cobro.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-2">7. Resolución de Conflictos</h3>
          <p>
            Las disputas serán resueltas de acuerdo con la legislación colombiana vigente y podrán
            incluir procesos de conciliación o acudir a instancias judiciales si es necesario.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-2">8. Jurisdicción Aplicable</h3>
          <p>
            Este acuerdo se regirá e interpretará conforme a las leyes de la República de Colombia.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Terms;
