import Image from 'next/image'
import TextLeft from '@/components/heading/text-left'
import HomeForm from '@/components/home/home-form/home-form'

export default function HomeBox() {
  return (
    <div className="box-container">
      <Image
        alt="Logo"
        className="w-10 h-10 self-start mb-4"
        height={35}
        src="/assets/img/google-logo.png"
        width={35}
      />

      <div className="grid grid-cols-[7fr_7fr] gap-5 w-full">
        <TextLeft description="Bienvenido a esta pagina" heading="Home" />
        <HomeForm />
      </div>
    </div>
  )
}
