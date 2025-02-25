'use client'

import { useEffect } from 'react'

export default function ErrorComponent({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    console.error('Logout error:', error)
  }, [error])

  return (
    <div className="z-[1] fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-red-600 text-white p-6 rounded-md shadow-lg w-[400px] max-w-full text-center">
        <h2 className="text-lg font-bold">Error al cerrar sesión</h2>
        <p className="mt-2">
          {error.message || 'Ocurrió un problema, intenta nuevamente.'}
        </p>
        <button
          className="mt-4 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition"
          onClick={() => reset()}
        >
          Reintentar
        </button>
      </div>
    </div>
  )
}
