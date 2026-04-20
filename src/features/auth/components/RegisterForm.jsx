export const RegisterForm = ({}) => {
    return (
        <form className="space-y-4">
      {/* Nombre y Apellido en paralelo */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="block text-xs font-medium text-gray-300">Nombre *</label>
          <input
            type="text"
            placeholder="Juan"
            className="w-full px-3 py-2 text-sm bg-gray-700/50 border border-gray-600 text-white placeholder:text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
        <div className="space-y-1">
          <label className="block text-xs font-medium text-gray-300">Apellido *</label>
          <input
            type="text"
            placeholder="Pérez"
            className="w-full px-3 py-2 text-sm bg-gray-700/50 border border-gray-600 text-white placeholder:text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
      </div>

      {/* Correo Electrónico */}
      <div className="space-y-1">
        <label className="block text-xs font-medium text-gray-300">Correo electrónico *</label>
        <input
          type="email"
          placeholder="correo@ejemplo.com"
          className="w-full px-3 py-2 text-sm bg-gray-700/50 border border-gray-600 text-white placeholder:text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      {/* Teléfono */}
      <div className="space-y-1">
        <label className="block text-xs font-medium text-gray-300">Teléfono *</label>
        <input
          type="tel"
          placeholder="+502 7845 1234"
          className="w-full px-3 py-2 text-sm bg-gray-700/50 border border-gray-600 text-white placeholder:text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      {/* Tipo de Cuenta (Select personalizado o estándar) */}
      <div className="space-y-1">
        <label className="block text-xs font-medium text-gray-300">Tipo de cuenta *</label>
        <select className="w-full px-3 py-2 text-sm bg-gray-700/50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 appearance-none">
          <option>Cliente — Publicar solicitudes de trabajo</option>
          <option>Profesional — Ofrecer servicios</option>
        </select>
      </div>

      {/* Contraseña */}
      <div className="space-y-1">
        <label className="block text-xs font-medium text-gray-300">Contraseña *</label>
        <input
          type="password"
          placeholder="Mínimo 6 caracteres"
          className="w-full px-3 py-2 text-sm bg-gray-700/50 border border-gray-600 text-white placeholder:text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      {/* Confirmar Contraseña */}
      <div className="space-y-1">
        <label className="block text-xs font-medium text-gray-300">Confirmar contraseña *</label>
        <input
          type="password"
          placeholder="Repite tu contraseña"
          className="w-full px-3 py-2 text-sm bg-gray-700/50 border border-gray-600 text-white placeholder:text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      {/* Botón Principal */}
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-gray-900 font-semibold py-2.5 px-4 rounded-lg transition-all duration-200 text-sm"
      >
        Crear Cuenta
      </button>

      {/* Textos de ayuda y navegación */}
      <div className="text-center space-y-3 mt-4">
        <p className="text-[10px] text-gray-400 leading-tight">
          Al registrarte serás redirigido a la verificación de identidad. <br />
          Solo usuarios verificados pueden interactuar en la plataforma.
        </p>

      </div>
    </form>
    );
};