import Image from 'next/image'
import LoginText from '@/components/heading/login-text'

export default function AdminBox() {
  return (
    <div className="box-container">
      <Image
        alt="Logo"
        className="w-10 h-10 self-start mb-4"
        height={35}
        src="/assets/img/google-logo.png"
        width={35}
      />

      <div className="grid grid-cols-[auto_1fr] gap-4 mt-4">
        <LoginText heading="Admin Page Vegana" />
        <AdminBox />
      </div>
    </div>
  )
}
