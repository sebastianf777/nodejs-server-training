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
    <div className="relative mb-4 w-full">
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
    ${value.length > 0 || 'peer-focus:top-[1px] peer-focus:text-xs peer-focus:text-[#A8C7FA] peer-focus:bg-[#0E0E0E]'}
    ${value.length > 0 ? 'top-[-7px] text-xs text-[#A8C7FA] bg-[#0E0E0E]' : 'top-1/2 -translate-y-1/2 text-base text-gray-400'}
  `}
        htmlFor={inputType}
      >
        {label}
      </label>

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
