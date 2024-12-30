import React, { useState } from "react";
import { ChevronDown, X } from "lucide-react";

interface FormData {
  amount: string;
  reason: string;
  installments: string;
  salary: string;
}

const formatNumber = (value: string) => {
  const number = value.replace(/\D/g, "");
  return new Intl.NumberFormat('es-CO').format(Number(number));
};

const unformatNumber = (value: string) => value.replace(/\D/g, "");

const Calculadora: React.FC = () => {
  const [activeField, setActiveField] = useState<string>("");
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    amount: "",
    reason: "",
    installments: "",
    salary: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleNumberInput = (e: React.ChangeEvent<HTMLInputElement>, field: keyof FormData) => {
    const formatted = formatNumber(e.target.value);
    setFormData({ ...formData, [field]: unformatNumber(formatted) });
    e.target.value = formatted;
  };

  const handleCalculate = () => {
    const newErrors: Partial<FormData> = {};
    let isValid = true;

    Object.keys(formData).forEach((key) => {
      if (!formData[key as keyof FormData]) {
        newErrors[key as keyof FormData] = "Campo requerido";
        isValid = false;
      }
    });

    setErrors(newErrors);
    if (isValid) setShowModal(true);
  };

  const monthlyPayment = formData.amount && formData.installments
    ? formatNumber((parseInt(formData.amount) / parseInt(formData.installments)).toFixed(0))
    : "0";

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-6 p-6">
      {/* Parte superior: Texto y botón */}
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:order-1 text-center lg:text-left">
        <h2 className="text-4xl font-bold mb-4">Simula tu préstamo ideal</h2>
        <p className="text-tertiary mb-4">
          Calcula tu préstamo en segundos: ingresa el monto, plazo y tu salario para obtener una proyección estimada de tus cuotas. Las condiciones finales serán ajustadas de acuerdo con tu perfil y situación financiera específica.
        </p>
        <button className="bg-primary text-quaternary px-6 py-3 rounded-lg mt-6 font-bold hover:opacity-90 transition-opacity">
          Solicita tu préstamo ahora
        </button>
      </div>

      {/* Formulario de calculadora */}
      <div id="calculadora" className="w-full lg:w-1/3 bg-white rounded-xl shadow-2xl p-6 mt-6 lg:mt-0">
        <div className="space-y-4">
          <div>
            <label className="text-secondary text-base">¿Cuánto necesitas?</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
              <input
                type="text"
                value={formatNumber(formData.amount)}
                onChange={(e) => handleNumberInput(e, 'amount')}
                className="w-full p-2.5 pl-7 border rounded-lg mt-2 text-sm"
                placeholder="Ingresa el monto"
              />
            </div>
            {errors.amount && <span className="text-red-500 text-xs">{errors.amount}</span>}
          </div>

          <div>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setActiveField(activeField === "reason" ? "" : "reason")}
            >
              <label className="text-secondary text-base">Motivo del préstamo</label>
              <ChevronDown className={`w-4 h-4 transform transition-transform ${activeField === "reason" ? "rotate-180" : ""}`} />
            </div>
            {activeField === "reason" && (
              <select
                value={formData.reason}
                onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                className="w-full p-2.5 border rounded-lg mt-2 text-sm"
              >
                <option value="">Selecciona un motivo</option>
                <option value="personal">Personal</option>
                <option value="business">Negocio</option>
                <option value="education">Educación</option>
              </select>
            )}
            {errors.reason && <span className="text-red-500 text-xs">{errors.reason}</span>}
          </div>

          <div>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setActiveField(activeField === "installments" ? "" : "installments")}
            >
              <label className="text-secondary text-base">Número de cuotas</label>
              <ChevronDown className={`w-4 h-4 transform transition-transform ${activeField === "installments" ? "rotate-180" : ""}`} />
            </div>
            {activeField === "installments" && (
              <select
                value={formData.installments}
                onChange={(e) => setFormData({ ...formData, installments: e.target.value })}
                className="w-full p-2.5 border rounded-lg mt-2 text-sm"
              >
                <option value="">Selecciona el número de cuotas</option>
                <option value="12">12 meses</option>
                <option value="24">24 meses</option>
                <option value="36">36 meses</option>
              </select>
            )}
            {errors.installments && <span className="text-red-500 text-xs">{errors.installments}</span>}
          </div>

          <div>
            <label className="text-secondary text-base">¿Cuál es tu salario?</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
              <input
                type="text"
                value={formatNumber(formData.salary)}
                onChange={(e) => handleNumberInput(e, 'salary')}
                className="w-full p-2.5 pl-7 border rounded-lg mt-2 text-sm"
                placeholder="Ingresa tu salario"
              />
            </div>
            {errors.salary && <span className="text-red-500 text-xs">{errors.salary}</span>}
          </div>

          <button
            onClick={handleCalculate}
            className="w-full bg-primary text-quaternary py-3 rounded-lg text-base font-bold hover:opacity-90 transition-opacity"
          >
            Calcular
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-md w-full relative shadow-xl">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-2xl font-bold mb-4">Resultado de tu simulación</h3>
            <div className="space-y-4">
              <p className="text-tertiary">Monto solicitado: ${formatNumber(formData.amount)}</p>
              <p className="text-tertiary">Número de cuotas: {formData.installments}</p>
              <p className="text-xl font-bold text-primary">
                Cuota mensual estimada: ${monthlyPayment}
              </p>
              <div className="flex gap-4 mt-6">
                <button
                  onClick={() => setShowModal(false)}
                  className="w-1/2 border border-primary text-primary py-3 rounded-lg hover:bg-gray-50"
                >
                  Entendido
                </button>
                <button
                  onClick={() => {
                    setShowModal(false);
                    // Aquí iría la lógica para continuar con el préstamo
                  }}
                  className="w-1/2 bg-primary text-white py-3 rounded-lg hover:opacity-90"
                >
                  Continuar préstamo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calculadora;
