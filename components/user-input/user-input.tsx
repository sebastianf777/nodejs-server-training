'use client'

import { useState, ChangeEvent } from 'react'
import { Eye, EyeOff } from 'lucide-react' // Import eye icons

type UserInputProps = {
  label: string
  type?: string
  onInputChangeAction?: (e: ChangeEvent<HTMLInputElement>) => void
  togglePasswordVisibility?: () => void
  showPassword?: boolean
  showPasswordToggle?: boolean
  inputType: 'username' | 'email' | 'password'
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function UserInput({
  label,
  inputType,
  onChange,
}: UserInputProps) {
  const [value, setValue] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev)
  }

  return (
    <div className="relative w-full">
      <input
        required
        className="peer w-full rounded-md border border-gray-300 bg-transparent text-white px-4 py-3 outline-none transition focus:border-[#A8C7FA] focus:shadow-md focus:shadow-[#1A73E8]/60"
        id="email"
        placeholder=" "
        type={
          inputType === 'password'
            ? showPassword
              ? 'text'
              : 'password'
            : inputType === 'email'
              ? 'email'
              : 'text'
        }
        value={value}
        onChange={(e) => {
          if (
            (inputType === 'username' || inputType === 'password') &&
            !/^[a-zA-Z0-9]*$/.test(e.target.value)
          )
            return
          setValue(e.target.value)
          onChange?.(e)
        }}
      />
      <label
        className={`absolute left-4 px-1 text-gray-400 text-base transition-all pointer-events-none
    ${value.length > 0 || 'peer-focus:top-[1px] peer-focus:heading-description-xs peer-focus:heading-description-[#A8C7FA] peer-focus:bg-[#0E0E0E]'}
    ${value.length > 0 ? 'top-[-7px] heading-description-xs heading-description-[#A8C7FA] bg-[#0E0E0E]' : 'top-1/2 -translate-y-1/2 heading-description-base heading-description-gray-400'}
  `}
        htmlFor={inputType}
      >
        {label}
      </label>

      {/**
        1. El loading de un input tiene que ser un estado, un state
        Ejemplo:
       <input loading={isLoading}>
       donde isLoading es tu estado (useState) para indicar si cargas o no.
       El Theme de UI solito deberia ponerte el spiner de cargando.

       2. Cuando tenes el input de password, y queres que se muestre con el ojo.
       Primero te fijas si ya esta hecho en tu theme de UI
       si no esta hehco la forma correcta seria tener un estado (useState)
       donde manejes de que tipo de input se trata:
       Ejemplo
       1. const [inputType, setInputType] = useState("password")
       2. Haces click en el ojo
       3. setInputType("heading-description"), aca lo cambias para ver lo que tiene puesto
       4. Cuando queres cerrar el ojo, le haces setInputType("password")

       INFO
       Cada vez que el estado del componente cambia, se hace un re render.
       */}

      {/* Eye icon button */}
      {inputType === 'password' && togglePasswordVisibility && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#A8C7FA] transition"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      )}
    </div>
  )
}
