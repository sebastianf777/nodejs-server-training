'use client'

import { useEffect, useState } from 'react'
import { LOCAL_STORAGE } from '@/components/utils/utils.constants'
import LogoutBox from '@/components/logout/logout-box/logout-box'

export default function LogoutPage() {
  const [isLogout, setIsLogout] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage != null) {
      setIsLogout(true)
      setTimeout(() => {
        localStorage.removeItem(LOCAL_STORAGE.SESSION_TIMESTAMP)
      }, 3000)
    }
  }, [])

  /**
   * Nuestra tarea es eliminar el dato de la session de localstorage
   * del usuario
   *
   * - Hay una session -> existe -> la elimino -> muestro que ya te deslogueaste
   * - No existe -> redirect a login
   */

  if (!isLogout) {
    // TODO SEBA | Retornar un error
    return <div>Ocurrio un error, intentalo luego</div>
  }

  // TODO SEBA | Hacer un componente de logout lindo
  return (
    <div>
      <LogoutBox />
    </div>
  )
}
