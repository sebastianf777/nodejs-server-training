import { redirect } from 'next/navigation'
import PasswordBox from '@/components/login/password/password-box/password-box'

export default function PasswordPage() {
  /*
   * Si tengo usuario, entonces muestro la pagina
   * si no lo tengo, deberia moverme al login page
   */

  /*
  if (new Date() != null) {
    return redirect('/login')
  }
*/

  return (
    <>
      <PasswordBox />
    </>
  )
}
