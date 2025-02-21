'use client'

type LoginTextProps = {
  heading: string
  description?: string
}

export default function LoginText({ heading, description }: LoginTextProps) {
  return (
    <div className="flex flex-col flex-1 mr-10">
      <h1 className="text-[38px]">{heading}</h1>
      {description && (
        <p className="text-sm text-[#9aa0a6] mb-[30px] mt-0 leading-[1.5]">
          {description}
        </p>
      )}
    </div>
  )
}
