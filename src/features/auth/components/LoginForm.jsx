export const LoginForm = ({ onForgot }) => {
  return (
    <form className="space-y-4">
      {/* Email o usuario */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-300">
          Email o Usuario
        </label>
        <input
          type="text"
          placeholder="correo@ejemplo.com o usuario"
          className="w-full px-3 py-2.5 text-sm bg-gray-700 border border-gray-600 text-white placeholder:text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      {/* Contraseña */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-300">
          Contraseña
        </label>
        <input
          type="password"
          placeholder="••••••••"
          className="w-full px-3 py-2.5 text-sm bg-gray-700 border border-gray-600 text-white placeholder:text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-gray-900 font-semibold py-2.5 px-4 rounded-lg transition-all duration-200 text-sm"
      >
        Iniciar Sesión
      </button>

      <p className="text-center text-sm">
        <button
          type="button"
          className="text-yellow-400 hover:text-yellow-300 hover:underline"
          onClick={onForgot}
        >
          ¿Olvidaste tu contraseña?
        </button>
      </p>

    </form>
  );
};
